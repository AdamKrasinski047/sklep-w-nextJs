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

Zapisuj i ucz się na bieżąco – to realny kod z projektu sklepu. 💡
