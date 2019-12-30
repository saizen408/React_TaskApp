import { useReducer, useEffect } from "react";
import { handleAuthSSR } from "../handleAuthSSR";

function useDBReducer(defaultVal, todoReducer) {
  const [state, dispatch] = useReducer(todoReducer, defaultVal, async ctx => {
    let val;
    try {
      const res = await handleAuthSSR(ctx);
      val = res.data;
      val.toggled = false;
    } catch (e) {
      console.log(e);
      return (val = defaultVal);
    }
    return val;
  });
  console.log(state);
  return [state, dispatch];
}

export { useDBReducer };
