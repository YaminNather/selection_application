import { Box, IconButton, Input, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { FC } from "react";
import { KeyboardArrowDown, NotificationsOutlined, Search } from "@mui/icons-material";

const DashboardAppBar: FC = (props) => {
  function render(): JSX.Element {
    return (
      <AppBar position="static">
        <Toolbar sx={{height: "80px"}}>
          <Button variant="contained">Explore <KeyboardArrowDown /></Button>

          <Input startAdornment={<Search color="disabled" />} placeholder="Search Course" sx={{ marginLeft: "32px" }} />

          <Box sx={{flexGrow: 1}} />

          <IconButton>
            <NotificationsOutlined />
          </IconButton>

          <Box display="inline-flex" alignItems="center">
            <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/63.jpg" />

            <Box display="inline-flex" flexDirection="column" marginLeft="8px">
              <Box display="inline-flex" alignItems="center">
                <Typography>Jane Doe</Typography>

                <KeyboardArrowDown color="primary" />
              </Box>
              
              <Typography variant="subtitle1">987654321</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return render();
}


export default DashboardAppBar;