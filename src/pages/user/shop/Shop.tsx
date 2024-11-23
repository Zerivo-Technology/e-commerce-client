import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@/components/element/Checkbox';
import Input from '@/components/element/Input';
import Button from '@/components/element/Button';
import Dropdown from '@/components/element/Dropdown';
import Card from '@/components/element/Card';
import Pagination from '@/components/element/Pagination';
import BrandList from '@/components/element/BrandList';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [rangeValue, setRangeValue] = useState<number>(50);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;
  const navigate = useNavigate();

  const options = [
    {
      label: 'Option1',
      value: 'option1',
    },
  ];

  const handleFilterChange = (value: string | number) => {
    setFilter(value as string);
  };

  const handleRangeChange = (value: number | string) => {
    setRangeValue(value as number);
  };

  const handleCardClick = (
    title: string,
    price: number,
    priceBefore: number
  ) => {
    navigate(`/shop/clothing/detail/${title}`);
    sessionStorage.setItem(
      'productDetail',
      JSON.stringify({
        title,
        price,
        priceBefore,
      })
    );
  };

  return (
    <>
      <div className="flex flex-row gap-10 w-fit mx-auto justify-center py-12">
        <div className="filter-container flex justify-center font-monserat max-w-[214px]">
          <div id="filter" className="flex flex-col gap-6">
            <h5 className="text-base font-bold text-dark-background">
              Filter:{' '}
            </h5>
            <Input value={filter} onChange={handleFilterChange} />
            <span id="separator" className="border border-[#FE7E7E7]" />
            <div className="flex flex-col gap-6">
              <h5 className="text-base font-bold text-dark-background">
                Category
              </h5>
              <div className="flex flex-col gap-6">
                <Checkbox
                  labelClassName="font-bold text-light-text-color text-sm"
                  id="category1"
                  label="Men"
                />
                <Checkbox
                  labelClassName="font-bold text-light-text-color text-sm"
                  id="category2"
                  label="Woman"
                />
                <Checkbox
                  labelClassName="font-bold text-light-text-color text-sm"
                  id="category3"
                  label="Category"
                />
                <Checkbox
                  labelClassName="font-bold text-light-text-color text-sm"
                  id="category4"
                  label="Category"
                />
              </div>
            </div>
            <span id="separator" className="border border-[#FE7E7E7]" />
            <div className="flex flex-col gap-6">
              <h5 className="text-base font-bold text-dark-background">
                Filter By Price
              </h5>
              <Input
                type="range"
                value={rangeValue}
                onChange={handleRangeChange}
              />
              <div className="flex w-full flex-row gap-2 mx-auto">
                <Input
                  type="number"
                  value={rangeValue}
                  onChange={handleRangeChange}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={rangeValue}
                  onChange={handleRangeChange}
                  className="flex-1"
                />
              </div>
              <Button
                label="Reset"
                severity="primary"
                className="rounded-md font-bold"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 w-full" id="result-container">
          <div
            className="flex flex-row items-center h-fit w-full"
            id="result-header"
          >
            <h6 className="font-bold text-light-text-color font-monserat">
              Showing all ... results
            </h6>
            <Dropdown
              size="small"
              options={options}
              onSelect={console.log}
              placeholder="Popularity"
              className="text-sm text-light-text-color ml-auto"
            />
          </div>
          <div className="grid grid-cols-4 gap-5" id="product-container">
            {Array.from({ length: 12 }, (_, index) => (
              <Card
                key={index}
                title={`Product ${index + 1}`}
                type="price"
                img={`https://picsum.photos/183/238?random=${index}`}
                priceBefore={16.48}
                price={6.48}
                onClick={() =>
                  handleCardClick(`Product ${index + 1}`, 6.48, 16.48)
                }
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <BrandList />
      </div>
    </>
  );
};

export default Shop;
