import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { EnireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "../../store/modules/entire/actionCreators";

const Entire = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);

  return (
    <EnireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EnireWrapper>
  );
});

Entire.propTypes = {};

export default Entire;
