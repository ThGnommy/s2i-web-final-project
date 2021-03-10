import React, { useContext } from "react";
import {
  PaginationButton,
  PaginationContainer,
} from "./../../styled-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "./../../StoreContext";
import { ThemeContext } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions/mediaAction";
export const Pagination = () => {
  const { mediaQuery } = useContext(StoreContext);
  const themeProvider = useContext(ThemeContext);

  const { photos, videos } = useSelector((state) => state.media);

  const { currentPage, nextPage } = useSelector((state) => state.media);
  const dispatch = useDispatch();

  const pagePrev = () => {
    if (currentPage <= 1) return;
    dispatch(setCurrentPage(currentPage - 1));
  };

  const pageNext = () => {
    if (!nextPage) return;
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <>
      {photos.length > 0 || videos.length > 0 ? (
        <PaginationContainer>
          <PaginationButton onClick={pagePrev}>
            <FontAwesomeIcon
              size={mediaQuery.isTablet || mediaQuery.isMobile ? "2x" : "3x"}
              icon={faLongArrowAltLeft}
              color={themeProvider.bgDark}
            />
          </PaginationButton>
          <PaginationButton onClick={pageNext}>
            <FontAwesomeIcon
              size={mediaQuery.isTablet || mediaQuery.isMobile ? "2x" : "3x"}
              icon={faLongArrowAltRight}
              color={themeProvider.bgDark}
            />
          </PaginationButton>
        </PaginationContainer>
      ) : null}
    </>
  );
};
