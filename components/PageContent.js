import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);

  const styles = {
    background: isDarkMode ? "#394bad" : "#edeef2",
    height: "100vh",
    width: "100vw"
  };

  return <div style={styles}>{props.children}</div>;
}
