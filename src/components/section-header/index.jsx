import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subtitle } = props;
  return (
    <div>
      <HeaderWrapper>
        <h2 className="title">{title}</h2>
        {
            subtitle&& <h2 className="subtitle">{subtitle}</h2>
        }
      </HeaderWrapper>
    </div>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeader;
