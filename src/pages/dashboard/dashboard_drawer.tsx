import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import BookOutlined from "@mui/icons-material/BookOutlined";
import MilitaryTechOutlined from "@mui/icons-material/MilitaryTechOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import { createTheme, Theme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "../../App";


const DashboardDrawer: FC = (props) => {
  function render(): JSX.Element {
    const overridingThemeOptions: ThemeOptions = {
      components: {
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              color: "black"
            }
          }
        },

        MuiListItemText: {
          styleOverrides: {
            primary: {
              color: "black",
              fontWeight: "bold",
              fontSize: "16px"
            }
          }
        }
      }
    };
    const theme: Theme = createTheme(themeOptions, overridingThemeOptions);

    return (
      <ThemeProvider theme={theme}>
        <Drawer variant="permanent" anchor="left">
          <Box display="flex" width="240px" flexDirection="column" alignItems="center">
            <img alt="logo" src="/logo.png" style={{marginTop: "32px", width: "100px"}} />

            <List sx={{marginTop: "64px"}}>
              {buildLink("Home", <HomeOutlined />)}
              
              {buildLink("Course", <BookOutlined />)}
              
              {buildLink("Specialization", <MilitaryTechOutlined />)}
              
              {buildLink("Learning path", <MilitaryTechOutlined />)}
                        
              {buildLink("Performance", <BarChartOutlined />)}
              
              {buildLink("Cart", <ShoppingCartOutlined />)}
              
              {buildLink("Settings", <SettingsOutlined />)}
            </List>
          </Box>
        </Drawer>
      </ThemeProvider>
    );
  }

  function buildLink(to: string, icon: JSX.Element): JSX.Element {
    return (
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>        

          <ListItemText primary={to} />
        </ListItemButton>
      </ListItem>
    );
  }

  return render();
}


export default DashboardDrawer;