import { createMuiTheme } from "@material-ui/core/styles";

const theme2 = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        height: 20,
        color: "default",
        "&$focused": {
          color: "black"
        }
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: "23px"
      }
    }
  }
});

export default theme2;
