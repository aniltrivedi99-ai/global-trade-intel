const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!resendApiKey || !contactEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL");
    return response
      .status(500)
      .json({ error: "Email service is not configured" });
  }

  const { name, email, company = "", message } = request.body ?? {};

  const cleanName = String(name ?? "").trim().slice(0, 100);
  const cleanEmail = String(email ?? "").trim().slice(0, 255);
  const cleanCompany = String(company ?? "").trim().slice(0, 100);
  const cleanMessage = String(message ?? "").trim().slice(0, 1000);

  if (!cleanName || !EMAIL_PATTERN.test(cleanEmail) || !cleanMessage) {
    return response.status(400).json({
      error: "Please provide a valid name, email and message",
    });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GlobalTradeIntell Website <website@globaltradeintell.com>",
        to: [contactEmail],
        reply_to: cleanEmail,
        subject: `New website enquiry - ${cleanName}`,
        html: `
          <h2>New website enquiry</h2>
          <p><strong>Full name:</strong> ${escapeHtml(cleanName)}</p>
          <p><strong>Company:</strong> ${escapeHtml(
            cleanCompany || "Not provided"
          )}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(cleanMessage).replaceAll("\n", "<br>")}</p>
          <hr>
          <p>Submitted through globaltradeintell.com</p>
        `,
      }),
    });

    const result = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend error:", result);
      return response.status(502).json({
        error: "Email delivery failed",
      });
    }

    return response.status(200).json({
      success: true,
      id: result.id,
    });
  } catch (error) {
    console.error("Contact email error:", error);
    return response.status(500).json({
      error: "Unable to send notification",
    });
  }
}
