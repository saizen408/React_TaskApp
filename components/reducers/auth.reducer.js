import Router from "next/router";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const authReducer = async (state, action) => {
  switch (action.type) {
    case "LOGIN":
      var data = {
        email: action.email,
        password: action.password
      };
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://owusu-task-manager.herokuapp.com/users/login";
        const response = await fetch(proxyUrl + url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });

        const userInfo = await response.json();
        var token = userInfo.token;
        cookies.set("token", token);
        state.token = token;

        Router.push("/TodoAppPage");
      } catch (e) {
        state.error = true;
        console.error("Error:", e);
        Router.push("/");
      }
      return state;

    default:
      return state;
  }
};
export default authReducer;
