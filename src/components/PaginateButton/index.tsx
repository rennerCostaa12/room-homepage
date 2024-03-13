import { Container } from "./styles";
import pathArrowLeft from "../../assets/icon-angle-left.svg";
import pathArrowRight from "../../assets/icon-angle-right.svg";

interface PaginateButtonProps {
  translate: number;
  setTranslate: (data: number) => void;
}

export const PaginateButton = ({
  translate,
  setTranslate,
}: PaginateButtonProps) => {
  const handleNext = () => {
    if (translate > -200) {
      setTranslate(translate - 100);
    }
  };

  const handlePrev = () => {
    if (translate < 0) {
      setTranslate(translate + 100);
    }
  };

  return (
    <Container>
      <button onClick={handlePrev}>
        <img src={pathArrowLeft} alt="icon-arrow-left" />
      </button>
      <button onClick={handleNext}>
        <img src={pathArrowRight} alt="icon-arrow-right" />
      </button>
    </Container>
  );
};
