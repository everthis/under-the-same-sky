import React, { Component } from "react";
export default class ImgWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src,
      ratio: this.props.ratio,
      styleObj: {
        width: "100%",
        height: 0,
        paddingTop: `${this.props.ratio * 100}%`,
        backgroundImage: `url(${this.props.src})`,
        backgroundColor: "#ddd",
        backgroundSize: "cover"
      }
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}
  handleChange() {}

  render() {
    return <div className="img-wrap" style={this.state.styleObj} />;
  }
}
