import { makeStyles } from '@mui/styles';

// fixing the new error: themeSpacing not a function
import { createTheme } from '@mui/material/styles';
const themeInstance = createTheme();

export default makeStyles ((theme) => ({
  
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },

      mainContainer: {
        justifyContent: 'center',
        [themeInstance.breakpoints.down('sm')]: {
          flexDirection: 'column-reverse',
        },
      },

      footer: {
        padding: themeInstance.spacing(2),
        marginTop: themeInstance.spacing(4), // Add margin top to separate the footer from the content
      },

}));