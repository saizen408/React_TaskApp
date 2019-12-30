import React from "react";
import App from "next/app";
import PageContent from "../components/PageContent";
import { ThemeProvider } from "../components/contexts/ThemeContext";
import { LanguageProvider } from "../components/contexts/LanguageContext";
import { TodosProvider } from "../components/contexts/todoscontext";
import { UserProvider } from "../components/contexts/usercontext";
import { SnackbarProvider } from "notistack";
import { withStyles } from "@material-ui/core/styles";
import styles from "../components/styles/SnackBarStyles";
import Navbar from "../components/Navbar";
import { SortedProvider } from "../components/contexts/SortedContext";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps, classes } = this.props;
    return (
      <div>
        <ThemeProvider>
          <LanguageProvider>
            <SnackbarProvider
              maxSnack={3}
              className={classes.root}
              iconVariant={{ success: "✅", error: "⚠️" }}
            >
              <PageContent>
                <UserProvider>
                  <Navbar {...pageProps} />
                  <SortedProvider>
                    <TodosProvider>
                      <Component {...pageProps} />
                    </TodosProvider>
                  </SortedProvider>
                </UserProvider>
              </PageContent>
            </SnackbarProvider>
          </LanguageProvider>
        </ThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(MyApp);
