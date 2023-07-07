import { makeStyles } from '@mui/styles';

// fixing the new error: themeXXX not a function
import { ThemeProvider } from '@mui/material/styles';
const themeInstance = ThemeProvider();

export default makeStyles ((theme) => ({

footer: {
    padding: themeInstance.spacing(2),
    marginTop: themeInstance.spacing(4), // Add margin top to separate the footer from the content
  },

}));