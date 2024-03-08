import React from "react";
import styled from "styled-components";

export const ButtonSimple = styled.button`
    cursor: pointer;
    background-color: transparent;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 8px;
    padding: 8px 24px;
`

export const ButtonPrimary = styled(ButtonSimple) `
    background-color: var(--color-primary);
    border: none;
`

interface ButtonProps {
    primary: boolean;
    aditionalStyle: string;
    type?: "button" | "submit" | "reset"; 
    onClick?: () => void;
}

export const Button:React.FC<ButtonProps> = ({ primary, aditionalStyle, type, onClick, children }) => {
    const StyledComponent = primary ? ButtonPrimary : ButtonSimple;

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            console.error("Invalid onClick type. Expected a function.");
        }
    };

    return(
        <StyledComponent className={aditionalStyle} type={type} onClick={handleClick}>
            {children}
        </StyledComponent>
    )
}