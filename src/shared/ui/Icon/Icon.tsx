import { type FC, memo, type SVGProps } from 'react';
import cls from './Icon.module.css';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

interface IIconBaseProps extends SvgProps {
  Svg: FC<SVGProps<SVGSVGElement>>;
  className?: string;
}

interface NoneClickableIconProps extends IIconBaseProps {
  clickable?: false;
}

interface ClickableIconProps extends IIconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NoneClickableIconProps | ClickableIconProps;

export const Icon: FC<IconProps> = memo(props => {
  const {
    className,
    clickable,
    height = 32,
    Svg,
    width = 32,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      width={width}
      height={height}
      className={className}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable)
    return (
      <button
        style={{ height, width }}
        type='button'
        className={cls.button}
        onClick={props.onClick}
      >
        {icon}
      </button>
    );

  return icon;
});
