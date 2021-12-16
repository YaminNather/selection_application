import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import Public from "@mui/icons-material/Public";
import StatisticsItem, { StatisticsItemInfo } from "./statistics_item";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import InsertChartOutlined from "@mui/icons-material/InsertChartOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import QuizOutlined from "@mui/icons-material/QuizOutlined";
import TimerOutlined from "@mui/icons-material/TimerOutlined";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";


const DashboardStatistics: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Card sx={{height: "100%", padding: "12px"}}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Your statistics</Typography>
          
          <Box flexGrow="1.0" />

          <Typography fontWeight="bold">Graph</Typography>
          
          <Switch />
        </Box>
        
        <Typography fontWeight="500" sx={{marginTop: ""}}>Overview</Typography>

        <Grid container={true} rowSpacing={2} sx={{marginTop: "20px"}}>
          {statisticItemInfos.map((value, index) => {
            return (
              <Grid item={true} sm={4}>
                <StatisticsItem info={value} />
              </Grid>
            );
          })}          
        </Grid>
      </Card>
    );
  }

  return render();
}

const statisticItemInfos: StatisticsItemInfo[] = [
  { itemName: "Active user", color: "#18BA92", icon: <Public />, value: "279", changePercentage: -27.9 },
  { itemName: "Attendance", color: "#FABB18", icon: <BarChartOutlined />, value: "20%", changePercentage: 17.9 },
  { itemName: "Average quiz score", color: "#01B1C9", icon: <InsertChartOutlined />, value: "20%", changePercentage: 17.9 },
  { itemName: "Total enrolled", color: "#FE8E8E", icon: <PersonOutlined />, value: "279", changePercentage: -27.9 },
  { itemName: "Total question resolved", color: "rgba(250, 0, 255, 0.5)", icon: <QuizOutlined />, value: "279", changePercentage: -27.9 },
  { itemName: "Total hour spent", color: "#3672E9", icon: <TimerOutlined />, value: "40hr:22min:00sec" }
];


export default DashboardStatistics;