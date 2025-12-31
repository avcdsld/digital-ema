/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';

const SectionHeading = ({ title, description, label, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      {label && (
        <Text as="span" sx={styles.label}>{label}</Text>
      )}
      <Heading sx={styles.title}>{title}</Heading>
      <Box sx={styles.decorationLine}>
        <Box sx={styles.decorationDot} />
      </Box>
      {description && (
        <Text as="p" sx={styles.description}>
          {description}
        </Text>
      )}
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: 'center',
    maxWidth: 700,
    margin: ['0 auto 60px', null, null, '0 auto 80px'],
  },
  label: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.25em',
    color: '#B33E3E',
    mb: 3,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'heading',
    fontWeight: 500,
    fontSize: [5, null, null, 7, null, 8],
    lineHeight: 1.4,
    letterSpacing: '0.1em',
    color: '#1A1311',
  },
  decorationLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mt: 5,
    '&::before': {
      content: '""',
      width: ['40px', '60px'],
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, #C4A747 100%)',
    },
    '&::after': {
      content: '""',
      width: ['40px', '60px'],
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
    color: '#5C5552',
    fontSize: [1, null, null, 2],
    lineHeight: 2,
    maxWidth: 500,
    margin: '24px auto 0',
  },
};
