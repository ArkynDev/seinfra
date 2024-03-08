import React from "react";
import styled from "styled-components";

export const ButtonSimple = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: transparent;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 8px;
    padding: 8px 12px;
    min-width: 100px;
`

export const ButtonPrimary = styled(ButtonSimple) `
    background-color: var(--color-primary);
    border: none;
`

interface ButtonProps {
    primary: boolean;
    aditionalStyle?: string;
    aditionalStyleIcon?: string;
    icon?: string;
    type?: "button" | "submit" | "reset"; 
    onClick?: () => void;
}

export const Button:React.FC<ButtonProps> = ({ primary, aditionalStyle, icon, type, onClick, children }) => {
    const StyledComponent = primary ? ButtonPrimary : ButtonSimple;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }/* else {
            console.error("Invalid onClick type. Expected a function.");
        }*/
    };

    return(
        <StyledComponent className={aditionalStyle} type={type} onClick={handleClick}>
            {children} {icon}
        </StyledComponent>
    )
}