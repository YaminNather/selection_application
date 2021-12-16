import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import MenuBook from "@mui/icons-material/MenuBook";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

const DashboardCoursesInDemand: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Card sx={{padding: "12px"}}>
        <Typography variant="h6">Course in demand</Typography>

        <List>
          {new Array(5).fill(0).map(
            (value, index) => {
              return (
                <ListItem disablePadding={true}>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar>
                        <MenuBook color="primary" />
                      </Avatar>
                    </ListItemAvatar>
                    
                    <ListItemText primary="Introduction with hadoop" secondary="28 employee" />
                  </ListItemButton>
                </ListItem>
              );
            }
          )}
        </List>
      </Card>
    );
  }

  return render();
}


export default DashboardCoursesInDemand;