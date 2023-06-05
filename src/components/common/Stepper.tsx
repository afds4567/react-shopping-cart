import { styled } from 'styled-components';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../assets/icons/arrow-up.svg';

const InputContainer = styled.div<{ height?: string; width?: string }>`
  display: flex;
  align-items: stretch;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  @media (max-width: 480px) {
    width: 80px;
  }
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  border: 1px solid #e5e5e5;
  text-align: center;
  font-size: 12px;

  outline: none;
`;

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 50%;
  font-size: 10px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`;

type StepperProps = {
  width?: string;
  height?: string;

  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
};

const Stepper = (props: StepperProps) => {
  const { width, height, min, max, value, onChange } = props;

  const handleClick = (type: 'increase' | 'decrease') => () => {
    const newValue = value + (type === 'increase' ? 1 : -1);

    if (min !== undefined && newValue < min) return;
    if (max !== undefined && newValue > max) return;

    onChange(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <InputContainer width={width} height={height}>
      <Input value={value} onChange={handleChange} />
      <div>
        <InputButton onClick={handleClick('increase')}>
          <ArrowUp width="5" />
        </InputButton>
        <InputButton onClick={handleClick('decrease')}>
          <ArrowDown width="5" />
        </InputButton>
      </div>
    </InputContainer>
  );
};

export default Stepper;
