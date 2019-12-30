import { amber, green, red, blue } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: red[500]
    },
    info: {
      backgroundColor: blue[500]
    },
    warning: {
      backgroundColor: amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: "flex",
      alignItems: "center"
    }
  }
});

export default styles;
