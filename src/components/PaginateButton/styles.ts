import styled from "styled-components";
import { theme_colors } from "../../theme/colors";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: -187px;

  button {
    padding: 2rem 2.5rem;
    background-color: ${theme_colors.black};
    border: none;
    cursor: pointer;
    transform: scale(1);

    &:hover {
      transition: all ease 0.3s;
      transform: scale(1.1);
    }
  }

  @media (max-width: 1100px) {
    right: -155px;

    button {
      padding: 1.5rem 2rem;
    }
  }

  @media (max-width: 768px) {
    right: 0px;
    bottom: 5px;

    button {
      padding: 1.5rem 2rem;
    }
  }
`;
