import { Icon } from './Icon';
import { Text } from './Text';

interface LogoProps {
  isIcon?: boolean;
  isText?: boolean;
  textColor?: string;
  link?: string;
}

export const Logo = ({
  isIcon = true,
  isText = false,
  textColor,
  link = '/',
}: LogoProps) => {
  return (
    <a href={link} className="flex items-center gap-2 h-4">
      {isIcon && <Icon />}
      {isText && <Text textColor={textColor} />}
    </a>
  );
};
