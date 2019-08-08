import React, { Component } from "react";
export default class ImgWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src,
      name: this.props.name,
      ratio: this.props.ratio,
      styleObj: {
        width: "100%",
        height: 0,
        paddingTop: `${this.props.ratio * 100}%`,
        backgroundColor: "#ddd",
        backgroundSize: "cover"
      }
    };
  }

  componentDidMount() {
    if(this.props.src) this.loadImage(this.props.src);
  }
  componentWillUnmount() {}
  loadImage = imageName => {
    import(`../images/${imageName}`).then(image => {
      this.setState({
        styleObj: Object.assign({}, this.state.styleObj, {
          backgroundImage: `url(${image.default})`
        })
      });
    });
  };

  render() {
    return <div className="img-wrap cover" style={this.state.styleObj}>
      {this.state.src ? '' : <span className="cover-name">{this.state.name}</span>}
    </div>;
  }
}
