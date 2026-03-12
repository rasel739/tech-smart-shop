import Link from 'next/link';

const Sidebar = () => {
  const categories = [
    {
      name: 'Laptops',
      link: '/laptops',
    },
    {
      name: 'PC & Computers',
      link: '/pc-computers',
    },
    {
      name: 'Cell Phones',
      link: '/cell-phones',
    },
    {
      name: 'Gaming & VR',
      link: '/gaming-vr',
    },
    {
      name: 'Networking',
      link: '/networking',
    },
    {
      name: 'Networking',
      link: '/networking',
    },
    {
      name: 'Cameras',
      link: '/cameras',
    },
    {
      name: 'Sounds',
      link: '/sounds',
    },
    {
      name: 'Office',
      link: '/office',
    },
    {
      name: 'Storage, USB',
      link: '/storage-usb',
    },
    {
      name: 'Accessories',
      link: '/accessories',
    },
    {
      name: 'Clearance',
      link: '/clearance',
    },
  ];

  return (
    <div className='bg-[#FFFFFF] p-4 rounded-md shadow-md w-full md:w-64'>
      <h3 className='text-red-500 font-semibold'> SALE 40% OFF</h3>
      <ul className='flex flex-col gap-2'>
        <li className='flex flex-col gap-1'>
          {categories.map((category) => (
            <Link key={category.name} href={category.link}>
              {category.name}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
