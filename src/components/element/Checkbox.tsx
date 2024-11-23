import React from 'react';

interface CheckboxProps {
  /**
   * id for the checkbox
   */
  id?: string;

  /**
   * label for the checkbox
   */
  label: string;

  /**
   * class name for the label
   */
  labelClassName?: string;

  /**
   * whether to use border or not
   * default is false
   */
  useBorder?: boolean;

  /**
   * whether the checkbox is a radio button or not
   * default is false
   */
  radio?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  labelClassName,
  useBorder = false,
  radio = false,
}) => {
  const handleDivClick = () => {
    const inputElement = document.getElementById(id || '');
    if (inputElement) {
      console.log('inputElement', inputElement);
      inputElement.click();
    }
  };

  return (
    <div
      className={`flex flex-row items-center gap-2 ${
        useBorder
          ? 'border-light-gray-2 border py-3 px-4 gap-3 rounded-[5px] w-full'
          : ''
      }`}
      onClick={handleDivClick}
    >
      <input
        id={id}
        type={radio ? 'radio' : 'checkbox'}
        value=""
        className="w-[25px] h-[25px] text-blue-600 bg-gray-100"
      />
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
