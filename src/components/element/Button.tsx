import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
  /**
   * The text to display on the button
   */
  label: string;

  /**
   * The severity of the button
   */
  severity?: 'primary' | 'secondary' | 'danger';

  /**
   * The type of the button
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * The function to call when the button is clicked
   */
  onClick?: () => void;

  /**
   * props for styling the button by adding classes
   */
  className?: string;

  /**
   * Whether the button is outlined
   */
  outlined?: boolean;

  /**
   * The icon to display on the button
   */
  icon?: IconProp;
}

const Button: React.FC<ButtonProps> = ({
  label,
  severity,
  onClick,
  className,
  type,
  outlined = false,
  icon,
}) => {
  const getButtonClass = (severity: string = '', outlined: boolean) => {
    let baseClass = '';
    switch (severity) {
      case 'primary':
        baseClass = 'bg-primary-color text-white hover:bg-hover-color';
        break;
      case 'secondary':
        baseClass = 'btn-secondary';
        break;
      case 'danger':
        baseClass = 'btn-danger';
        break;
      default:
        baseClass = '';
    }
    if (outlined) {
      baseClass =
        'btn-outline border border-white text-white px-5 rounded-lg hover:bg-white hover:text-primary-color';
    }
    return baseClass;
  };

  return (
    <button
      className={`btn font-monserat ${getButtonClass(
        severity,
        outlined
      )} py-3 ${className} ${icon ? 'hover:text-white' : ''}`}
      type={type}
      onClick={onClick}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          color="#23A6F0"
          className="hover:text-white"
        />
      )}
      {label}
    </button>
  );
};

export default Button;
