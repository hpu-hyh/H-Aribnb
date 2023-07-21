import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";

import { SwitchTransition, CSSTransition } from "react-transition-group";

import { BrowserWrapper } from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const PictureBrowser = memo((props) => {
  const { pictureUrls, setClickClose } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRight, setIsRight] = useState(true);
  const [showList, setShowList] = useState(true);
  // 当图片浏览器展示时,禁止视口滚动
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function clickHandle() {
    if (setClickClose) setClickClose();
  }

  function controlClickHandle(isRight = true) {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsRight(isRight);
  }

function controlListHandle(){
    const newShowList = !showList
    setShowList(newShowList)
}

  return (
    <BrowserWrapper isRight={isRight} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={clickHandle}>
          <IconClose></IconClose>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77"></IconArrowLeft>
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77"></IconArrowRight>
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}</span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle">
              <span onClick={controlListHandle}>隐藏照片列表</span>
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item,index) => {
                return (
                  <div className={classNames('item',{active:currentIndex === index})} key={item} onClick={e => setCurrentIndex(index)}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
};

export default PictureBrowser;
