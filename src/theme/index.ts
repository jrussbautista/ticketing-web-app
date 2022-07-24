import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import colors from './colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: colors.main,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
