import { IButton } from '../../utils/types';

export const Button = ({ className, type, value, style, onClick }: IButton) => {
  return(
    <button 
      type={type}
      className={className}
      style={style}
      onClick={onClick}
    >
      {value}
    </button>
  );
};