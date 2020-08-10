const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    type: localStorage.getItem('theme')
  }
})

export default theme
