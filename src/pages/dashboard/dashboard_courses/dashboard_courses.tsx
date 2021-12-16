import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import CoursesPieChart from "./courses_pie_chart";

const DashboardCourses: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Card sx={{display: "flex", height: "300px", padding: "12px", flexDirection: "column"}}>
        <Typography variant="h6">Course</Typography>
         
        <Typography variant="subtitle1">Total courses assigned</Typography>        

        <Box marginTop="32px" flexGrow="1">
          <CoursesPieChart />
        </Box>
      </Card>
    );
  }

  return render();
}


export default DashboardCourses;