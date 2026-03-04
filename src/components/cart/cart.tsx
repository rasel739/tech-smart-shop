import { Button } from '../ui/button';

import BadgeRound from '../shared/badge-round';
import { ShoppingCart } from 'lucide-react';

const Cart = () => {
  return (
    <div>
      <Button variant='secondary' className='bg-none rounded-full'>
        <div>
          <BadgeRound count={3} icon={ShoppingCart} />
        </div>
        <div className='flex flex-col items-start text-left ml-2'>
          <span>Cart</span>
          <span>$120.00</span>
        </div>
      </Button>
    </div>
  );
};

export default Cart;
