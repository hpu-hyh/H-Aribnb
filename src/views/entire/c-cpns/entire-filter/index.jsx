import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { EntireWrapper } from "./style";

// 导入模拟数据
import filterDate from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [selectItem, setSelectItem] = useState([]);

  // 事件处理函数
  function itemClickHandle(item) {
    // console.log(item)
    const newItem = [...selectItem];
    if (selectItem.includes(item)) {
      const itemIndex = newItem.findIndex((filterItem) => filterItem === item);
      newItem.splice(itemIndex,1)
    } else {
      newItem.push(item);
    }
    setSelectItem(newItem);
  }

  return (
    <EntireWrapper>
      <div className="filter">
        {filterDate.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItem.includes(item),
              })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
