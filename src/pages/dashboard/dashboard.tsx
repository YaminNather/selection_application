import { FC } from "react";
import DashboardAppBar from "./dashboard_app_bar";
import Box from "@mui/material/Box";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { KeyboardArrowDown, ArrowDownwardOutlined } from "@mui/icons-material";
import DashboardCourses from "./dashboard_courses/dashboard_courses";
import DashboardStatistics from "./dashboard_statistics/dashboard_statistics";
import DashboardVisitors from "./dashboard_visitors/dashboard_visitors";
import DashboardCoursesInDemand from "./dashboard_courses_in_demand/dashboard_courses_in_demand";
import DashboardDrawer from "./dashboard_drawer";
import DashboardReportDownloadCard from "./dashboard_report_download_card/dashboard_report_download_card";

const Dashboard: FC = () => {
  return (
    <Box display="flex">
      <DashboardDrawer />

      <Box flexGrow="1.0" marginLeft="240px">
        <DashboardAppBar />

        <Container sx={{padding: "32px"}}>
          <Typography variant="h6">Performance</Typography>

          <Grid container={true} direction="row" columnSpacing={2} sx={{marginTop: "24px"}}>
            <Grid item={true} xs={9}>
              <Card sx={{display: "flex", height: "70px", paddingLeft: "16px", paddingRight: "16px", flexDirection: "column", justifyContent: "center"}}>
                <Typography variant="h6">Hello Jane !</Typography>
                
                <Typography sx={{marginTop: "8px"}}>It's good to see you again.</Typography>
              </Card>
            </Grid>
            
            <Grid item={true} xs={3}>
              <DashboardReportDownloadCard />
            </Grid>
          </Grid>

          <Box marginTop="28px" display="flex" justifyContent="flex-end">
            <Typography>Show:</Typography>

            <Typography>Employee</Typography>

            <KeyboardArrowDown />
          </Box>

          <Grid container={true} rowSpacing={2} columnSpacing={2} sx={{marginTop: "28px", height: "256px"}}>
            <Grid item={true} sm={4}>
              <DashboardCourses />
            </Grid>

            <Grid item={true} sm={8}>
              <DashboardStatistics />
            </Grid>

            <Grid item={true} sm={4}>
              <Card sx={{height: "300px", padding: "12px"}}>
                <Typography variant="h6">Announcement</Typography>
              </Card>
            </Grid>

            <Grid item={true} sm={8}>
              <DashboardVisitors />
            </Grid>

            <Grid item={true} sm={4}>
              <DashboardCoursesInDemand />
            </Grid>
            
            <Grid item={true} sm={4}>
              <Card sx={{height: "100%", padding: "12px"}}>
                <Typography variant="h6">Recent activity</Typography>
              </Card>
            </Grid>
            
            <Grid item={true} sm={4}>
              <Card sx={{height: "100%", padding: "12px"}}>
                <Typography variant="h6">Recent activity</Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;