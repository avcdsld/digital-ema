/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useLocaleContext } from 'contexts/locale-context';

export default function LocaleToggle() {
  const { locale, toggleLocale } = useLocaleContext();

  return (
    <Box sx={styles.toggle} onClick={toggleLocale}>
      <Text as="span" sx={locale === 'ja' ? styles.active : styles.inactive}>
        JA
      </Text>
      <Text as="span" sx={styles.separator}>/</Text>
      <Text as="span" sx={locale === 'en' ? styles.active : styles.inactive}>
        EN
      </Text>
    </Box>
  );
}

const styles = {
  toggle: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    ml: [3, null, null, null, 4],
    userSelect: 'none',
  },
  active: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.05em',
    color: '#FFFEF9',
  },
  inactive: {
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    color: 'rgba(255, 254, 249, 0.5)',
    transition: 'color 0.2s ease',
  },
  separator: {
    fontSize: '12px',
    color: 'rgba(255, 254, 249, 0.3)',
    mx: 1,
  },
};
