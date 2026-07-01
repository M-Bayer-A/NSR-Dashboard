import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";

export default function DataChart({ width = "100%", height = "100%" }) {
  const data = [
    { day: "س", value: 15 },
    { day: "ج", value: 35 },
    { day: "خ", value: 50 },
    { day: "أر", value: 80 },
    { day: "ث", value: 130 },
    { day: "أث", value: 55 },
    { day: "أح", value: 72 },
  ];

  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart data={data}>
        <XAxis dataKey="day" axisLine={false} tickLine={false} />

        <Bar
          dataKey="value"
          fill="#397AFF"
          radius={[20, 20, 0, 0]}
          barSize={50}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
