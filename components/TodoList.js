import React, { PureComponent } from "react";
import DraggableTodoList from "./DraggableTodoList";
import { withSortedContext } from "./contexts/SortedContext";
import { withCookies, Cookies } from "react-cookie";
const cookies = new Cookies();

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: cookies.get("tasks") || props.posts,
      prevArr: []
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { tasks, prevArr } = this.state;

    if (prevArr.length === 0) {
      var arr = cookies.get("tasks") || this.props.posts;
      //if prevArr is same size as state.tasks change nothing
    } else if (prevArr.length === tasks.length) {
      var arr = prevArr;
      //if prev arr is smaller than state.tasks push the new element to the end
    } else if (prevArr.length < tasks.length) {
      this.setState({
        prevArr: [...prevArr, tasks[tasks.length - 1]]
      });
      var arr = prevArr;
      //if prev arr is larger than state.tasks filter out the corresponding element
    } else if (prevArr.length > tasks.length) {
      this.setState({
        prevArr: prevArr.filter(task => task._id !== tasks._id)
      });
      var arr = prevArr;
    } else {
      return console.log(
        "something did not go quite as planned with sorting..."
      );
    }

    arr = arr.slice();
    arr.splice(
      newIndex < 0 ? arr.length + newIndex : newIndex,
      0,
      arr.splice(oldIndex, 1)[0]
    );
    this.setState(
      {
        tasks: arr,
        prevArr: arr
      },
      cookies.set("tasks", this.state.tasks),
      (this.props.sortedContext.updateState = false)
    );
  };

  componentDidUpdate(prevState) {
    if (prevState.tasks !== this.state.tasks) {
      cookies.set("tasks", this.state.tasks);
    }
    // if (this.state.tasks.length === 1) {
    //   let firstId = cookies.get("taskId");
    //   let fakeobj = {
    //     _id: firstId,
    //     description: this.state.tasks[0].description,
    //     completed: this.state.tasks[0].completed,
    //     updatedAt: this.state.tasks[0].updatedAt
    //   };
    //   this.setState({ tasks: fakeobj });
    // }
  }

  // shouldComponentUpdate()

  static getDerivedStateFromProps(props, state) {
    if (props.sortedContext.updateState) {
      props.sortedContext.updateState = false;
      const { type, id, todo } = props.sortedContext.type;
      const { tasks } = state;
      // const taskId = cookies.get("taskId");
      // cookies.set("tasks", tasks);

      switch (type) {
        case "ADD":
          return {
            tasks: [
              ...tasks,
              {
                _id: id,
                description: todo,
                completed: false
              }
            ]
          };
          break;
        case "REMOVE":
          return { tasks: tasks.filter(task => task._id !== id) }; //should refer to state
        case "TOGGLE":
          return {
            tasks: tasks.map(
              task =>
                task._id === id ? { ...task, completed: !task.completed } : task //should refer to state
            )
          };
          break;
        case "EDIT":
          return {
            tasks: tasks.map(task =>
              task._id === id ? { ...task, description: todo } : task
            )
          };
          break;
        default:
          return null;
      }
    } else return null;
  }

  // componentWillReceiveProps(props) {
  //   if (this.props.posts !== props.posts) {
  //     this.setState({ newProps: this.props.posts });
  //   }
  // }

  render() {
    const { resetSort } = this.props.sortedContext;
    const { posts } = this.props;

    const { tasks } = this.state;
    if (tasks.length)
      return (
        <DraggableTodoList
          axis="y"
          useDragHandle
          onSortEnd={this.onSortEnd}
          posts={tasks}
          tasksDB={posts}
          sorted={resetSort}
        ></DraggableTodoList>
      );
    return null;
  }
}

export default withCookies(withSortedContext(TodoList));
