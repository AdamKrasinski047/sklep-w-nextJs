# 🛒 Sklep w Next.js

Zaawansowany projekt e-commerce zbudowany w technologii **Next.js 14 (App Router)** z pełną autoryzacją, panelem admina, koszykiem, recenzjami i zarządzaniem produktami.

### 🔗 Demo (Vercel)
[https://sklep-w-next-js-12rg.vercel.app](https://sklep-w-next-js-12rg.vercel.app)

---

## 🔐 Konto testowe administratora

Można się zalogować i uzyskać dostęp do `/admin` (panel produktów, formularz edycji itd.)

- **Email:** `ktestowe117@gmail.com`
- **Hasło:** `BardzoTrudneHaslo47`

---

## 🧰 Stack technologiczny

### Framework & Backend
- **Next.js 14 (App Router)**
- **TypeScript**
- **Prisma ORM + PostgreSQL (Supabase)**
- **Clerk** – autoryzacja/logowanie użytkowników
- **Supabase Storage** – hosting zdjęć produktów
- **Zod** – walidacja formularzy
- **Radix UI + ShadCN UI + Tailwind CSS**

### Frontend & UX
- **React Icons** – ikony
- **React Share** – przycisk udostępniania
- **Toast / Radix Toast** – powiadomienia
- **Skeleton / loading UI** – animacje ładowania
- **@clerk/nextjs** – hooks i komponenty do auth
- **clsx** – warunkowe klasy CSS
- **faker.js** – dane testowe

---

## 💳 Stripe – testowe płatności

W aplikacji zintegrowano Stripe do obsługi checkoutu.  
Można bezpiecznie testować płatności przy pomocy kart testowych.

### 🔐 Dane testowe do płatności:
- **Numer karty:** `4242 4242 4242 4242`
- **Data ważności:** dowolna przyszła, np. `12/34`
- **CVC:** dowolny 3-cyfrowy, np. `123`
- **Kod pocztowy:** dowolny, np. `12345`

📚 Więcej kart testowych znajdziesz tutaj:  
🔗 [https://docs.stripe.com/testing](https://docs.stripe.com/testing)
