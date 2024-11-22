import React from 'react';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';

interface CartTotalsProps {
  /**
   * props for the input discount code
   */
  inputCode: string;

  /**
   * function to handle input change
   */
  handleInputChange: (value: string | number) => void;

  /**
   * function to handle apply discount
   */
  handleApplyDiscount: () => void;

  /**
   * function to handle proceed to checkout
   */
  handleProceedToCheckout: () => void;

  /**
   * props for the totals
   */
  totals: {
    subTotal: number;
    discount: number;
    shippingFee: number;
    total: number;
  };

  type?: 'delivery' | 'cart';
}

const CartTotals: React.FC<CartTotalsProps> = ({
  inputCode,
  handleInputChange,
  handleProceedToCheckout,
  handleApplyDiscount,
  totals,
  type = 'cart',
}) => {
  return (
    <div
      className="flex flex-col w-[439px] gap-5 text-dark-background"
      id="cart-total"
    >
      <h3 className="text-dark-background font-bold text-2xl">CART TOTALS</h3>
      <span id="separator" className="border border-[#FE7E7E7]" />
      <Input
        onSubmit={handleApplyDiscount}
        type="text"
        onChange={handleInputChange}
        value={inputCode}
        width="100%"
        useButton
        placeholder="Input voucher discount code"
      />
      {type === 'delivery' && (
        <div className="flex flex-row gap-6">
          <Checkbox id='midtrans' label="Midtrans" useBorder radio />
          <Checkbox id='cod' label="Cash On Delivery" useBorder radio />
        </div>
      )}
      <div className="flex flex-col">
        <div className="flex justify-between border-b py-2">
          <p>Subtotal</p>
          <p className="font-medium">${totals.subTotal}</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p>Discount</p>
          <p className="font-medium">${totals.discount}</p>
        </div>
        <div className="flex justify-between border-b py-2">
          <p>Shipping free</p>
          <p className="font-medium">${totals.shippingFee}</p>
        </div>
        <div className="flex justify-between border-b py-2 font-bold">
          <p>Total</p>
          <p className="font-medium">${totals.total}</p>
        </div>
      </div>
      <Button
        label={type === 'delivery' ? 'Place Order' : 'Proceed to Checkout'}
        severity="primary"
        className="w-fit px-4 rounded-md font-bold ml-auto"
        onClick={handleProceedToCheckout}
      />
    </div>
  );
};

export default CartTotals;
