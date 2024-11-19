import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
  labelClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, labelClassName }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        id={id}
        type="checkbox"
        value=""
        className="w-[25px] h-[25px] text-blue-600 bg-gray-100 border-gray-300 rounded "
      />
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
