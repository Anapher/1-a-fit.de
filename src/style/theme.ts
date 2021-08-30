import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createTheme({
   palette: {
      primary: {
         main: '#3498db',
      },
      secondary: {
         main: '#92c121',
         contrastText: '#FFFFFF',
      },
      type: 'light',
      text: {
         primary: '#101012',
         secondary: '#545456',
      },
      error: {
         main: '#d32f2f',
      },
      success: {
         main: '#28a745',
      },
   },
});

export default responsiveFontSizes(theme);
