import { Icon } from '@/shared/ui/Logo/Icon';
import { Text } from '@/shared/ui/Logo/Text';

interface LogoProps {
  isIcon?: boolean;
  isText?: boolean;
  link?: string;
  className?: string;
  variant?: 'primary' | 'footer';
}

export const Logo = ({
  isIcon = true,
  isText = false,
  variant = 'primary',
  link = '/',
  className = 'flex items-center gap-2 h-4',
}: LogoProps) => {
  const color = (
    {
      primary: 'var(--primary)',
      footer: '#757575',
    } as { [k in NonNullable<LogoProps['variant']>]: string }
  )[variant!];

  return (
    <a href={link} className={className}>
      {isIcon && <Icon color={color} />}
      {isText && <Text color={color} />}
    </a>
  );
};
