type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'Strona Główna' },
  { href: '/about', label: 'O mnie' },
  { href: '/products', label: 'Produkty' },
  { href: '/favorites', label: 'Ulubione' },
  { href: '/cart', label: 'Koszyk' },
  { href: '/reviews', label: 'Opinię' },
  { href: '/orders', label: 'Zamówienia' },
  { href: '/admin/sales', label: 'dashboard' },
];

export const adminLinks: NavLink[] = [
  { href: '/admin/sales', label: 'Sprzedaż' },
  { href: '/admin/products', label: 'Moje produkty' },
  { href: '/admin/products/create', label: 'Utwórz produkt' },
];
