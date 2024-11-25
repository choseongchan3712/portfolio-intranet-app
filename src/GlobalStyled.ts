import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface ColorStyleType {
  mainPurple: string;
  mainWhite: string;
  mainBlack: string;
  mainGray: string;
}

interface FontSizeType {
  navButton: string;
  toptittle: string;
  searchTab: string;
}

export const colorStyle: ColorStyleType = {
  mainPurple: "#5b4d8d",
  mainWhite: "#fff",
  mainBlack: "#000",
  mainGray: "#f0f1f3",
};

export const fontSize: FontSizeType = {
  navButton: "18px",
  toptittle: "20px",
  searchTab: "18px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
}

img {
  width: 100%;
  display: block;
}

a {
  text-decoration: none;
  display: block;
}
`;
