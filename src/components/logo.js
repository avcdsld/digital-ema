/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { Link } from 'components/link';
import { useLocale } from 'hooks/useLocale';

export default function Logo({ light, ...props }) {
  const { locale } = useLocale();
  const logoText = locale === 'ja' ? 'デジタル絵馬' : 'Digital Ema';

  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Text as="span" sx={{
        ...styles.logoText,
        color: light ? '#FFFEF9' : '#1A1311',
      }}>
        {logoText}
      </Text>
    </Link>
  );
}

const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    textDecoration: 'none',
  },
  logoText: {
    fontFamily: 'heading',
    fontSize: ['18px', null, '20px'],
    fontWeight: 500,
    letterSpacing: '0.1em',
    transition: 'color 0.2s ease',
  },
};
