import ArrowDownwardOutlined from "@mui/icons-material/ArrowDownwardOutlined";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { createTheme, Theme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { themeOptions } from "../../../App";

const DashboardReportDownloadCard: FC = (props) => {
  function render(): JSX.Element {
    const overridingThemeOptions: ThemeOptions = {
      typography: {
        body1: {
          color: "white"
        }
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              color: "black",
              backgroundColor: "white"
            }
          }
        }
      }
    };
    const theme: Theme = createTheme(themeOptions, overridingThemeOptions);

    return (
      <ThemeProvider theme={theme}>
        <Card 
          sx={{
            display: "flex", height: "70px", 
            backgroundImage: "linear-gradient(to bottom, #5B5B5B, #232323)",
            padding: "16px", justifyContent: "space-between", alignItems: "center"
          }}
        >
          <Box>
            <Typography fontWeight="600">Download Report</Typography>
          
            <Box display="inline-flex">
              <Typography sx={{marginTop: "4px"}} color="primary">Last week</Typography>

              <KeyboardArrowDown />
            </Box>
          </Box>              
          
          <Button variant="contained" size="small" sx={{minWidth: "auto", width: "28px", height:"28px"}}>
            <ArrowDownwardOutlined fontSize="small" />
          </Button>
        </Card>
      </ThemeProvider>
    );
  }

  return render();
}


export default DashboardReportDownloadCard;