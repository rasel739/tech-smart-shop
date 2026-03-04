// navbar

export const NAV_ITEMS = [
  { title: 'Home', href: '/' },
  {
    title: 'Products',
    href: '/products',
    productItem: [
      {
        title: 'Laptops',
        href: '/products/laptops',
        description: 'High performance laptops for work & gaming.',
      },
      {
        title: 'Smartphones',
        href: '/products/smartphones',
        description: 'Latest Android & iOS devices.',
      },
      {
        title: 'Accessories',
        href: '/products/accessories',
        description: 'Headphones, keyboards & more.',
      },
    ],
  },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

// top navbar
export const HOTLINE_NUMBER = '(025) 3886 25 16';
export const CURRENCIES = [
  { value: 'usd', label: 'USD' },
  { value: 'eur', label: 'EUR' },
  { value: 'gbp', label: 'GBP' },
];

export const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'bn', label: 'Bangla' },
  { value: 'es', label: 'Spanish' },
];
