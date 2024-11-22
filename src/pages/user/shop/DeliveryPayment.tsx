import CartTotals from '@/components/element/CartTotals';
import Input from '@/components/element/Input';
import React, { useState } from 'react';

const DeliveryPayment: React.FC = () => {
  const [deliveryInfo, setDeliveryInfo] = useState('');
  const [inputCode, setInputCode] = useState('');
  const handleDeliveryInfoChange = (value: string | number) => {
    setDeliveryInfo(value as string);
  };

  const handleDiscountCode = (value: number | string) => {
    setInputCode(value as string);
  };

  const handleApplyDiscount = () => {
    console.log('Discount applied', inputCode);
  };

  return (
    <div className="min-h-full container grid grid-cols-2 gap-40 font-monserat mx-auto py-12">
      <div className="flex flex-col w-full gap-5">
        <h3 className="font-bold text-dark-background text-2xl">
          DELIVERY INFORMATION
        </h3>
        <span id="separator" className="border border-[#FE7E7E7]" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-5">
            <Input
              value={deliveryInfo}
              onChange={handleDeliveryInfoChange}
              placeholder="Fullname"
            />
            <Input
              value={deliveryInfo}
              onChange={handleDeliveryInfoChange}
              placeholder="Email"
            />
          </div>
          <Input
            value={deliveryInfo}
            onChange={handleDeliveryInfoChange}
            placeholder="Street"
          />
          <div className="flex flex-row gap-5">
            <Input
              value={deliveryInfo}
              onChange={handleDeliveryInfoChange}
              placeholder="City"
            />
            <Input
              value={deliveryInfo}
              onChange={handleDeliveryInfoChange}
              placeholder="State"
            />
          </div>
          <div className="flex flex-row gap-5">
            <Input
              value={deliveryInfo}
              onChange={handleDeliveryInfoChange}
              placeholder="Zip Code"
            />
            <Input
              value={deliveryInfo}
              onChange={handleDeliveryInfoChange}
              placeholder="Country"
            />
          </div>
          <Input
            value={deliveryInfo}
            onChange={handleDeliveryInfoChange}
            placeholder="Phone"
          />
        </div>
      </div>
      <CartTotals
        type="delivery"
        inputCode={inputCode}
        handleInputChange={handleDiscountCode}
        handleApplyDiscount={handleApplyDiscount}
        totals={{
          subTotal: 50,
          discount: 0,
          shippingFee: 10,
          total: 60,
        }}
        handleProceedToCheckout={() => console.log('Proceed to checkout')}
      />
    </div>
  );
};

export default DeliveryPayment;
