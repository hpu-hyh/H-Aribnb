import PropTypes, { func } from "prop-types";
import React, { memo } from "react";

import Pagination from "@mui/material/Pagination";

import { EntireWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPageAction,
  fetchRoomListAction,
} from "../../../../store/modules/entire/actionCreators";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
  }));
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  // function
  const dispatch = useDispatch();
  function pageChangeHandle(event, pageCount) {
    window.scrollTo(0,0)
    dispatch(changeCurrentPageAction(pageCount -1));
    dispatch(fetchRoomListAction());
  }

  return (
    <EntireWrapper>
      <div className="info">
        <Pagination count={totalPage} onChange={pageChangeHandle} />
        <div className="desc">
          第{startCount}-{endCount}个房源,共{totalCount}个房源
        </div>
      </div>
    </EntireWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
