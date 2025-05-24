import Logo from './Logo';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';
import CartButton from './CartButton';
import NavSearch from './NavSearch';
import Container from '../global/Container';
import { Suspense } from 'react';

function Navbar() {
  return (
    <Suspense>
      <nav className="border-b">
        <Container className="flex flex-col gap-4 py-8 sm:flex-col md:flex-row md:items-center md:justify-between">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">

            <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
              <Logo />
              <div className="flex items-center gap-4 md:hidden">
                <CartButton />
                <DarkMode />
                <LinksDropdown />
              </div>
            </div>
            <div className="w-full md:w-96">
              <NavSearch />
            </div>
            <div className="hidden md:flex gap-4 items-center">
              <CartButton />
              <DarkMode />
              <LinksDropdown />
            </div>
          </div>
        </Container>
      </nav>
    </Suspense>
  );
}

export default Navbar;
