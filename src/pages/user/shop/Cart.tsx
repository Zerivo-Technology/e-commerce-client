import Button from '@/components/element/Button';
import Input from '@/components/element/Input';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  priceBefore: number;
  quantity: number;
  size: string;
  image: string;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 10.0,
    priceBefore: 20.0,
    size: 'M',
    quantity: 1,
    image: 'https://picsum.photos/100/100?random=7',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20.0,
    priceBefore: 30.0,
    size: 'L',
    quantity: 2,
    image: 'https://picsum.photos/183/238?random=6',
  },
];

const Cart: React.FC = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [inputCode, setInputCode] = useState('');

  const handleRangeChange = (value: number | string) => {
    setRangeValue(value as number);
  };

  const handleInputChange = (value: number | string) => {
    setInputCode(value as string);
  };

  return (
    <div className="min-h-screen my-12">
      <div className="container mx-auto font-monserat">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold mb-4 text-dark-background">
            Your Cart
          </h1>
          <span id="separator" className="border border-[#FE7E7E7]" />
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 justify-between"
              >
                <div className="flex flex-row gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div className="flex flex-col gap-3 w-[153px]">
                    <span className="font-bold text-lg text-dark-background">
                      {item.name}
                    </span>
                    <div className="flex flex-row gap-4 items-center">
                      <span className="text-dark-background font-medium text-base">
                        ${item.price}
                      </span>
                      <span className="text-light-text-color line-through text-base">
                        ${item.priceBefore}
                      </span>
                      <span className="text-dark-background border-2 border-[#BDBDBD] w-[34px] h-[36px] font-sm flex items-center justify-center">
                        {item.size}
                      </span>
                    </div>
                  </div>
                </div>
                <Input
                  className="w-fit flex items-center"
                  width="98px"
                  type="number"
                  value={rangeValue}
                  onChange={handleRangeChange}
                />
                <span className="font-medium w-[72px] text-center">
                  ${item.price}
                </span>
                <span
                  id="delete-button"
                  className="border border-primary-color h-10 w-10 rounded-full flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    className="text-primary-color"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex font-monserat container mx-auto py-12">
        <div className="ml-auto">
          <div className="flex flex-col w-[439px] gap-5 text-dark-background">
            <h3 className="text-dark-background font-bold text-2xl">
              CART TOTALS
            </h3>
            <span id="separator" className="border border-[#FE7E7E7]" />
            <Input
              type="text"
              value={inputCode}
              onChange={handleInputChange}
              width="100%"
              useButton
              placeholder="Input voucher discount code"
            />
            <div className="flex flex-col">
              <div className="flex justify-between border-b py-2">
                <p>Subtotal</p>
                <p>100</p>
              </div>
              <div className="flex justify-between border-b py-2">
                <p>Discount</p>
                <p>0</p>
              </div>
              <div className="flex justify-between border-b py-2">
                <p>Shipping free</p>
                <p>0</p>
              </div>
              <div className="flex justify-between border-b py-2 font-bold">
                <p>Total</p>
                <p>$100</p>
              </div>
            </div>
            <Button label="Proceed To Checkout" severity="primary" className='w-fit px-4 rounded-md font-bold ml-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
