import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import List from "@material-ui/core/List";
import DraggableTodo from "./DraggableTodo";

const DraggableTodoList = SortableContainer(({ posts, sorted, tasksDB }) => {
  return (
    <div>
      <List>
        {posts.map((todo, i) => (
          <React.Fragment key={todo._id}>
            <DraggableTodo
              {...todo}
              key={todo._id}
              index={i}
              sorted={sorted}
              tasksDB={tasksDB}
              tasksDBIdx={tasksDB[i]}
            />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
});

export default DraggableTodoList;
