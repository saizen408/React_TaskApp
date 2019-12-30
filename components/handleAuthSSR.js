import axios from "axios";
import Router from "next/router";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

export async function handleAuthSSR(ctx) {
  let token = null;

  if (ctx.req) {
    token = ctx.req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  } else {
    token = cookies.get("token");
  }
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = "https://owusu-task-manager.herokuapp.com/tasks";

  try {
    const res = await axios.get(proxyUrl + targetUrl, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    return res;
  } catch (e) {
    console.error("Error:", e);
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/"
      });
      ctx.res.end();
    } else {
      Router.push("/");
    }
  }
}
