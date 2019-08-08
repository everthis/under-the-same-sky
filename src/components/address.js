import React, { Component } from "react";
export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      link: this.props.link,
      styleObj: {
        cursor: 'pointer'
      }
    };
    this.goToMap = this.goToMap.bind(this)
  }

  componentDidMount() {}
  componentWillUnmount() {}
  handleChange() {}

  goToMap() {
    window.location.href = this.state.link;
  }

  render() {
    return (
      <div
        className="img-wrap"
        onClick={this.goToMap}
        style={this.state.styleObj}
      ><b>地址：</b>{this.state.text}</div>
    );
  }
}
