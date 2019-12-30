import axios from "axios";
import { withCookies, Cookies } from "react-cookie";
const cookies = new Cookies();
const token = cookies.get("token");

const todoReducer = async (state, action) => {
  switch (action.type) {
    case "ADD":
      const description = action.task;
      const body = { description };

      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = "https://owusu-task-manager.herokuapp.com/tasks";
        const res = await axios({
          url: proxyUrl + targetUrl,
          method: "post",
          data: body,
          headers: {
            Authorization: "Bearer " + token
          }
        });
        const taskId = res.data._id;
        cookies.set("taskId", taskId);
        //set taskId to a cookie to TodoList.js can add it to its state
        return taskId;
        break;
      } catch (e) {
        console.log(e);
      }

    case "REMOVE":
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = `https://owusu-task-manager.herokuapp.com/tasks/${action.id}`;
        const res = await axios({
          url: proxyUrl + targetUrl,
          method: "delete",
          headers: {
            Authorization: "Bearer " + token
          }
        });
        break;
      } catch (e) {
        console.log(e);
      }
    case "TOGGLE":
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = `https://owusu-task-manager.herokuapp.com/tasks/${action.id}`;
        const isDone = !action.completed;
        const updateData = { completed: isDone };
        const res = await axios({
          url: proxyUrl + targetUrl,
          method: "patch",
          data: updateData,
          headers: {
            Authorization: "Bearer " + token
          }
        });
        break;
      } catch (e) {
        console.log(e);
      }

    case "EDIT":
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl = `https://owusu-task-manager.herokuapp.com/tasks/${action.id}`;
        const description = action.newTask;
        const body = { description };
        const res = await axios({
          url: proxyUrl + targetUrl,
          method: "patch",
          data: body,
          headers: {
            Authorization: "Bearer " + token
          }
        });
        break;
      } catch (e) {
        console.log(e);
      }
    default:
      return state;
  }
};

export default todoReducer;
