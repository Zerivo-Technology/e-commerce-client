import React from 'react';

interface CardProps {
  /**
   * The image to display on the card
   */
  img: string;

  /**
   * The title of the card
   */
  title: string;

  /**
   * The price before discount of the card
   * only visible if type is 'price'
   */
  priceBefore?: number;

  /**
   * The price of the card
   * only visible if type is 'price'
   */
  price?: number;

  /**
   * The type of the card
   */
  type: 'price' | 'non-price';

  /**
   * The class for the image for styling
   */
  imgClassName?: string;

  /**
   * The description of the card
   * only visible if type is 'non-price'
   */
  description?: string;

  /**
   * The class for the title for styling
   */
  titleClassName?: string;

  /**
   * Class for the description for styling
   */
  descriptionClassName?: string;

  /**
   * Class for the card for styling
   */
  cardClassName?: string;
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  priceBefore,
  price,
  type,
  imgClassName,
  description,
  titleClassName,
  descriptionClassName,
  cardClassName,
}) => {
  return (
    <div
      className={`w-[183px] font-monserat bg-white flex flex-col ${cardClassName}`}
    >
      <div className="flex-shrink-0">
        <img
          src={img}
          alt={title}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      </div>
      <div className="p-4 text-center flex-grow">
        <h3 className={`text-lg font-bold mb-2 ${titleClassName}`}>{title}</h3>
        {type === 'price' && (
          <div className="flex flex-row gap-2 items-center justify-center">
            {priceBefore && (
              <span className="text-muted-color font-bold line-through">
                ${priceBefore}
              </span>
            )}
            {price && (
              <span className="text-secondary-color-1 font-bold text-base">
                ${price}
              </span>
            )}
          </div>
        )}
        {type === 'non-price' && description && (
          <p
            className={`text-sm text-light-text-color ${descriptionClassName}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
