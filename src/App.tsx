import { useState } from "react";

import {
  Container,
  Content,
  SectionApresentationRoom,
  ButtonShopNow,
  SectionAbout,
  ContentSlider,
} from "./styles";

import { Header } from "./components/Header";
import { PaginateButton } from "./components/PaginateButton";

import pathImgRoom from "./assets/desktop-image-hero-1.jpg";
import pathImgRoom2 from "./assets/desktop-image-hero-2.jpg";
import pathImgRoom3 from "./assets/desktop-image-hero-3.jpg";

import pathIconArrow from "./assets/icon-arrow.svg";
import pathImgAboutDark from "./assets/image-about-dark.jpg";
import pathImgAboutLight from "./assets/image-about-light.jpg";

export const App = () => {
  const [translateSlider, setTranslateSlider] = useState<number>(0);

  return (
    <Container>
      <Content>
        <Header />
        <SectionApresentationRoom id="home">
          <div>
            <ContentSlider translate={translateSlider}>
              <img src={pathImgRoom} alt="img-room-1" />
              <img src={pathImgRoom2} alt="img-room-2" />
              <img src={pathImgRoom3} alt="img-room-3" />
            </ContentSlider>

            <PaginateButton
              translate={translateSlider}
              setTranslate={setTranslateSlider}
            />
          </div>

          <div>
            <h1>Discover innovative ways to decorate</h1>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <ButtonShopNow>
              SHOP NOW
              <img src={pathIconArrow} alt="arrow" />
            </ButtonShopNow>
          </div>
        </SectionApresentationRoom>
        <SectionAbout id="about">
          <div>
            <img src={pathImgAboutDark} alt="" />
          </div>

          <div>
            <h1>ABOUT OUR FURNITURE</h1>

            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>

          <div>
            <img src={pathImgAboutLight} alt="" />
          </div>
        </SectionAbout>
      </Content>
    </Container>
  );
};
