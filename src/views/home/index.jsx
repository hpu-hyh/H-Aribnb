import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeadedr from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  // 从redux中获得数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  // 派发事件:发送网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  // 定义状态

  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
        <div className="content">
          <div className="good-price">
            <SectionHeadedr title={goodPriceInfo.title} />
            <SectionRooms roomList={goodPriceInfo.list} />
          </div>
        </div>
      </HomeWrapper>
    </div>
  );
});

export default Home;
