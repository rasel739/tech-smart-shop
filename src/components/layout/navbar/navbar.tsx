'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, History, ShoppingCart } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Cart from '@/components/cart/cart';
import BadgeRound from '@/components/shared/badge-round';
import { NAV_ITEMS } from '@/lib/constants';
import MobileNav from './mobile-nav';
import TopNavbar from './top-navbar';
import SearchBar from './search-bar';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md'>
      <TopNavbar />
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        {/* ================= LEFT SIDE ================= */}
        <div className='flex items-center gap-6'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center gap-2 text-lg font-bold'
            aria-label='Tech Smart Shop Home'
          >
            <Image
              src='/images/tech-smart-shop-logo-1.png'
              alt='Tech Smart Shop Logo'
              width={36}
              height={36}
              priority
            />
            <span className='hidden sm:block'>Tech Smart Shop</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className='hidden md:block'>
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {/* If Dropdown Exists */}
                    {item.productItem ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>

                        <NavigationMenuContent>
                          <ul className='grid w-105 gap-3 p-4 md:grid-cols-2'>
                            {item.productItem.map((subItem) => (
                              <NavItem
                                key={subItem.title}
                                title={subItem.title}
                                href={subItem.href}
                              >
                                {subItem.description}
                              </NavItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      /* Normal Link */
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href={item.href}>{item.title}</Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className='hidden md:flex items-center gap-6'>
          <div className='flex items-center gap-4'>
            <BadgeRound icon={Heart} ariaLabel='Wishlist' />
            <BadgeRound icon={History} ariaLabel='Order History' />
            <BadgeRound icon={ShoppingCart} ariaLabel='Cart' />
          </div>

          <div className='text-sm font-medium '>
            <Link href='/login' className='hover:underline'>
              Login
            </Link>
            <span className='mx-1 text-muted-foreground'>/</span>
            <Link href='/register' className='hover:underline'>
              Register
            </Link>
          </div>

          <Cart />
        </div>

        {/* MOBILE MENU BUTTON */}

        <MobileNav />
      </div>
      <SearchBar />
    </header>
  );
};

export default Navbar;

/* ---------------- Nav Item Component ---------------- */

function NavItem({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className='block rounded-md p-3 hover:bg-muted transition'>
          <div className='text-sm font-medium'>{title}</div>
          <p className='mt-1 text-sm text-muted-foreground line-clamp-2'>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
