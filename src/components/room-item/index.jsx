import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";

import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "../../base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" ,itemClick} = props;
  const [selectIndex, setSelectIndex] = useState(0);
  const silderRef = useRef();

  // 事件处理函数
function itemClickHandle(){
if(itemClick) itemClick(itemData)
}




  function clickHandle(isRight = true,event) {
    isRight ? silderRef.current.next() : silderRef.current.prev();

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex);

    // 阻止事件冒泡
    event.stopPropagation()
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const silderElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => clickHandle(false,e)}>
          <IconArrowLeft width="30" height="40"></IconArrowLeft>
        </div>
        <div className="btn right" onClick={(e) => clickHandle(true,e)}>
          <IconArrowRight width="30" height="40"></IconArrowRight>
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={silderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover">
              <img src={item} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <ItemWrapper itemWidth={itemWidth} onClick={itemClickHandle}>
      <div className="inner">
        {/**/}
        {!itemData.picture_urls ? pictureElement : silderElement}

        <div className="desc">{itemData.verify_info.messages.join("-")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">${itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00840a", marginRight: "-3px" }}
          ></Rating>
          <span className="count">{itemData.reviews_count}</span>
          <span className="extra">{itemData?.bottom_info?.content}</span>
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
