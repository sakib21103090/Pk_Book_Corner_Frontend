import { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import {
 
  fetchAllProductsAsync,
  
  fetchProductsByFiltersAsync,
  
  selectAllProducts,
 
} from './BooksSlice';

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from '@headlessui/react'

import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, MagnifyingGlassIcon} from '@heroicons/react/20/solid'

import { Link } from 'react-router-dom';


const sortOptions = [
  { name: 'Best Rating', sort: 'rating', order: 'desc', current: false }, // Changed order to 'desc' for high to low
  { name: 'Price: Low to High', sort: 'price', order: 'asc', current: false },
  { name: 'Price: High to Low', sort: 'price', order: 'desc', current: false },
];

const filters = [
  {
    id: 'AuthorName',
    name: 'AuthorName',
    options: [
      {
        value: 'Mohammad Zakaria',
        label: 'Mohammad Zakaria',
        checked: false
      },
      {
        value: 'Muhammed Zafar Iqbal',
        label: 'Muhammed Zafar Iqbal',
        checked: false
      },
      { value: 'Asif Azim', label: 'Asif Azim', checked: false },
      {
        value: 'Dr. Zafrullah Chowdhury',
        label: 'Dr. Zafrullah Chowdhury',
        checked: false
      },
      {
        value: 'Dakshinaranjan Mitra Majumder',
        label: 'Dakshinaranjan Mitra Majumder',
        checked: false
      },
      { value: 'গীতগোবিন্দ', label: 'গীতগোবিন্দ', checked: false },
      {
        value: 'Hasan Azizul Haque',
        label: 'Hasan Azizul Haque',
        checked: false
      },
      { value: 'A K M Azizul Haque', label: 'A K M Azizul Haque', checked: false },
      { value: 'অরুন্ধতী রায়', label: 'অরুন্ধতী রায়', checked: false },
      {
        value: 'Dr. Tahmina Banu',
        label: 'Dr. Tahmina Banu',
        checked: false
      },
      {
        value: 'Gazi Abdul Hakim',
        label: 'Gazi Abdul Hakim',
        checked: false
      },
      {
        value: 'রবীন্দ্রনাথ ঠাকুর ',
        label: 'রবীন্দ্রনাথ ঠাকুর ',
        checked: false
      }
    ],
  },
  {
    id: 'category',
    name: 'category',
    options: [
      {
        value: 'Educational Books',
        label: 'Educational Books',
        checked: false
      },
      {
        value: 'Science and Technology',
        label: 'Science and Technology',
        checked: false
      },
      {
        value: 'Health and Wellness',
        label: 'Health and Wellness',
        checked: false
      },
      {
        value: 'Childrens Books',
        label: 'Childrens Books',
        checked: false
      },
      {
        value: 'Literature and Poetry',
        label: 'Literature and Poetry',
        checked: false
      },
      {
        value: 'A K M Azizul Haque',
        label: 'A K M Azizul Haque',
        checked: false
      },
      {
        value: 'Politics and Social Sciences',
        label: 'Politics and Social Sciences',
        checked: false
      }
    ],
  }]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// import styles from './Counter.module.css';


// product list item

