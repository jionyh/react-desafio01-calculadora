import { ButtonContainer } from "./style";
type Props = {
  label: string;
  onClick: () => void;
  zeroButton?: boolean;
  equalButton?: boolean;
  clearButton?: boolean;
  functionButton?: boolean;
};
const Button = ({ label, onClick, zeroButton, equalButton, clearButton, functionButton }: Props) => {
  return (
    <ButtonContainer
      onClick={onClick}
      zeroButton={zeroButton}
      functionButton={functionButton}
      equalButton={equalButton}
      clearButton={clearButton}
    >
      {label}
    </ButtonContainer>
  );
};
export default Button;
