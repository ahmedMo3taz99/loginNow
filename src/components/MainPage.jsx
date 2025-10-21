import Hero from "./Hero";

import MainGg from "../assets/mainBg.png";
import styled from "styled-components";
import ChangeYourStrategy from "./ChangeYourStrategy";
import WhyYouChooseUs from "./WhyYouChooseUs";
import OurServies from "./OurServies";
import AboutTheCompany from "./AboutTheCompany";
import Footer from "./Footer";
import NaviagtionBar from "./NaviagtionBar";

export const AllStyledForProducts = styled.div`
  overflow-x: hidden;

  background-image: url(${MainGg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export default function MainPage() {
  return (
    <AllStyledForProducts>
      <NaviagtionBar />
      <Hero />
      <ChangeYourStrategy />
      <WhyYouChooseUs />
      <OurServies />
      <AboutTheCompany />
      <Footer />
    </AllStyledForProducts>
  );
}