export default function BooksList() {
  const dispatch = useDispatch();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const products =useSelector(selectAllProducts)
  console.log(products)
  const [filter,setFilter]=useState({});


  const handleFilter=(e,section,option)=>{
  const newFilter={...filter,[section.id]:option.value}
  setFilter(newFilter)
  dispatch(fetchProductsByFiltersAsync(newFilter))
  console.log(section.id,option.label)
  }
  const handleSort = (e, option) => {
    const newFilter = { ...filter, _sort: option.sort, _order: option.order };
    setFilter(newFilter);
    dispatch(fetchProductsByFiltersAsync(newFilter));
  };
  
  useEffect(()=>{
    dispatch(fetchAllProductsAsync())
  },[dispatch])
  console.log(products)
 

  // multiple filter
  // const handleFilter = (e, section, option) => {
  //   const newFilters = { ...filters };
  
  //   if (e.target.checked) {
  //     if (!newFilters[section.id]) {
  //       newFilters[section.id] = [];
  //     }
  //     newFilters[section.id].push(option.value);
  //   } else {
  //     newFilters[section.id] = newFilters[section.id].filter(
  //       (value) => value !== option.value
  //     );
  //     if (newFilters[section.id].length === 0) {
  //       delete newFilters[section.id];
  //     }
  //   }
  
  //   setFilter(newFilters);
  //   dispatch(fetchProductsByFiltersAsync(newFilters));
  //   console.log(section.id, option.label, newFilters);
  // };
    return (
      <div>
        <div className="flex items-center justify-center pb-6">
          <div className="flex border border-gray-300 mt-4 py-2 px-6 bg-white shadow-lg rounded-lg">
            <input
              className="appearance-none bg-transparent rounded border-none w-full text-gray-700 mr-3 py-2 px-4 focus:outline-none text-lg font-light"
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
            <button
              className="flex-shrink-0 bg-yellow-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transform transition-transform hover:scale-105 focus:outline-none"
              type="button"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white">
            <div>
              {/*start Mobile filter dialog function */}
          
              <MobileFilter handleFilter={handleFilter} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen}></MobileFilter> 

              <main className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                  <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          Sort
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>
  
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <MenuItem key={option.name}>
                                {({ active }) => (
                                  <p
                                    onClick={e => handleSort(e, option)}
                                    className={classNames(
                                      option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    {option.name}
                                  </p>
                                )}
                              </MenuItem>
                            ))}
                          </div>
                        </MenuItems>
                      </Transition>
                    </Menu>
  
                    <button
                      type="button"
                      className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                    >
                      <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
  
                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                  <h2 id="products-heading" className="sr-only">Products</h2>
  
                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                    {/* start DesktopFilter function */}
                    <DesktopFilter handleFilter={handleFilter}></DesktopFilter> 
                    
              

              <div className="lg:col-span-3">
              {/* all books for sell */}
              <div className="bg-white">
              {/*  start boooks  grid function */}
              <BooksCard products={products}></BooksCard>       
    </div>
    </div>
            </div>
          </section>
          {/* all Bookslist end  */}
          {/* start pagination */}
          <Pagination></Pagination>
        </main>
      </div>
    </div>
      </div>
    </div>
  );
}

// make different function for easy to use code
function MobileFilter({mobileFiltersOpen, setMobileFiltersOpen,handleFilter}){
  return (
    <Transition show={mobileFiltersOpen}>
    <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
      <TransitionChild
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div className="fixed inset-0 z-40 flex">
        <TransitionChild
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200">
              {filters.map((section) => (
                <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                  {({ open }) => (
                    <>
                      <h3 className="-mx-2 -my-3 flow-root">
                        <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon className="h-6 w-6 text-black" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="h-6 w-6 text-black" aria-hidden="true" />
                            )}
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                onChange={e => handleFilter(e, section, option)}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </Transition>
  );
}

 function DesktopFilter({handleFilter}){
  return (
    <form className="hidden lg:block">
    {filters.map((section) => (
      <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">{section.name}</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </DisclosureButton>
            </h3>
            <DisclosurePanel className="pt-6">
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      id={`filter-${section.id}-${optionIdx}`}
                      name={`${section.id}[]`}
                      defaultValue={option.value}
                      type="checkbox"
                      defaultChecked={option.checked}
                      onChange={e => handleFilter(e, section, option)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    ))}
  </form>
  );
}

function BooksCard({products}){
  return(
    <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
       

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link to="/product-detail" key={product.id}>
                          <div className="group relative border-solid border-2 p-2 border-gray-200">
                            <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                              <img
                                src={product.images}
                                alt={product.BookName}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </div>
                            <div className="mt-4 flex justify-between">
                              <div>
                                <h3 className="text-sm text-gray-700">
                                  <a href={product.images}>
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0"
                                    />
                                    {product.BookName}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                  <StarIcon className="w-6 h-6 inline"></StarIcon>
                                  <span className=" align-bottom">
                                    {product.rating}
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p className="text-sm block font-medium text-gray-900">
                                  $
                                  {Math.round(
                                    product.price *
                                      (1 - product.discountPercentage / 100)
                                  )}
                                </p>
                                <p className="text-sm block line-through font-medium text-gray-400">
                                  ${product.price}
                                </p>
                              </div>
                              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
  );
}

function Pagination(){
  return(
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div className="flex flex-1 justify-between sm:hidden">
      <a
        href="#"
        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Previous
      </a>
      <a
        href="#"
        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Next
      </a>
    </div>
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
          <span className="font-medium">97</span> results
        </p>
      </div>
      <div>
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            2
          </a>
         
          <a
            href="#"
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
  );
}

