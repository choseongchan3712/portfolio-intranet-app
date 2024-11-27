import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface ColorStyleType {
  mainPurple: string;
  mainWhite: string;
  mainBlack: string;
  mainGray: string;
  mainRed: string;
  mainYellow: string;
  mainGreen: string;
}

interface FontSizeType {
  navButton: string;
  toptittle: string;
  searchTab: string;
  basicTitle: string;
}

export const colorStyle: ColorStyleType = {
  mainPurple: "#5b4d8d",
  mainWhite: "#fff",
  mainBlack: "#000",
  mainGray: "#f0f1f3",
  mainRed: "#f29993",
  mainYellow: "#ffc000",
  mainGreen: "#3eb55e",
};

export const fontSize: FontSizeType = {
  navButton: "18px",
  toptittle: "20px",
  searchTab: "18px",
  basicTitle: "20px",
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
