import React from 'react';

interface InputProps {
  /**
   * The value of the input
   */
  value: string | number;

  /**
   * Function to call when the input value changes
   */
  mandatory?: boolean;

  /**
   * Placeholder text for the input
   */
  placeholder?: string;

  /**
   * Function to call when the input value changes
   */
  onChange: (value: string | number) => void;

  /**
   * Set the width of the input
   */
  width?: string;

  /**
   * Set the type of the input
   */
  type?: 'email' | 'text' | 'number' | 'password' | 'range';

  /**
   * Additional class names for the input
   */
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  width,
  mandatory = false,
  type = 'text',
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      required={mandatory}
      onChange={(e) =>
        onChange(type === 'range' ? Number(e.target.value) : e.target.value)
      }
      className={`${className} ${
        type === 'range'
          ? 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
          : 'border font-monserat text-sm bg-[#F9F9F9] border-gray-300 rounded-[5px] px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
      }`}
      placeholder={placeholder}
      style={{ width: width || '100%' }}
    />
  );
};

export default Input;
