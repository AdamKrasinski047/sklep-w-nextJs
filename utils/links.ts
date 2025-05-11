type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'strona główna' },
  { href: '/about', label: 'o mnie' },
  { href: '/products', label: 'produkty' },
  { href: '/favorites', label: 'ulubione' },
  { href: '/cart', label: 'koszyk' },
  { href: '/orders', label: 'zamówienia' },
];