import React from 'react';
import TextField from '@mui/material/TextField';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

interface TextFieldProps {
    id?: string;

    value?: string;

    label?: string;

    size?: 'small' | 'medium' | undefined;

    variant?: "filled" | "outlined" | "standard";
    
    placeholder?: string;
    
    width?: string;

    onChange?: () => void;


}

export const Textfield = ({
  size = 'medium',
  variant = "filled",
  width = "25ch",
  id,
  label,
  placeholder,
  value,
  ...props
}: TextFieldProps) => {
  return (
    <TextField 
    id={id} 
    className={['storybook-textfield', `storybook-textfield--${size}`].join(' ')} 
    value={value}
    variant={variant}
    placeholder={placeholder}
    size={size}
    sx={{width:{width}}}
    label={label}
    {...props}
    
    />
  );
};
