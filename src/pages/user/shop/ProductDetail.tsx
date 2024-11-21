import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { starActive, starInactive } from '@/assets/icons';
import Card from '@/components/element/Card';
import BrandList from '@/components/element/BrandList';

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>();
  const { price, priceBefore } = JSON.parse(
    sessionStorage.getItem('productDetail') || '{}'
  );

  const handleCardClick = (
    title: string,
    price: number,
    priceBefore: number
  ) => {
    console.log('a')
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
    <div className="container mx-auto py-12 font-monserat">
      <div className="bg-white flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <img
            src={`https://picsum.photos/506/450?random=${title}`}
            alt={title}
            id="thumbnail"
            className="w-[506px] h-[450px]"
          />
          <div className="flex flex-row gap-4">
            <img
              src={`https://picsum.photos/400/300?random=${title}`}
              alt={title}
              className="w-[100px] h-[75px]"
            />
            <img
              src={`https://picsum.photos/400/300?random=${title}`}
              alt={title}
              className="w-[100px] h-[75px] opacity-50"
            />
          </div>
        </div>
        <div className="flex flex-col p-3 gap-5 w-[510px] h-fit">
          <h4 className="text-xl font-semibold text-dark-background">
            {title}
          </h4>
          <div className="flex flex-row gap-3 items-center">
            <div className="flex flex-row gap-[5px] w-fit">
              <img src={starActive} className="w-[18px] h-[18px]" alt="star" />
              <img src={starActive} className="w-[18px] h-[18px]" alt="star" />
              <img src={starActive} className="w-[18px] h-[18px]" alt="star" />
              <img src={starActive} className="w-[18px] h-[18px]" alt="star" />
              <img
                src={starInactive}
                className="w-[18px] h-[18px]"
                alt="star"
              />
            </div>
            <div className="ml-2 flex items-center">
              <span className="font-bold text-light-text-color text-sm">
                10 Reviews
              </span>
            </div>
          </div>
          <div id="price" className="flex flex-row gap-5">
            <span className="text-2xl font-bold text-dark-background">
              ${price}
            </span>
            <span className="text-2xl text-light-text-color line-through">
              ${priceBefore}
            </span>
          </div>
          <div className="flex flex-row gap-1 font-bold text-sm">
            <h6 className="text-light-text-color">Availability: </h6>
            <h6 className="text-primary-color">In Stock</h6>
          </div>
          <div id="short description">
            <p className="text-light-text-color text-sm w-[455px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <span id="separator" className="border border-[#FE7E7E7]" />
          <div id="size" className="flex flex-row gap-[10px] text-[#858585]">
            <span className="border-2 border-[#BDBDBD] w-[34px] h-[36px] font-sm flex items-center justify-center">
              S
            </span>
            <span className="border-2 border-[#BDBDBD] w-[34px] h-[36px] font-sm flex items-center justify-center">
              M
            </span>
            <span className="border-2 border-[#BDBDBD] w-[34px] h-[36px] font-sm flex items-center justify-center">
              L
            </span>
            <span className="border-2 border-[#BDBDBD] w-[34px] h-[36px] font-sm flex items-center justify-center">
              XL
            </span>
          </div>
          <button className="bg-primary-color mt-12 text-sm text-white flex w-fit font-bold px-[20px] py-[10px] rounded">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="my-24 flex flex-col">
        <div className="flex flex-row font-bold text-sm">
          <span className="border light-gray-2 p-6 text-primary-color">
            Description
          </span>
          <span className="border light-gray-2 p-6 text-secondary-color-2">
            Review (10)
          </span>
        </div>
        <p className="p-7 text-sm border">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
      </div>

      <>
        <h3 className="font-bold text-2xl text-second-text-color">
          RELATED PRODUCTS
        </h3>
        <hr className="h-px my-6 bg-light-gray-2 border-0" />
        <div className="grid grid-cols-5 gap-5" id="product-container">
          {Array.from({ length: 5 }, (_, index) => (
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
      </>
      <div className="flex justify-center items-center">
        <BrandList />
      </div>
    </div>
  );
};

export default ProductDetail;
