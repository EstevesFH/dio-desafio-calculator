import { ButtonContainer } from "./styles";

const Button = ({ label, onClick, variant }) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant}>
      {label}
    </ButtonContainer>
  );
}

export default Button;