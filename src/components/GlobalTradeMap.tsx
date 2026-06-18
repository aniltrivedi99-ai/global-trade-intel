import { useState } from "react";
import { Package, Percent, Users } from "lucide-react";

interface TradeHub {
  id: string;
  name: string;
  cx: number;
  cy: number;
  r: number;
  topExport: string;
  dutyRate: string;
  buyers: string;
}

const tradeHubs: TradeHub[] = [
  {
    id: "na",
    name: "North America",
    cx: 260,
    cy: 180,
    r: 18,
    topExport: "Polymers, Machinery Components",
    dutyRate: "4.2%",
    buyers: "2,400+",
  },
  {
    id: "eu",
    name: "European Union",
    cx: 490,
    cy: 160,
    r: 18,
    topExport: "Chemicals, Auto Parts",
    dutyRate: "3.8%",
    buyers: "3,100+",
  },
  {
    id: "me",
    name: "Middle East",
    cx: 540,
    cy: 220,
    r: 16,
    topExport: "Petrochemicals, Steel",
    dutyRate: "5.1%",
    buyers: "1,800+",
  },
  {
    id: "sea",
    name: "Southeast Asia",
    cx: 660,
    cy: 260,
    r: 18,
    topExport: "Electronics, Textiles",
    dutyRate: "4.5%",
    buyers: "2,700+",
  },
  {
    id: "sa",
    name: "South Asia",
    cx: 580,
    cy: 240,
    r: 16,
    topExport: "Pharma, Agri Products",
    dutyRate: "6.2%",
    buyers: "1,500+",
  },
  {
    id: "af",
    name: "Africa",
    cx: 500,
    cy: 300,
    r: 16,
    topExport: "Minerals, Agriculture",
    dutyRate: "7.5%",
    buyers: "900+",
  },
  {
    id: "la",
    name: "Latin America",
    cx: 300,
    cy: 320,
    r: 16,
    topExport: "Food Products, Minerals",
    dutyRate: "5.8%",
    buyers: "1,200+",
  },
];

