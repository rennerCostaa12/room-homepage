import { useEffect, useState } from "react";

import {
  Header as HeaderStyle,
  Items,
  Nav,
  ContentLogo,
  ContentIconHamburguer,
  ContentNavMobile,
  ContentBtnCloseNavMobile,
  NavMobile,
  ItemMobile,
} from "./styles";

import pathLogo from "../../assets/logo.svg";
import pathIconHamburguer from "../../assets/icon-hamburger.svg";
import pathIconClose from "../../assets/icon-close.svg";

export const Header = () => {
  const [showNavMobile, setShowNavMobile] = useState<boolean>(false);

  useEffect(() => {
    if (showNavMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNavMobile]);

  return (
    <HeaderStyle isOpen={showNavMobile}>
      <ContentIconHamburguer>
        <button onClick={() => setShowNavMobile(!showNavMobile)}>
          <img src={pathIconHamburguer} alt="icon-hamburguer" />
        </button>
      </ContentIconHamburguer>
      <ContentLogo>
        <img src={pathLogo} alt="logo" />
      </ContentLogo>
      <Nav>
        <ul>
          <Items>
            <a href="home">home</a>
          </Items>
          <Items>
            <a href="#">shop</a>
          </Items>
          <Items>
            <a href="about">about</a>
          </Items>
          <Items>
            <a href="#">contact</a>
          </Items>
        </ul>
      </Nav>
      <ContentNavMobile isOpen={showNavMobile}>
        <ContentBtnCloseNavMobile>
          <button onClick={() => setShowNavMobile(!showNavMobile)}>
            <img src={pathIconClose} alt="icon-close" />
          </button>
        </ContentBtnCloseNavMobile>

        <NavMobile>
          <ul>
            <ItemMobile>
              <a href="home">home</a>
            </ItemMobile>
            <ItemMobile>
              <a href="#">shop</a>
            </ItemMobile>
            <ItemMobile>
              <a href="about">about</a>
            </ItemMobile>
            <ItemMobile>
              <a href="#">contact</a>
            </ItemMobile>
          </ul>
        </NavMobile>
      </ContentNavMobile>
    </HeaderStyle>
  );
};
