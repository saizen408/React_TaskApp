import React, { useContext, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";
import { UserContext, AuthenticateContext } from "./contexts/usercontext";
import useInputState from "./hooks/useInputState";
import cubeSpinner from "./styles/cubeSpinner";
import { useSnackbar } from "notistack";
import { words } from "./words";

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const token = useContext(UserContext);
  const authenticate = useContext(AuthenticateContext);
  const { classes } = props;
  const {
    email,
    signIn,
    password,
    remember,
    errorMessage,
    demoMessage
  } = words[language];

  const [emailVal, handleEmailChange, emailReset] = useInputState("");
  const [passVal, handlePassChange, passReset] = useInputState("");
  const [loading, setLoader] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleErrorMessage = () => {
    const message = errorMessage;
    enqueueSnackbar(message, {
      variant: "error"
    });
  };

  const handleDemoMessage = () => {
    const message = demoMessage;

    enqueueSnackbar(message, {
      onEnter: closeSnackbar(),
      preventDuplicate: true,
      variant: "info",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      persist: true
    });
  };

  const handleSubmit = e => {
    closeSnackbar();
    e.preventDefault();
    setLoader(true);
    authenticate({ type: "LOGIN", email: emailVal, password: passVal });
    setTimeout(() => {
      if (token.error == true) {
        setLoader(false);
        handleErrorMessage();
        setTimeout(() => {
          handleDemoMessage();
        }, 3000);
      }
    }, 2000);
    emailReset();
    passReset();
  };

  useEffect(() => {
    handleDemoMessage();
  }, [language]);

  if (loading) {
    return <div className={classes.loader}>{cubeSpinner()}</div>;
  }

  return (
    <main className={classes.main}>
      <Paper elevation={3} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">French</MenuItem>
          <MenuItem value="es">Spanish</MenuItem>
          <MenuItem value="de">German</MenuItem>
          <MenuItem value="ja">日本語</MenuItem>
        </Select>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">{email}</InputLabel>
            <Input
              id="email"
              name="email"
              value={emailVal}
              onChange={handleEmailChange}
              autoFocus
            ></Input>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">{password}</InputLabel>
            <Input
              id="password"
              name="password"
              value={passVal}
              onChange={handlePassChange}
              autoFocus
            ></Input>
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={remember}
          />
          <Button
            variant="contained"
            onClick={closeSnackbar(handleDemoMessage)}
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Form);
