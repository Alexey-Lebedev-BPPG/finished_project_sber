import { type ButtonHTMLAttributes, type FC, type RefObject } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  ref?: RefObject<HTMLButtonElement | null>;
}

export const Button: FC<IButtonProps> = props => {
  const { className, children, ...otherProps } = props;

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};
