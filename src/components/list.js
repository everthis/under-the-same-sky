import React, { Component } from "react";
import ListItem from "./list-item";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: this.props.data
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}
  handleChange() {}

  render() {
    return (
      <div className="list">
        {this.state.listData.map(el => {
          return <ListItem data={el} />;
        })}
      </div>
    );
  }
}
