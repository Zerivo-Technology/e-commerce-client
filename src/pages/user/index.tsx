import Button from '@/components/element/Button';
import Card from '@/components/element/Card';
import BrandList from '@/components/element/BrandList';

import {
  IconHack,
  IconEasy,
  IconConcrete,
  starActive,
  starInactive,
} from '@/assets/icons';
import {
  producta as productA,
  productb as productB,
  productc as productC,
  graphicA,
  graphicB,
  graphicC,
  graphicD,
  graphicE,
  graphicF,
  graphicG,
  graphicH,
  graphicI,
  graphicJ,
  featuredA,
  featuredB,
  header,
  subscribeBG,
  profile,
} from '@/assets/images';

const PagesUser = () => {
  const cardData = [
    { img: graphicA, title: 'Graphic Design', price: 6.48, priceBefore: 16.48 },
    {
      img: graphicB,
      title: 'Graphic Design',
      price: 7.48,
      priceBefore: 17.48,
    },
    {
      img: graphicC,
      title: 'Graphic Design',
      price: 8.48,
      priceBefore: 18.48,
    },
    {
      img: graphicD,
      title: 'Graphic Design',
      price: 9.48,
      priceBefore: 19.48,
    },
    {
      img: graphicE,
      title: 'Graphic Design',
      price: 10.48,
      priceBefore: 20.48,
    },
    {
      img: graphicF,
      title: 'Graphic Design',
      price: 11.48,
      priceBefore: 21.48,
    },
    {
      img: graphicG,
      title: 'Graphic Design',
      price: 12.48,
      priceBefore: 22.48,
    },
    {
      img: graphicH,
      title: 'Graphic Design',
      price: 13.48,
      priceBefore: 23.48,
    },
    {
      img: graphicI,
      title: 'Graphic Design',
      price: 14.48,
      priceBefore: 24.48,
    },
    {
      img: graphicJ,
      title: 'Graphic Design',
      price: 15.48,
      priceBefore: 25.48,
    },
  ];

  const serviceData = [
    {
      img: IconConcrete,
      title: 'Easy Wins',
      description: 'Get your best looking smile now!',
    },
    {
      img: IconHack,
      title: 'Concrete',
      description:
        'Defalcate is most focused in helping you discover your most beautiful smile',
    },
    {
      img: IconEasy,
      title: 'Hack Growth',
      description: 'Overcame any hurdle or any other problem.',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pt-24 mx-4" id="header">
        <div className="box relative rounded-[20px] flex flex-col md:flex-row items-center px-6 md:px-24 w-full md:w-[1292px] h-auto md:h-[622px] bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] overflow-hidden">
          <div className="flex text-left flex-col gap-[30px] font-monserat px-4 py-8 md:p-0 z-10">
            <div className="text-hover-color font-bold text-lg md:text-base">
              SUMMER 2020
            </div>
            <div className="text-[32px] md:text-[58px] font-bold">
              NEW COLLECTION
            </div>
            <div className="max-w-full md:max-w-[369px] w-fit text-base md:text-xl">
              We know how large objects will act, but things on a small scale.
            </div>
            <Button
              label="SHOP NOW"
              severity="primary"
              className="flex w-fit md:w-fit px-8 rounded-[5px] font-bold"
            />
          </div>
          <img
            src={header}
            alt=""
            className="absolute bottom-0 right-0 md:right-[-180px] max-h-full max-w-full object-contain z-0"
          />
        </div>
      </div>
      <BrandList />

      <div
        className="relative flex flex-col gap-2 md:flex-row md:max-h-[572px] max-h-none"
        id="product-of-the-week"
      >
        <div className="relative flex-grow">
          <img
            className=" h-full object-cover w-full md:w-[611px]"
            src={productA}
            alt=""
          />
          <div className="absolute bottom-0 flex flex-col gap-3 left-0 w-[420px] max-w-full bg-[#2D8BC0BF] text-white p-14">
            <span className="font-monserat font-bold text-2xl max-w-[199px]">
              Top Product Of the Week
            </span>
            <Button
              className="font-monserat font-bold w-fit"
              label="EXPLORE ITEMS"
              outlined
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 max-h-[572px]">
          <div className="relative h-[280px]">
            <img
              className="w-[557px] h-full object-cover"
              src={productB}
              alt=""
            />
            <div className="absolute bottom-0 left-0 flex flex-col gap-4 text-white p-9 bg-[#2D8BC0BF] w-[420px] max-w-full">
              <span className="font-monserat text-xl max-w-[258px]">
                Top Product Of the Week
              </span>
              <Button
                className="font-monserat font-bold w-fit"
                label="EXPLORE ITEMS"
                outlined
              />
            </div>
          </div>
          <div className="relative h-[283px]">
            <img
              className="w-[557px] h-full object-cover"
              src={productC}
              alt=""
            />
            <div className="absolute bottom-0 left-0 flex flex-col gap-4 text-white p-9 bg-[#2D8BC0BF] w-[420px] max-w-full">
              <span className="font-monserat text-xl max-w-[258px]">
                Top Product Of the Week
              </span>
              <Button
                className="font-monserat font-bold w-fit"
                label="EXPLORE ITEMS"
                outlined
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-28 xs:p-8 flex flex-col gap-16">
        <div className="flex flex-col gap-3 items-center font-monserat">
          <h4 className="text-xl font-light text-second-text-color">
            Featured Products
          </h4>
          <h3 className="text-2xl font-bold">BESTSELLER PRODUCTS</h3>
          <p className="text-sm font-light text-second-text-color">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="image-container xs:grid-cols-2 grid md:grid-cols-5 gap-5 mx-auto">
          {cardData.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              imgClassName="w-[170px]"
              title={card.title}
              price={card.price}
              type="price"
              priceBefore={card.priceBefore}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            label="LOAD MORE PRODUCTS"
            outlined
            className="!text-primary-color !px-6 !rounded-[5px] !border-primary-color font-bold text-sm hover:!bg-primary-color hover:!text-white"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-16 xs:mt-5 mt-0">
        <div className="flex flex-col gap-3 items-center font-monserat">
          <h4 className="text-xl font-light text-second-text-color">
            Featured Products
          </h4>
          <h3 className="text-2xl font-bold">THE BEST SERVICES</h3>
          <p className="text-sm font-light text-second-text-color">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex md:flex-row gap-28 xs:flex-col xs:mx-auto xs:gap-16">
          {serviceData.map((service, index) => (
            <div key={index}>
              <Card
                img={service.img}
                cardClassName="min-w-[235px]"
                title={service.title}
                imgClassName="!w-[72px] mx-auto"
                type="non-price"
                titleClassName="!text-2xl text-dark-background"
                description={service.description}
                descriptionClassName="!text-center"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-10 md:py-28">
        <div className="flex flex-col md:flex-row gap-3 px-4 md:px-14">
          <img
            src={featuredA}
            className="w-full md:w-[217px] h-auto md:h-[498px] object-cover"
            alt=""
          />
          <img
            src={featuredB}
            className="w-full md:w-[217px] h-auto md:h-[498px] object-cover"
            alt=""
          />
        </div>

        <div className="flex flex-col p-4 md:p-20 items-start justify-center font-monserat">
          <h5 className="text-primary-color font-bold text-sm md:text-base">
            Featured Products
          </h5>
          <h2 className="text-[24px] md:text-[40px] font-bold text-dark-background">
            We love what we do
          </h2>
          <p className="text-light-text-color max-w-full md:max-w-[351px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>

      <div className="relative w-full min-h-[554px] bg-[#00b5da] flex overflow-hidden">
        <img
          className="absolute top-0 left-[1100px] transform -translate-x-1/2 w-full h-full object-cover object-right-top"
          src={subscribeBG}
          alt="subscribe"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white mx-10 flex flex-col md:flex-row gap-5 md:gap-20 py-8 px-4 md:py-16 md:px-24 sm:px-24 w-full max-w-[1128px] justify-center items-center">
            <div className="flex flex-col gap-5 items-center md:items-center xs:items-start ">
              <div className="flex justify-center mx-auto flex-row gap-1">
                <img src={starActive} alt="star" className="w-[18px]" />
                <img src={starActive} alt="star" className="w-[18px]" />
                <img src={starActive} alt="star" className="w-[18px]" />
                <img src={starActive} alt="star" className="w-[18px]" />
                <img src={starInactive} alt="star" className="w-[18px]" />
              </div>
              <h6 className="font-monserat font-bold max-w-[238px] text-light-text-color xs:text-left md:text-center text-sm leading-[24px]">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </h6>
              <div className="flex flex-row gap-2 items-center justify-center font-monserat">
                <img
                  src={profile}
                  className="rounded-full mx-auto w-[50px] h-[50px] object-cover"
                  alt="profile"
                />
                <div className="flex flex-col items-center">
                  <h6
                    id="username"
                    className="text-sm text-primary-color font-bold"
                  >
                    Regina Miles
                  </h6>
                  <h6
                    id="role"
                    className="text-sm text-dark-background font-bold"
                  >
                    Designer
                  </h6>
                </div>
              </div>
            </div>
            <span
              id="separator"
              className="hidden md:block border border-light-gray-2 h-[298px]"
            />
            <div className="flex flex-col justify-start items-center gap-5">
              <p className="text-disabled-text font-monserat text-center md:text-left">
                Problems trying to resolve the conflict
              </p>
              <h2 className="text-[24px] md:text-[40px] font-bold font-monserat text-dark-background max-w-[374px] text-center leading-[30px] md:leading-[50px]">
                Subscribe For Latest Newsletter
              </h2>
              <div className="flex flex-row items-center border rounded-md overflow-hidden font-monserat max-w-[355px] w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 md:py-5 flex-1 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="bg-primary-color text-sm text-white px-5 py-3 md:py-5 hover:bg-blue-600 transition w-full md:w-auto"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-light-text-color font-monserat text-center md:text-left">
                Problems trying to resolve the conflict
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesUser;
