import React, { Component } from "react";
import ImgWrap from "./img-wrap";
import Address from "./address";
export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: this.props.data
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}
  handleChange() {}

  render() {
    let data = this.state.itemData;
    const ratio = 3 / 4;
    return (
      <div className={`gap-bottom list-item`}>
        {
          <React.Fragment>
            <h3>{data.name}</h3>
            <ImgWrap src={data.cover} ratio={ratio} name={data.name} />
            <p>
              <b>类型：</b>
              {data.type}
            </p>
            <Address text={data.location} link={data.link} />
            <Address text="点评链接" link={data.dpLink} label="大众点评" />
            <p>
              <b>可否预订座位：</b>
              {data.reservable == null
                ? "未订"
                : data.reservable
                ? "可以（已电话确认）"
                : "不可以（已电话确认）"}
            </p>
          </React.Fragment>
        }
      </div>
    );
  }
}
