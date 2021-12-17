import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import CoursesPieChart from "./courses_pie_chart";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import ShowChartOutlined from "@mui/icons-material/ShowChartOutlined";
import AssignmentLateOutlined from "@mui/icons-material/AssignmentLateOutlined";

const DashboardCourses: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Card sx={{display: "flex", height: "300px", padding: "12px", flexDirection: "column"}}>
        <Typography variant="h6">Course</Typography>
         
        <Typography variant="subtitle1">Total courses assigned</Typography>        

        <Box marginTop="32px" display="flex" flexGrow="1.0">
          <Box position="relative" flexGrow="1.0">
            <CoursesPieChart />

            <Box 
              position="absolute" left="0px" top="0px" 
              display="inline-flex" width="100%" height="100%" 
              flexDirection="column" justifyContent="center" alignItems="center"
            >
              <Typography variant="h6" fontWeight="bold">2860</Typography>
              
              <Typography color="GrayText">Total</Typography>
            </Box>
          </Box>
          
          <Box display="inline-flex" flexDirection="column" justifyContent="center" alignItems="center">
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlined htmlColor="#348364" />
                </ListItemIcon>

                <ListItemText primary="Course completed" />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlined htmlColor="#FF930F" />
                </ListItemIcon>

                <ListItemText primary="Ongoing course" />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  <AssignmentLateOutlined htmlColor="#FF5858" />
                </ListItemIcon>

                <ListItemText primary="Not started" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Card>
    );
  }

  return render();
}


export default DashboardCourses;