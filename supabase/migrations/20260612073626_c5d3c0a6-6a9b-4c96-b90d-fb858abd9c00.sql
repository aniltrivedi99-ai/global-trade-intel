ALTER TABLE public.contact_inquiries
  ADD CONSTRAINT contact_inquiries_name_len CHECK (char_length(name) BETWEEN 1 AND 100),
  ADD CONSTRAINT contact_inquiries_email_len CHECK (char_length(email) BETWEEN 3 AND 255),
  ADD CONSTRAINT contact_inquiries_company_len CHECK (company IS NULL OR char_length(company) <= 100),
  ADD CONSTRAINT contact_inquiries_message_len CHECK (char_length(message) BETWEEN 1 AND 2000);