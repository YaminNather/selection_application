import './App.css';
import Dashboard from './pages/dashboard/dashboard';
import { ThemeProvider } from '@emotion/react';
import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';


export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "Poppins",
    body1: {
      fontSize: "12px"
    },
    subtitle1: {
      color: "#00000055",
      fontSize: "12px",
      fontWeight: "600"
    },
    h6: {
      fontWeight: "600"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none"
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          fontWeight: "bold",
          textDecoration: "none"
        }
      }
    },    

    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#1B2559",
          fontWeight: "500"
        },
        secondary: {
          color: "#00000055",
          fontSize: "12px",
          fontWeight: "600"
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#F7F6F4"
        }
      }
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          boxShadow: "none",
          color: "black"
        }
      }
    }      
  }
};
const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
