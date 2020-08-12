const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    type: localStorage.getItem('theme'),
    primary: {
      main: '#7e57c2',
    },
  }
})

export default theme
