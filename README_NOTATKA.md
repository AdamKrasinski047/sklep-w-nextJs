# 📘 Notatka – Sklep w Next.js z Tailwind CSS i shadcn/ui

Poniżej znajduje się podsumowanie wiedzy zdobytej podczas pracy nad projektem sklepu.

---

## 🧩 Tailwind CSS – użyte klasy i przykłady z kodu

| Klasa | Znaczenie | Przykład z kodu |
|-------|-----------|-----------------|
| `mx-auto` | Centrowanie w poziomie | `<div className="mx-auto">` |
| `max-w-6xl` | Maksymalna szerokość: 72rem (1152px) | `<div className="max-w-6xl">` |
| `xl:max-w-7xl` | Szerokość 80rem na ekranach ≥ 1280px | `<div className="xl:max-w-7xl">` |
| `px-8` | Padding lewo/prawo: 2rem (32px) | `<div className="px-8">` |
| `py-8` | Padding góra/dół: 2rem (32px) | `<Container className="py-8">` |
| `py-20` | Duży padding góra/dół: 5rem (80px) | `<Container className="py-20">` |
| `flex` | Flexbox – układ elastyczny | `<div className="flex">` |
| `flex-col` | Układ kolumnowy | `<div className="flex flex-col">` |
| `sm:flex-row` | Rzędowy układ na ≥640px | `<div className="sm:flex-row">` |
| `gap-4` | Odstęp między dziećmi: 1rem | `<div className="gap-4">` |
| `justify-center` | Wyśrodkowanie w poziomie | `<div className="justify-center">` |
| `items-center` | Wyśrodkowanie w pionie | `<div className="items-center">` |
| `relative` | Kontekst pozycji dla elementów absolutnych | `<Button className="relative">` |
| `absolute` | Pozycjonowanie absolutne | `<span className="absolute ...">` |
| `-top-3 -right-3` | Przesunięcie w górę i w prawo | `<span className="-top-3 -right-3">` |
| `rounded-full` | Zaokrąglenie 100% – okrąg | `<span className="rounded-full">` |
| `text-xs` | Mała czcionka (12px) | `<span className="text-xs">` |
| `w-6 h-6` | Szerokość i wysokość: 24px | `<span className="w-6 h-6">` |

---

## 🧱 shadcn/ui – komponenty i propsy

| Element | Znaczenie | Przykład |
|--------|-----------|----------|
| `Button` | Komponent przycisku z shadcn/ui | `import { Button } from '@/components/ui/button'` |
| `variant="outline"` | Styl: ramka, brak tła | `<Button variant="outline">` |
| `size="icon"` | Rozmiar ikony (kwadrat, np. 40x40) | `<Button size="icon">` |
| `asChild` | Pozwala użyć np. `<Link>` wewnątrz Buttona | `<Button asChild><Link href="/">...</Link></Button>` |

---

## ⚙️ Next.js i TypeScript – użyte funkcje

| Element | Znaczenie | Przykład |
|--------|-----------|----------|
| `Link` | Nawigacja bez przeładowania | `import Link from 'next/link'` |
| `async function` | Funkcja może pobierać dane `await` | `async function CartButton() { ... }` |
| `children: React.ReactNode` | Typ dla dzieci komponentu | `function Container({ children }: { children: React.ReactNode })` |
| `className?: string` | Opcjonalny prop | `className?: string` w propsach |
| `export default` | Eksport domyślny komponentu | `export default Navbar` |

---

## 📦 Przykład: CartButton.tsx

```tsx
import { Button } from '@/components/ui/button';
import { LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';

async function CartButton() {
  const numItemsInCart = 9;
  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative'
    >
      <Link href='/cart'>
        <LuShoppingCart />
        <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}
```

---

# 📘 Notatka – Sklep w Next.js z Tailwind CSS i shadcn/ui

Poniżej znajduje się podsumowanie wiedzy zdobytej podczas pracy nad projektem sklepu, w tym: komponenty, klasy Tailwinda, logika `Next.js`, `shadcn/ui`, oraz przykłady z kodu.

---

## 🧩 Tailwind CSS – użyte klasy i przykłady

