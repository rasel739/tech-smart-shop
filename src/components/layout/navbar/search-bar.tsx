import SearchField from '@/components/form/search-field';
import SelectField from '@/components/form/select-field';

const SearchBar = () => {
  const selectItem = [
    { value: 'all', label: 'All Categories' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'home-garden', label: 'Home & Garden' },
    { value: 'sports-outdoors', label: 'Sports & Outdoors' },
    { value: 'toys-games', label: 'Toys & Games' },
  ];

  const handleCategoryChange = (value: string) => {
    console.log('Selected category:', value);
  };
  return (
    <div className='bg-[#1ABA1A]'>
      <div className='container mx-auto flex items-center px-4 py-2 max-w-md bg-[#1ABA1A]'>
        <div className='flex w-full md:w-1/2'>
          <SelectField
            selectItem={selectItem}
            handleSelectChange={handleCategoryChange}
            select_trigger_className='rounded-l-full rounded-r-none border-r-0 h-10 bg-white/90 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 outline-0'
          />

          <SearchField inpuTgrouPclassName='bg-white/90 focus:ring-0 focus:outline-none focus:ring-offset-0 focus-visible:ring-0 outline-0' />
        </div>
        <div className='hidden md:flex items-center gap-4'>
          <p className='ml-4 text-sm text-white font-semibold'>free shipping over $199</p>
          <p className='ml-4 text-sm text-white font-semibold'>30 days money back</p>
          <p className='ml-4 text-sm text-white font-semibold'>100% secure payment</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
