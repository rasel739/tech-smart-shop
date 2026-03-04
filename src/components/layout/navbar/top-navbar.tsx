import SelectField from '@/components/form/select-field';
import { CURRENCIES, HOTLINE_NUMBER, LANGUAGES } from '@/lib/constants';

import Link from 'next/link';
import { memo } from 'react';

const TopNavbar = () => {
  const handleSelectCurrency = (value: string) => {
    console.log('Selected currency:', value);
  };

  const handleSelectLanguage = (value: string) => {
    console.log('Selected language:', value);
  };

  return (
    <div className='bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60 border-b'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-2 text-xs sm:text-sm text-gray-600'>
          {/* Left Section */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:gap-3 text-center sm:text-left'>
            <span className='font-medium'>Hotline 24/7</span>
            <Link
              href={`tel:${HOTLINE_NUMBER.replace(/\D/g, '')}`}
              className='hover:text-primary transition-colors'
            >
              {HOTLINE_NUMBER}
            </Link>
          </div>

          {/* Right Section */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6'>
            {/* Links */}
            <div className='flex justify-center sm:justify-start gap-4'>
              <Link href='/sell' className='hover:text-primary transition-colors'>
                Sell on Swoo
              </Link>
              <Link href='/track-order' className='hover:text-primary transition-colors'>
                Track Order
              </Link>
              <Link href='/customer-service' className='hover:text-primary transition-colors'>
                Customer Service
              </Link>
            </div>

            {/* Select Fields */}
            <div className='flex justify-center sm:justify-end gap-3'>
              <SelectField
                selectItem={CURRENCIES}
                handleSelectChange={handleSelectCurrency}
                selectLabel='currency'
              />
              <SelectField
                selectItem={LANGUAGES}
                handleSelectChange={handleSelectLanguage}
                selectLabel='language'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TopNavbar);