const GlobalTradeMap = () => {
  const [activeHub, setActiveHub] = useState<TradeHub | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (hub: TradeHub, e: React.MouseEvent) => {
    setActiveHub(hub);
    updateTooltipPos(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updateTooltipPos(e);
  };

  const updateTooltipPos = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as SVGElement).getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8">
      <div className="rounded-xl border border-accent/20 bg-card/60 backdrop-blur-sm p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Live Trade Intelligence
          </span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-muted-foreground">Live Data</span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[hsl(215,80%,12%)] to-[hsl(200,70%,8%)]">
          <svg
            viewBox="0 0 800 420"
            className="w-full h-auto"
            onMouseMove={handleMouseMove}
          >
            {/* Grid lines */}
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={i * 100}
                y1={0}
                x2={i * 100}
                y2={420}
                stroke="rgba(255,255,255,0.03)"
                strokeWidth={1}
              />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <line
                key={`h${i}`}
                x1={0}
                y1={i * 105}
                x2={800}
                y2={i * 105}
                stroke="rgba(255,255,255,0.03)"
                strokeWidth={1}
              />
            ))}

            {/* Simplified world map outline using paths */}
            {/* North America */}
            <path
              d="M180,120 L320,100 L340,180 L300,220 L250,250 L200,230 L170,180 Z"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={1}
            />
            {/* South America */}
            <path
              d="M250,280 L310,270 L330,320 L300,400 L260,380 L240,320 Z"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={1}
            />
            {/* Europe */}
            <path
              d="M440,100 L520,90 L550,130 L540,170 L500,190 L460,180 L430,140 Z"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={1}
            />
            {/* Africa */}
            <path
              d="M440,210 L520,200 L550,260 L530,340 L480,360 L450,320 L430,260 Z"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={1}
            />
            {/* Asia */}
            <path
              d="M540,90 L720,80 L760,140 L740,220 L680,260 L600,250 L560,200 Z"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={1}
            />
            {/* Australia */}
            <path
              d="M680,300 L760,290 L780,340 L750,380 L690,370 Z"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={1}
            />

            {/* Connection lines between hubs */}
            <g stroke="rgba(255,255,255,0.06)" strokeWidth={1} strokeDasharray="4,4">
              <line x1={260} y1={180} x2={490} y2={160} />
              <line x1={490} y1={160} x2={540} y2={220} />
              <line x1={540} y1={220} x2={660} y2={260} />
              <line x1={260} y1={180} x2={300} y2={320} />
              <line x1={490} y1={160} x2={500} y2={300} />
              <line x1={580} y1={240} x2={660} y2={260} />
            </g>

            {/* Trade hub nodes */}
            {tradeHubs.map((hub) => (
              <g
                key={hub.id}
                onMouseEnter={(e) => handleMouseEnter(hub, e)}
                onMouseLeave={() => setActiveHub(null)}
                className="cursor-pointer"
              >
                {/* Glow ring */}
                <circle
                  cx={hub.cx}
                  cy={hub.cy}
                  r={hub.r + 8}
                  fill="none"
                  stroke="hsl(200, 75%, 45%)"
                  strokeWidth={1}
                  opacity={activeHub?.id === hub.id ? 0.6 : 0}
                  className="transition-opacity duration-300"
                >
                  {activeHub?.id === hub.id && (
                    <animate
                      attributeName="r"
                      values={`${hub.r + 6};${hub.r + 14};${hub.r + 6}`}
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  )}
                  {activeHub?.id === hub.id && (
                    <animate
                      attributeName="opacity"
                      values="0.6;0.1;0.6"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  )}
                </circle>
                {/* Main dot */}
                <circle
                  cx={hub.cx}
                  cy={hub.cy}
                  r={hub.r}
                  fill={activeHub?.id === hub.id ? "hsl(200, 75%, 55%)" : "hsl(200, 75%, 45%)"}
                  className="transition-all duration-300"
                  style={{
                    filter: activeHub?.id === hub.id
                      ? "drop-shadow(0 0 8px hsl(200, 75%, 55%))"
                      : "drop-shadow(0 0 4px hsl(200, 75%, 45%))",
                  }}
                />
                {/* Inner dot */}
                <circle
                  cx={hub.cx}
                  cy={hub.cy}
                  r={hub.r * 0.4}
                  fill="hsl(215, 80%, 15%)"
                />
                {/* Label */}
                <text
                  x={hub.cx}
                  y={hub.cy + hub.r + 14}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.6)"
                  fontSize={10}
                  fontWeight={500}
                  className="pointer-events-none select-none"
                >
                  {hub.name}
                </text>
              </g>
            ))}

            {/* Animated data particles */}
            <circle r={2} fill="hsl(200, 75%, 60%)">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path="M260,180 L490,160"
              />
            </circle>
            <circle r={2} fill="hsl(200, 75%, 60%)">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M490,160 L540,220 L660,260"
              />
            </circle>
            <circle r={1.5} fill="hsl(200, 75%, 60%)">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M260,180 L300,320"
              />
            </circle>
          </svg>

          {/* Tooltip */}
          {activeHub && (
            <div
              className="absolute pointer-events-none z-20"
              style={{
                left: `${(tooltipPos.x / 800) * 100}%`,
                top: `${(tooltipPos.y / 420) * 100}%`,
                transform: "translate(-50%, -110%)",
              }}
            >
              <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-xl p-3 min-w-[220px]">
                <h4 className="text-sm font-bold text-foreground mb-2 border-b border-border pb-1">
                  {activeHub.name}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Package className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
                        Top Export Demand
                      </span>
                      <span className="text-xs text-foreground font-medium">
                        {activeHub.topExport}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Percent className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
                        Avg Duty Rate
                      </span>
                      <span className="text-xs text-foreground font-medium">
                        {activeHub.dutyRate}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
                        Active Verified Buyers
                      </span>
                      <span className="text-xs text-foreground font-medium">
                        {activeHub.buyers}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tooltip arrow */}
              <div className="flex justify-center">
                <div className="w-2 h-2 bg-card/95 border-r border-b border-border rotate-45 -mt-1" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalTradeMap;
