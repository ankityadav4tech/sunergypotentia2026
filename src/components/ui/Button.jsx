import React from 'react';
import styles from '../../styles/ui/Button.module.css';

const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
