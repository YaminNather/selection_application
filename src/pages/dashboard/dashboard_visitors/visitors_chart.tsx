import { FC } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export interface ChartData {
  name: string;
  uv: number;  
  pv: number;  
}

const data: ChartData[] = [
  { name: "Monday", pv: 7500 , uv: 1000 },
  { name: "Tuesday", pv: 7500 , uv: 2000 },
  { name: "Wednesday", pv: 7500 , uv: 3000 },
  { name: "Thursday", pv: 7500 , uv: 4000 },
  { name: "Friday", pv: 7500 , uv: 5000 },
  { name: "Saturday", pv: 7500 , uv: 6000 },
  { name: "Sunday", pv: 7500, uv: 7000 }
];

const getPath = (x: number, y: number, width: number, height: number) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

interface CustomBarProps {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

const CustomBar: FC<CustomBarProps> = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} strokeLinecap="round" fill={fill} />;
};

const VisitorsChart: FC = (props) => {
  function render(): JSX.Element {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>          
          <XAxis dataKey="name" axisLine={false} />

          <YAxis axisLine={false} />
          
          <Tooltip />
          
          <Legend margin={{bottom: 100}} align="right" verticalAlign="top" iconType="circle" />
          
          <Bar dataKey="pv" name="New Visitors" fill="#4318FF" radius={[25, 25, 0, 0]} barSize={16.0} />
          
          <Bar dataKey="uv" name="Previous Visitors" fill="#6AD2FF" radius={[25, 25, 0, 0]} barSize={16.0} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return render();
}


export default VisitorsChart;