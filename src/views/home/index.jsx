import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyO } from "../../utils";

const Home = memo(() => {
  // 从redux中获得数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
      }),
      shallowEqual
    );

  // 数据转化
  // const [name, setName] = useState("成都");
  // const tabNames = discountInfo.dest_address?.map((item) => item.name);
  // const tabClcikHandles = useCallback(function (index, name) {
  //   setName(name);
  // }, []);

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
          {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
          {isEmptyO(recommendInfo) && (
            <HomeSectionV2 infoData={recommendInfo} />
          )}

          <HomeSectionV1 infoData={goodPriceInfo} />
          <HomeSectionV1 infoData={highScoreInfo} />
        </div>
      </HomeWrapper>
    </div>
  );
});

export default Home;
