// src/components/Button.tsx
import { type ReactNode } from 'react';
import styles from '../styles/Button.module.css';

type ButtonProps = {
  children: ReactNode;
  buttonStyle: 'btn--primary' | 'btn--outline';
  buttonSize: 'btn--medium' | 'btn--large';
  className?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  buttonStyle,
  buttonSize,
  className = '',
  onClick
}: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${styles[buttonStyle]} ${styles[buttonSize]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;