| Klasa | Znaczenie | Przykład |
|-------|-----------|----------|
| `mx-auto` | Centrowanie poziome | `<div className="mx-auto">` |
| `max-w-6xl` | Maks. szerokość 72rem | `<div className="max-w-6xl">` |
| `xl:max-w-7xl` | Maks. szerokość 80rem (ekrany ≥1280px) | `<div className="xl:max-w-7xl">` |
| `px-8`, `py-8`, `py-20` | Padding poziomy i pionowy | `<div className="px-8 py-20">` |
| `flex`, `flex-col`, `sm:flex-row` | Flexbox – ułożenie dzieci | `<div className="flex sm:flex-row">` |
| `gap-4` | Odstęp między elementami: 1rem | `<div className="gap-4">` |
| `justify-center`, `items-center` | Wyśrodkowanie zawartości | `<div className="justify-center items-center">` |
| `relative`, `absolute` | Pozycjonowanie względem rodzica | `<div className="relative"><span className="absolute">...</span></div>` |
| `-top-3`, `-right-3` | Przesunięcia –3 (0.75rem) | `<span className="-top-3 -right-3">` |
| `rounded-full` | Pełne zaokrąglenie (kółko) | `<span className="rounded-full">` |
| `text-xs` | Mała czcionka | `<span className="text-xs">` |
| `w-6 h-6`, `w-40`, `max-w-xs` | Rozmiary szer./wys. | `<div className="w-6 h-6">` |
| `capitalize` | Pierwsza litera wielka | `<div className="capitalize">` |
| `dark:bg-muted` | Styl w trybie ciemnym | `<Input className="dark:bg-muted">` |

---

## 🧱 shadcn/ui – komponenty i propsy

| Element | Opis | Przykład |
|--------|------|----------|
| `Button` | Przycisk | `<Button variant="outline" size="icon">` |
| `variant="outline"` | Styl bez tła | `variant="outline"` |
| `size="icon"` | Rozmiar ikony (kwadrat) | `size="icon"` |
| `asChild` | Pozwala użyć innego elementu np. Link | `<Button asChild><Link href="/">` |
| `DropdownMenu`, `DropdownMenuTrigger` | Rozwijane menu | `<DropdownMenu><DropdownMenuTrigger>...</DropdownMenuTrigger>` |
| `DropdownMenuContent` | Wnętrze menu | `<DropdownMenuContent>...</DropdownMenuContent>` |
| `DropdownMenuItem` | Element w menu | `<DropdownMenuItem>Link</DropdownMenuItem>` |
| `Input` | Pole tekstowe | `<Input type="search" />` |

---

## ⚙️ Next.js + TypeScript – użyte mechanizmy

| Element | Znaczenie | Przykład |
|--------|-----------|----------|
| `Link` | Nawigacja bez przeładowania strony | `import Link from 'next/link'` |
| `async function` | Asynchroniczna funkcja – `await` | `async function CartButton() { ... }` |
| `children: React.ReactNode` | Typ dla dzieci w komponencie | `function Layout({ children }: { children: React.ReactNode })` |
| `className?: string` | Opcjonalny string | `className?: string` |
| `export default` | Eksport komponentu | `export default Navbar` |
| `useTheme()` | Hook do zmiany motywu | `const { setTheme } = useTheme()` |
| `map()` | Generowanie elementów z tablicy | `links.map(link => ...)` |

---

## 📦 Przykłady z kodu

### 🛒 CartButton.tsx

```tsx
<Button asChild variant='outline' size='icon' className='relative'>
  <Link href='/cart'>
    <LuShoppingCart />
    <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
      {numItemsInCart}
    </span>
  </Link>
</Button>
```

---

### 📂 LinksDropdown.tsx

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant='outline'>
      <LuAlignLeft className='w-6 h-6'/>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
    {links.map((link) => (
      <DropdownMenuItem key={link.href}>
        <Link href={link.href} className='capitalize w-full'>
          {link.label}
        </Link>
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>
```

---

### 🔍 NavSearch.tsx

```tsx
<Input
  type='search'
  placeholder='wyszukaj produkt...'
  className='max-w-xs dark:bg-muted '
/>
```

---

### 🌗 DarkMode.tsx

```tsx
<Button variant='outline' size='icon' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  <span className="sr-only">Toggle theme</span>
</Button>
```

---

## 📁 Dodatkowe pliki konfiguracyjne

### theme-provider.tsx

```tsx
'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### providers.tsx

```tsx
'use client';
import { ThemeProvider } from './theme-provider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
export default Providers;
```

---

Ucz się, testuj i twórz komponenty dalej – z tymi wzorcami możesz budować nowoczesny interfejs sklepu krok po kroku. 💡

