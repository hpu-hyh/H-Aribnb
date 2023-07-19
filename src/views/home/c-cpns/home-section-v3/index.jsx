import PropTypes from "prop-types";
import React, { memo } from "react";

import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

import { HomeSectionV3Wrapper } from "./style";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongforItem itemData={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </HomeSectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
