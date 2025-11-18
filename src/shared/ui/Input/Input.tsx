import {
  useRef,
  type ChangeEvent,
  type FC,
  type InputHTMLAttributes,
  type RefObject,
} from 'react';
import cls from './Input.module.css';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  onChange?: (value: string) => void;
  value?: string | number;
  ref?: RefObject<HTMLInputElement | null>;
}

export const Input: FC<IInputProps> = props => {
  const {
    className,
    id,
    label,
    onChange,
    placeholder,
    type = 'text',
    value,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    onChange?.(event.target.value);

  const input = (
    <input
      ref={ref}
      type={type}
      value={value}
      placeholder={placeholder}
      id={id}
      className={className}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );

  if (label)
    return (
      <div className={cls.label}>
        <p>{label}</p>
        {input}
      </div>
    );

  return input;
};
