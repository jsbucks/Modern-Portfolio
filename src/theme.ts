import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f4c542'
    },
    secondary: {
      main: '#4f46e5'
    },
    background: {
      default: '#0b0b0f',
      paper: '#14141b'
    },
    text: {
      primary: '#f9fafb',
      secondary: '#d1d5db'
    }
  },
  typography: {
    fontFamily: ['"Inter"', '"Space Grotesk"', 'system-ui', 'sans-serif'].join(', '),
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600
    },
    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  }
});

export default theme;
