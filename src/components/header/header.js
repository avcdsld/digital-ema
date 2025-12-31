/** @jsxRuntime classic */
/** @jsx jsx */
import { useRouter } from "next/router";
import { jsx, Box, Container, Button } from 'theme-ui';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { NavLink, Link } from 'components/link';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import LocaleToggle from 'components/locale-toggle';
import menuItems from './header.data';

export default function Header() {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box as="header" sx={styles.header}>
            <Container>
              <Box sx={styles.headerInner}>
                <Logo light sx={styles.logo} />
                <Box as="nav" sx={styles.navbar} className="navbar">
                  <Box as="ul" sx={styles.navList}>
                    {pathName === '/' && menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        {path.startsWith('/') ? <Link path={path} label={label} /> : <NavLink path={path} label={label} />}
                      </li>
                    ))}
                    {pathName != '/' && menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        {path.startsWith('/') ? <Link path={path} label={label} /> : <Link path={`/#${path}`} label={label} />}
                      </li>
                    ))}
                  </Box>
                </Box>
                <LocaleToggle />
                <NavbarDrawer />
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    '.is-sticky': {
      header: {
        backgroundColor: '#B33E3E',
        boxShadow: '0 4px 20px rgba(26, 19, 17, 0.3)',
        paddingTop: '10px',
        paddingBottom: '10px',
      },
    },
  },
  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 3,
    backgroundColor: '#B33E3E',
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-mobile-menu': {
      backgroundColor: '#B33E3E',
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 6, 12],
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    flexGrow: 1,
    p: 0,
    'li:last-child': {
      ml: ['auto'],
    },
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 500,
      padding: 0,
      margin: [0, 0, 0, 0, '0 24px'],
    },
    '.active': {
      color: '#C4A747',
    },
    a: {
      cursor: 'pointer',
      color: '#FFFEF9',
      textDecoration: 'none',
      fontWeight: 500,
      padding: 0,
      margin: [0, 0, 0, 0, '0 24px'],
      letterSpacing: '0.08em',
      transition: 'all 0.2s ease',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-4px',
        left: 0,
        width: 0,
        height: '2px',
        backgroundColor: '#C4A747',
        transition: 'width 0.3s ease',
      },
      '&:hover': {
        color: '#C4A747',
        '&::after': {
          width: '100%',
        },
      },
    },
  },
  getStartedDesktop: {
    color: '#FFFEF9',
    display: ['none', 'none', 'none', 'none', 'flex'],
  },
  getStartedMobile: {
    color: '#FFFEF9',
    fontSize: [1],
    minHeight: 30,
    m: ['0 15px 0 auto'],
    padding: '0 11px',
    display: ['flex', null, null, null, 'none'],
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: '#FFFEF9',
    },
  },
};
