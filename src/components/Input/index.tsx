import { InputContainer } from "./style";
type Props = {
  value: string;
};
const Input = ({ value }: Props) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};
export default Input;
