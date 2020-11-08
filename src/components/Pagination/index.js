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
export const Pagination = () => {
  const { mediaQuery, page, setPage, photos } = useContext(StoreContext);
  const themeProvider = useContext(ThemeContext);

  const pagePrev = () => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  const pageNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      {photos.length > 0 ? (
        <PaginationContainer>
          <PaginationButton onClick={pagePrev}>
            <FontAwesomeIcon
              size={mediaQuery.isTablet || mediaQuery.isMobile ? "2x" : "3x"}
              icon={faLongArrowAltLeft}
              color={themeProvider}
            />
          </PaginationButton>
          <PaginationButton onClick={pageNext}>
            <FontAwesomeIcon
              size={mediaQuery.isTablet || mediaQuery.isMobile ? "2x" : "3x"}
              icon={faLongArrowAltRight}
            />
          </PaginationButton>
        </PaginationContainer>
      ) : null}
    </>
  );
};
