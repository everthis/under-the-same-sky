import React, { Component } from "react";
export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      link: this.props.link,
      label: this.props.label,
      styleObj: {
        cursor: "pointer"
      },
      markStyle: {
        display: 'inline-block',
        width: '0px',
        height: '0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    };
    this.goToMap = this.goToMap.bind(this);
  }

  componentDidMount() {
    this.loadImage("map.png");
  }
  componentWillUnmount() {}
  handleChange() {}

  goToMap() {
    window.location.href = this.state.link;
  }
  loadImage = imageName => {
    import(`../images/${imageName}`).then(image => {
      this.setState({
        markStyle: Object.assign({}, this.state.markStyle, {
          backgroundImage: `url(${image.default})`
        })
      });
    });
  };

  render() {
    return (
      <p
        className=""
        onClick={this.goToMap}
        style={this.state.styleObj}
      >
        <b>{this.state.label || '地址'}：</b>
        <span className="text-link"> {this.state.text} </span>
        <span style={this.state.markStyle} />
      </p>
    );
  }
}
