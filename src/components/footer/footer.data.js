const xIcon = '/assets/images/icons/x.svg';
const github = '/assets/images/icons/github.png';

export const menuItems = [
  {
    id: 1,
    title: 'Pages',
    items: [
      {
        path: '/',
        label: 'Home',
      },
      {
        path: '#create',
        label: 'Create Ema',
      },
      {
        path: '#emas',
        label: 'Emas',
      },
      {
        path: '#faq',
        label: 'FAQ',
      },
    ],
  },
  {
    id: 2,
    title: 'Connect',
    items: [
      {
        path: 'https://x.com/arandoros',
        icon: xIcon,
        label: 'X',
      },
      {
        path: 'https://github.com/avcdsld/digital-ema',
        icon: github,
        label: 'GitHub',
      },
    ],
  },
];
