import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
    className?: string;
    disabled?: boolean;
    variant?: 'primaryBlueGr' | 'success' | 'danger';
};

const variantClasses = {
    primaryBlueGr: 'bg-gradient-to-r from-[#3C97FF] to-[#10F5EA] text-primary-blue text-[14px] px-4 py-2 rounded-[20px] font-bold',
    success: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50',
    danger: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50'
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    className = '',
    disabled = false,
    variant = 'primaryBlueGr'
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${variantClasses[variant]}
                ${className}
            `}
        >
            {children}
        </button>
    )
}

export default Button
