// FILE: components/IconGrid.tsx

import React from 'react';
import {
  HooliIcon,
  AWSIcon,
  RedditIcon,
  StripeIcon,
  Brand3,
  LyftIcon,
} from '@/assets/icons';

const BrandList: React.FC = () => {
  return (
    <div className="grid grid-cols-6 items-center mx-5 gap-[30px] py-14">
      <img className="w-[102.99px]" src={HooliIcon} alt="Hooli Icon" />
      <img className="w-[102.99px]" src={LyftIcon} alt="Lyft Icon" />
      <img className="w-[102.99px]" src={Brand3} alt="Brand3 Icon" />
      <img className="w-[102.99px]" src={StripeIcon} alt="Stripe Icon" />
      <img className="w-[102.99px]" src={AWSIcon} alt="AWS Icon" />
      <img className="w-[102.99px]" src={RedditIcon} alt="Reddit Icon" />
    </div>
  );
};

export default BrandList;
