const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    type: localStorage.getItem('theme'),
    primary: {
      main: '#7e57c2',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem'
    }
  }
})

export default theme
