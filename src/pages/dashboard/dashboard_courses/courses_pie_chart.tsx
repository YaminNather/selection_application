import Box from "@mui/material/Box";
import { FC, Ref, useEffect, useRef, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

interface ChartData {
  name: string;
  value: number;
  color: string;
}

const chartData: ChartData[] = [
  { name: "Group A", value: 400, color: "rgb(96, 239, 255)" },
  { name: "Group B", value: 300, color: "rgb(255, 249, 91)" },
  { name: "Group C", value: 300, color: "rgb(255, 200, 200)" }
];

const CoursesPieChart: FC = (props) => {
  const containerRef: Ref<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<number[] | null>(null);

  useEffect(
    () => {
      if(containerRef.current == null)
        return;

      const containerBoundingRect = containerRef.current.getBoundingClientRect();
      setSize([containerBoundingRect.width, containerBoundingRect.height]);
    },
    [containerRef.current]
  );

  function render(): JSX.Element {
    return (
      <Box ref={containerRef} width="100%" height="100%">
        {buildPieChart()}
      </Box>
    );
  }

  const buildPieChart = (): JSX.Element => {
    if(size == null)
      return <></>;

    const minSize: number = Math.min(size[0], size[1]);
    const outerRadius: number = minSize / 2;
    const pieWidth = 40.0;

    return (
      <PieChart width={minSize} height={minSize}>
        <Pie
          data={chartData}
          fill="#8884d8"
          innerRadius={outerRadius - pieWidth}
          outerRadius={outerRadius}
          dataKey="value"        
        >      
          {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
        </Pie>
      </PieChart>
    );
  };

  return render();
}


export default CoursesPieChart;