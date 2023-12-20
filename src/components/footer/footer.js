/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Widget from './widget';
import { menuItems } from './footer.data';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Box sx={styles.footerTopInner}>
          {menuItems.map(({ id, title, items }) => (
            <Widget key={id} title={title} items={items} />
          ))}
        </Box>
        <Text as="p" sx={styles.copyright}>
          © Ara ⛓️ Built on Flow
        </Text>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    pt: [8],
    pb: [8],
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
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
  },
  about: {
    display: [null, null, null, 'grid', 'block'],
    gridTemplateColumns: '205px 1fr 1fr',
    alignItems: ['center'],
    gridRow: ['3/4', null, '1/1', '3/4', 'unset'],
    gridColumn: ['1/3', null, '1/2', '1/5', 'unset'],
  },
  copyright: {
    color: rgba('#0F2137', 0.6),
    fontSize: ['14px'],
    mt: [3],
    mr: [null, null, null, 'auto', 'unset'],
    textAlign: ['left'],
  },
};
