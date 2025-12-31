/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import { useLocale } from 'hooks/useLocale';

const illustration = '/assets/images/ema/banner2026.png';

const Banner = () => {
  const { t } = useLocale();

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.hero}>
            <Text as="span" sx={styles.label}>Digital Ema on Flow</Text>
            <Heading as="h1" sx={styles.title}>{t.DIGITAL_EMA}</Heading>
            <Box sx={styles.titleDecoration}>
              <Box sx={styles.decorationDot} />
            </Box>
            <Text as="p" sx={styles.description}>{t.LETS_MAKE_EMA}</Text>
            <Box sx={styles.buttonWrapper}>
              <Button>
                <Link path={"#create"}>{t.BUTTON_GETTING_STARTED}</Link>
              </Button>
            </Box>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image src={illustration} alt="illustration" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    position: 'relative',
    pt: [120, null, null, 150, 160, null, 180],
    pb: [80, null, null, 100, 120],
    zIndex: 0,
    backgroundColor: '#FFFEF9',
    overflow: 'hidden',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    a: {
      textDecoration: 'none',
      color: '#FFFEF9',
      '&:visited': {
        color: '#FFFEF9',
      },
      span: {
        color: '#FFFEF9',
        textDecoration: 'none',
      },
    },
  },
  hero: {
    textAlign: 'center',
    maxWidth: 700,
    mb: [6, null, null, 8],
  },
  label: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.25em',
    color: '#B33E3E',
    mb: 4,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'heading',
    fontSize: [8, null, null, 10, 11, 12],
    lineHeight: 1.3,
    color: '#1A1311',
    letterSpacing: '0.1em',
    fontWeight: 500,
  },
  titleDecoration: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mt: 5,
    mb: 5,
    '&::before': {
      content: '""',
      width: '50px',
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, #C4A747 100%)',
    },
    '&::after': {
      content: '""',
      width: '50px',
      height: '1px',
      background: 'linear-gradient(90deg, #C4A747 0%, transparent 100%)',
    },
  },
  decorationDot: {
    width: '6px',
    height: '6px',
    backgroundColor: '#B33E3E',
    transform: 'rotate(45deg)',
    mx: 3,
  },
  description: {
    fontSize: [2, null, null, 3],
    lineHeight: 2,
    color: '#5C5552',
    maxWidth: 500,
    mx: 'auto',
    mb: 6,
  },
  buttonWrapper: {
    textAlign: 'center',
  },
  illustration: {
    display: 'block',
    position: 'relative',
    textAlign: 'center',
    img: {
      display: 'block',
      maxWidth: ['85%', null, null, '70%', '60%'],
      mx: 'auto',
      mixBlendMode: 'multiply',
    },
  },
};
