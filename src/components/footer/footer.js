/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Widget from './widget';
import { menuItems } from './footer.data';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          {menuItems.map(({ id, title, items }) => (
            <Widget key={id} title={title} items={items} />
          ))}
        </Box>
        <Box sx={styles.footerBottom}>
          <Text as="p" sx={styles.copyright}>
            © Zeroichi Arakawa / Ara ⛓️ Built on Flow
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    pt: [10, null, null, 12],
    pb: [8, null, null, 10],
    backgroundColor: '#F5F0E6',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, #D9D4CB 50%, transparent 100%)',
    },
  },
  footerTopInner: {
    gap: [30, null, 50, '20px 50px', 17, 50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(4, 1fr)',
      'repeat(5, 1fr)',
    ],
    'h4': {
      color: '#1A1311',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      mb: 3,
    },
    'a': {
      color: '#5C5552',
      transition: 'color 0.2s ease',
      fontSize: '14px',
    },
    'a:hover': {
      color: '#B33E3E',
    },
  },
  footerBottom: {
    mt: [6, null, null, 8],
    pt: [5],
    borderTop: '1px solid #E8E4DC',
  },
  copyright: {
    color: '#8C8279',
    fontSize: '13px',
    textAlign: 'center',
    fontFamily: 'body',
    letterSpacing: '0.05em',
  },
};
