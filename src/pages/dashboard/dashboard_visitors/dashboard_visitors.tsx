import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { FC } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import VisitorsChart from "./visitors_chart";

const DashboardVisitors: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Card sx={{height: "300px", padding: "12px", display: "flex", flexDirection: "column"}}>
        <Typography variant="h6">Visitors</Typography>

        <Box marginTop="24px" display="flex" flexDirection="row" alignItems="center">
          <Typography variant="h5" fontWeight="bold">254,845</Typography>

          <Box flexGrow="1.0" />

          <Typography fontWeight="bold">Most visited</Typography>

          {new Array(3).fill(2).map((value, index) => <Link marginLeft="8px">Introduction to hadoop</Link>)}
        </Box>

        <Box marginTop="32px" flexGrow="1.0">
          <VisitorsChart />
        </Box>
      </Card>
    );
  }

  return render();
}


export default DashboardVisitors;