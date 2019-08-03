import React, { Component } from "react";
import ImgWrap from "./img-wrap";
export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: {
        name: "太二酸菜鱼",
        cover: "https://inews.gtimg.com/newsapp_bt/0/9043327955/641",
        location: "陆家嘴西路168号正大广场8层8F25号商铺",
        type: "川菜",
        reservable: true
      }
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
            <ImgWrap src={data.cover} ratio={ratio} />
            <p>
              <b>类型：</b>
              {data.type}
            </p>
            <p>
              <b>地址：</b>
              {data.location}
            </p>
            <p>
              <b>可否预定座位：</b>
              {data.reservable ? "可以（已电话确认）" : "不可以（已电话确认）"}
            </p>
          </React.Fragment>
        }
      </div>
    );
  }
}
