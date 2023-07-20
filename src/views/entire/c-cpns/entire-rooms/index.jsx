import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { EntireWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "../../../../components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "../../../../store/modules/detail";

const EntireRooms = memo((props) => {
  // 拿数据
  const { roomlist, isLoading } = useSelector(
    (state) => ({
      roomlist: state.entire.roomlist,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback((item) => {
    // console.log(111)
    dispatch(changeDetailInfoAction(item))
    navigate("/detail");
  }, [navigate,dispatch]);

  return (
    <EntireWrapper>
      <div className="list">
        {roomlist.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item.id}
              itemClick={itemClickHandle}
            />
          );
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </EntireWrapper>
  );
});

EntireRooms.propTypes = {};

export default EntireRooms;
