import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

import { HomeSectionV2Warrper } from "./style";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);

  const tabClcikHandles = useCallback(function (index, name) {
    setName(name);
  }, []);
  return (
    <HomeSectionV2Warrper className="discount">
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <SectionTabs tabNames={tabNames} tabClick={tabClcikHandles}></SectionTabs>
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth={"33.3%"}
      ></SectionRooms>
      <SectionFooter name={name}/>
    </HomeSectionV2Warrper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
