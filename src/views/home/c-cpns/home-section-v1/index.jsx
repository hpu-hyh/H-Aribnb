import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionV1Warrper } from "./style";
import SectionRooms from '@/components/section-rooms'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'



const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionV1Warrper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionRooms roomList={infoData.list} itemWidth='25%' />
      <SectionFooter/>
    </HomeSectionV1Warrper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.objext,
};

export default HomeSectionV1;
