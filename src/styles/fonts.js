import {
  Outfit as MainFont,
  Marcellus as Font1,
} from "next/font/google";

const mainFont = MainFont({
  weight: ["400"],
  subsets: ["latin"],
});

const font1 = Font1({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: mainFont.className,
  font1: font1.className,
};
export default fonts;
