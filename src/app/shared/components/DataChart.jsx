import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";

export default function DataChart({
  width = "100%",
  height = "100%",
  data = [{ day: "س", value: 15 }],
}) {
  //
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
