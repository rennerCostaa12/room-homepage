import styled from "styled-components";
import { theme_colors } from "../../theme/colors";

export const Header = styled.header<{ isOpen: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 3rem;
  z-index: 10;
  margin: 3rem;

  @media (max-width: 425px) {
    margin: 0rem;
    transition: height 1s;
    width: 100%;
  }
`;

export const ContentLogo = styled.div``;

export const Nav = styled.nav`
  @media (max-width: 425px) {
    display: none;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
`;

export const Items = styled.li`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  a {
    color: ${theme_colors.white};
    text-decoration: none;
  }

  &:hover {
    transition: all ease 0.3s;
    transform: scale(1.1);
  }
`;

export const ContentIconHamburguer = styled.div`
  display: none;

  @media (max-width: 425px) {
    display: block;
    margin: 2rem;

    button {
      background: none;
      border: none;
    }
  }
`;

export const ContentNavMobile = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 425px) {
    transition: width 1s;
    top: 0;
    padding: 0rem;
    display: block;
    position: absolute;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0px")};
    overflow: hidden;
    height: 100vh;
    background-color: ${theme_colors.white};
  }
`;

export const ContentBtnCloseNavMobile = styled.div`
  button {
    font-size: 30px;
    font-family: bold;
    background: none;
    border: none;
    margin: 1rem 2rem;
  }
`;

export const NavMobile = styled.nav`
  margin: 1rem 2rem;

  ul {
    list-style: none;
  }
`;

export const ItemMobile = styled.li`
  margin: 1rem 0;
  font-size: 20px;

  a {
    text-decoration: none;
    color: ${theme_colors.black};
  }

  &:hover {
    transition: all ease 0.3s;
    transform: scale(1.1);
  }
`;
