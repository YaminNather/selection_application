import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import createTheme, { Theme, ThemeOptions } from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { Colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import { themeOptions } from "../../../App";

extend([namesPlugin]);

export interface StatisticsItemInfo {
  itemName: string;
  color: string;
  icon: JSX.Element;
  value: string;
  changePercentage?: number;  
}


export interface StatisticsItemProps {
  info: StatisticsItemInfo;
}

const StatisticsItem: FC<StatisticsItemProps> = (props) => {
  function render(): JSX.Element {
    const primary: JSX.Element = (
      <Box display="inline-flex" alignItems="center">
        <Typography fontWeight="bold" fontSize={16}>{props.info.value}</Typography>

        {buildChangePercentageComponent()}
      </Box>
    );
    
    return (
      <ThemeProvider theme={createAvatarTheme(props.info.color)}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              {props.info.icon}
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary={primary} secondary={props.info.itemName} />
        </ListItem>
      </ThemeProvider>
    );
  }

  const buildChangePercentageComponent = (): JSX.Element => {
    if(props.info.changePercentage === undefined)
      return (<></>);

    let color: string;    
    let arrow: JSX.Element;

    if(props.info.changePercentage > 0.0) {
      arrow = <ArrowDropUp />;
      color = "green";
    }
    else {
      arrow = <ArrowDropDown />;
      color = "red";
    }
    return (
      <Box display="inline-flex" alignItems="center" color={color}>
        {arrow}

        <Typography fontWeight="600">{Math.abs(props.info.changePercentage).toFixed(1)}%</Typography>
      </Box>
    );
  };

  return render();
}

function createAvatarTheme(color: string): Theme {
  const colorObject: Colord = new Colord(color);  

  const overridingThemeOptions: ThemeOptions = {
    components: {
      MuiAvatar: {
        styleOverrides: {
          root: { backgroundColor: colorObject.alpha(0.1).toHex(), color: color }
        }
      },  
      
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontSize: "16px"
          }
        }
      }
    }
  };

  return createTheme(themeOptions, overridingThemeOptions);
}


export default StatisticsItem;