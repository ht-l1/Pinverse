import { makeStyles } from '@mui/styles';

import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles ((theme) => ({

footer: {
    padding: themeInstance.spacing(2),
    marginTop: themeInstance.spacing(4),
  },

}));