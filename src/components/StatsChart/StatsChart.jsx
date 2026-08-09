import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { martialArts } from "../../data/martialArts";
import styles from "./StatsChart.module.css";

const CHART_DISCIPLINES = ["boxing", "muay-thai", "bjj", "wrestling", "judo"];

const chartData = CHART_DISCIPLINES.map((id) => {
  const art = martialArts.find((m) => m.id === id);
  return {
    name: art.name,
    Striking: art.ratings.striking,
    Grappling: art.ratings.grappling,
  };
});

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipLabel}>{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} className={styles.tooltipRow}>
          <span style={{ color: entry.color }}>{entry.name}</span>
          <span>{entry.value}%</span>
        </p>
      ))}
    </div>
  );
}

function StatsChart() {
  return (
    <div className={styles.chartCard}>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="rgba(248,250,252,0.08)" />
          <XAxis
            dataKey="name"
            stroke="#94A3B8"
            fontSize={12}
            fontFamily="JetBrains Mono, monospace"
            tickLine={false}
            axisLine={{ stroke: "rgba(248,250,252,0.12)" }}
          />
          <YAxis
            stroke="#94A3B8"
            fontSize={12}
            fontFamily="JetBrains Mono, monospace"
            tickLine={false}
            axisLine={false}
            width={36}
          />
          <Tooltip cursor={{ fill: "rgba(248,250,252,0.04)" }} content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 12,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              paddingTop: 16,
            }}
          />
          <Bar dataKey="Striking" fill="#F59E0B" radius={[4, 4, 0, 0]} maxBarSize={36} />
          <Bar dataKey="Grappling" fill="#475569" radius={[4, 4, 0, 0]} maxBarSize={36} />
        </BarChart>
      </ResponsiveContainer>
      <p className={styles.footnote}>
        Ratings are comparative and illustrative, not scientifically measured.
      </p>
    </div>
  );
}

export default StatsChart;
