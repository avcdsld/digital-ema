// 和柄パターン（市松模様）をSVGで定義
const asanohaPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='none' stroke='%23D9D4CB' stroke-width='0.5' opacity='0.3'/%3E%3Cpath d='M30 15L45 30L30 45L15 30L30 15z' fill='none' stroke='%23D9D4CB' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`;

const ichimatsuPattern = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='%23B33E3E' opacity='0.03'/%3E%3Crect x='20' y='20' width='20' height='20' fill='%23B33E3E' opacity='0.03'/%3E%3C/svg%3E")`;

export default {
  colors: {
    // テキスト
    text: '#2D2926',           // 墨色
    textSecondary: '#5C5552',  // 鼠色
    heading: '#1A1311',        // 漆黒
    headingSecondary: '#3E3835', // 消炭色

    // 背景
    background: '#FFFEF9',     // 生成色
    backgroundSecondary: '#F5F0E6', // 和紙色

    // ブランドカラー
    primary: '#B33E3E',        // 朱色
    secondary: '#C4A747',      // 金色
    accent: '#2C4A6E',         // 藍色

    // ユーティリティ
    borderColor: '#D9D4CB',    // 白茶色
    muted: '#8C8279',          // 灰茶色
    dark: '#1A1311',           // 漆黒
    link: '#2C4A6E',           // 藍色
  },
  fonts: {
    body: '"Source Sans 3", "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
    heading: '"Fraunces", "Noto Serif JP", "Hiragino Mincho ProN", serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64,
  ],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5,
  },
  letterSpacings: {
    body: '0.02em',
    caps: '0.15em',
    heading: '0.08em',
  },
  space: [
    0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 100, 120, 130, 150,
  ],
  sizes: {},
  breakpoints: [
    '480px', '640px', '768px', '1024px', '1200px', '1367px', '1440px', '1600px',
  ],
  layout: {
    container: {
      maxWidth: ['100%', null, null, null, '970px', '1140px', '1260px'],
      paddingLeft: [3, 6],
      paddingRight: [3, 6],
      m: '0 auto',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
    },
    main: {},
    footer: {},
  },
  section: {
    banner: {},
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'heading',
    },
    heroTitle: {
      fontSize: [4, null, null, 5, null, 5, 6],
      fontWeight: 500,
      letterSpacing: 'heading',
      lineHeight: [1.4, null, null, null, null, null, 1.5],
    },
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    logo: {
      display: 'inline-flex',
    },
    learnMore: {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontWeight: 500,
      color: 'primary',
      transition: 'all 0.3s ease',
      ':hover': {
        color: '#9A3535',
        letterSpacing: '0.1em',
      },
    },
    nav: {
      display: ['none', null, 'inline-flex'],
      p: 2,
    },
    footer: {
      display: 'flex',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: '14px',
      lineHeight: 2.5,
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  buttons: {
    default: {
      backgroundColor: 'transparent',
      fontFamily: 'body',
      fontWeight: 500,
      borderRadius: '0',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.25s ease',
      whiteSpace: 'nowrap',
      letterSpacing: '0.12em',
      position: 'relative',
    },
    primary: {
      variant: 'buttons.default',
      color: '#FFFEF9',
      bg: 'primary',
      minHeight: ['50px', null, null, null, null, '54px'],
      padding: ['0 28px', null, null, '0 40px'],
      fontSize: [1, null, null, '15px'],
      border: 'none',
      boxShadow: '0 4px 12px rgba(179, 62, 62, 0.3)',
      '&:hover': {
        bg: '#A33636',
        boxShadow: '0 6px 20px rgba(179, 62, 62, 0.4)',
        transform: 'translateY(-2px)',
      },
      '&:active': {
        transform: 'translateY(0)',
        boxShadow: '0 2px 8px rgba(179, 62, 62, 0.3)',
      },
    },
    primaryMd: {
      variant: 'buttons.primary',
      minHeight: '46px',
      px: '24px',
      fontSize: '14px',
    },
    secondary: {
      variant: 'buttons.default',
      color: 'primary',
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'primary',
      minHeight: ['48px', null, null, null, null, '52px'],
      padding: ['0 24px', null, null, '0 32px'],
      '&:hover': {
        bg: 'primary',
        color: '#FFFEF9',
        boxShadow: '0 4px 12px rgba(179, 62, 62, 0.3)',
      },
    },
    muted: {
      variant: 'buttons.default',
      backgroundColor: '#F8F5EF',
      color: 'text',
      border: '1px solid #E8E4DC',
      ':hover': {
        backgroundColor: '#F0EBE2',
        borderColor: '#D9D4CB',
      },
    },
    white: {
      variant: 'buttons.default',
      backgroundColor: '#FFFEF9',
      color: 'heading',
      border: '1px solid #E8E4DC',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      '&:hover': {
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      },
    },
    text: {
      variant: 'buttons.default',
      color: 'primary',
      padding: '8px 4px',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '4px',
        left: '4px',
        right: '4px',
        height: '1px',
        bg: 'primary',
        opacity: 0.3,
        transition: 'all 0.25s ease',
      },
      '&:hover': {
        color: '#A33636',
        '&::after': {
          opacity: 1,
        },
      },
    },
  },
  cards: {
    primary: {
      padding: 4,
      borderRadius: '0',
      bg: 'background',
      border: '1px solid',
      borderColor: 'borderColor',
      boxShadow: '4px 4px 0 rgba(45, 41, 38, 0.1)',
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFEF9',
      border: '1px solid #D9D4CB',
      borderRadius: '0',
    },
    featureCard: {
      display: 'flex',
      alignItems: ['center', 'flex-start'],
      flexDirection: ['column', 'row'],
      p: [0, 3],
    },
  },
  forms: {
    label: {
      fontSize: '13px',
      fontWeight: 500,
      color: '#5C5552',
      mb: 2,
      letterSpacing: '0.05em',
    },
    input: {
      borderRadius: '0',
      border: '1px solid #E8E4DC',
      height: 52,
      bg: '#FFFEF9',
      fontFamily: 'body',
      fontSize: '15px',
      px: 4,
      transition: 'all 0.2s ease',
      '&:focus': {
        borderColor: '#B33E3E',
        boxShadow: '0 0 0 3px rgba(179, 62, 62, 0.08)',
        outline: 'none',
      },
      '&::placeholder': {
        color: '#B8B3AC',
      },
    },
    textarea: {
      borderRadius: '0',
      border: '1px solid #E8E4DC',
      bg: '#FFFEF9',
      fontFamily: 'body',
      fontSize: '15px',
      p: 4,
      lineHeight: 1.8,
      resize: 'vertical',
      transition: 'all 0.2s ease',
      '&:focus': {
        borderColor: '#B33E3E',
        boxShadow: '0 0 0 3px rgba(179, 62, 62, 0.08)',
        outline: 'none',
      },
      '&::placeholder': {
        color: '#B8B3AC',
      },
    },
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary',
      borderRadius: '0',
      p: '4px 12px',
      fontSize: 1,
      letterSpacing: '0.05em',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      bg: 'background',
    },
    h1: {},
    h2: {},
    h3: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9D4CB',
    },
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
  // カスタムパターン
  patterns: {
    asanoha: asanohaPattern,
    ichimatsu: ichimatsuPattern,
  },
};
