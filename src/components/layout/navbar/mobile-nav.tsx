import Cart from '@/components/cart/cart';
import BadgeRound from '@/components/shared/badge-round';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_ITEMS } from '@/lib/constants';
import { Heart, History, Menu, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu size={24} />
        </Button>
      </SheetTrigger>

      <SheetContent side='left'>
        <div className='md:hidden border-t bg-white shadow-md'>
          <div className='container mx-auto flex flex-col gap-5 px-4 py-6'>
            <NavigationMenu>
              <NavigationMenuList className='flex flex-col gap-2'>
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.title} className='flex flex-col'>
                    {item.productItem ? (
                      <>
                        <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className='w-52'>
                          <ul className='flex flex-col gap-2 p-2 '>
                            {item.productItem.map((sub) => (
                              <NavigationMenuLink asChild key={sub.title}>
                                <Link
                                  href={sub.href}
                                  className='block rounded-md p-2 hover:bg-muted transition'
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className='font-medium'>{sub.title}</span>
                                  <p className='text-sm text-muted-foreground line-clamp-2'>
                                    {sub.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={navigationMenuTriggerStyle()}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Icons Section */}
            <div className='flex items-center gap-4 pt-4 border-t'>
              <BadgeRound icon={Heart} ariaLabel='Wishlist' />
              <BadgeRound icon={History} ariaLabel='Order History' />
              <BadgeRound icon={ShoppingCart} ariaLabel='Cart' />
            </div>
            <div className='pt-4 border-t'>
              <Cart />
            </div>

            {/* Auth Section */}
            <div className='pt-4 border-t text-sm'>
              <Link href='/login' onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <span className='mx-1 text-muted-foreground'>/</span>
              <Link href='/register' onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
