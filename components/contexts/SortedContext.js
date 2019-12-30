import React, { Component, createContext } from "react";

export const SortedContext = createContext();

export class SortedProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      todo: "",
      completed: false,
      type: "",
      updateState: false
    };
    this.resetSort = this.resetSort.bind(this);
  }

  resetSort(type, _id, todo, completed = false) {
    this.setState({
      _id: _id,
      todo: todo,
      completed: completed,
      type: type,
      updateState: true
    });
  }

  render() {
    return (
      <SortedContext.Provider
        value={{ ...this.state, resetSort: this.resetSort }}
      >
        {this.props.children}
      </SortedContext.Provider>
    );
  }
}

export const withSortedContext = Component => props => (
  <SortedContext.Consumer>
    {value => <Component sortedContext={value} {...props} />}
  </SortedContext.Consumer>
);
