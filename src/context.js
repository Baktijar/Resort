import React, { Component } from "react";
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  render() {
    return (
      <RoomContext.Provider value="hello">
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
