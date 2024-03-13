import styled from "styled-components";
import { theme_colors } from "./theme/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 2550px;
  width: 100%;
`;

export const SectionApresentationRoom = styled.section`
  display: flex;
  height: 65vh;

  > div:nth-child(1) {
    width: 100%;
    display: flex;
    position: relative;
    flex: 2;
  }

  > div:nth-child(2) {
    display: flex;
    padding: 4rem;
    flex-direction: column;
    gap: 2rem;
    flex: 1;

    > h1 {
      font-size: 45px;
    }

    > p {
      color: ${theme_colors.dark_gray};
      line-height: 25px;
      font-weight: 600;
      font-size: 14px;
    }
  }

  @media (max-width: 1100px) {
    > div:nth-child(2) {
      padding: 2rem;

      > h1 {
        font-size: 35px;
      }

      > p {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const ContentSlider = styled.div<{ translate: number }>`
  width: 100%;
  display: flex;
  overflow: hidden;

  img {
    transition: transform 1s;
    transform: ${({ translate }) => `translate(${translate}%)`};
    object-fit: cover;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    flex-grow: 0;
  }
`;

export const ButtonShopNow = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  letter-spacing: 20px;
  cursor: pointer;
  align-self: flex-start;
  transform: scale(1);

  &:hover {
    transition: all ease 0.3s;
    transform: scale(1.1);
  }

  @media (max-width: 1100px) {
    font-size: 14px;
    letter-spacing: 15px;
  }
`;

export const SectionAbout = styled.section`
  display: flex;
  gap: 2rem;

  img {
    width: 100%;
    height: 100%;
  }

  > div:nth-child(1) {
    flex: 1;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    flex: 1.5;

    > h1 {
      font-size: 20px;
      letter-spacing: 10px;
    }

    > p {
      font-size: 14px;
      line-height: 25px;
      color: ${theme_colors.dark_gray};
      font-weight: 600;
    }
  }

  > div:nth-child(3) {
    flex: 1;
  }

  @media (max-width: 1100px) {
    gap: 1rem;

    > div:nth-child(2) {
      margin: 2rem 0;

      > h1 {
        font-size: 16px;
        letter-spacing: 5px;
      }

      > p {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 300px;
    }

    > div:nth-child(2) {
      margin: 2rem;
    }
  }
`;
