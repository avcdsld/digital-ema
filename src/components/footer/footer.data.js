import twitter from 'assets/images/icons/twitter.png';
import github from 'assets/images/icons/github.png';

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
        path: 'https://twitter.com/arandoros',
        icon: twitter,
        label: 'Twitter',
      },
      {
        path: 'https://github.com/avcdsld/digital-ema',
        icon: github,
        label: 'Github',
      },
    ],
  },
];
