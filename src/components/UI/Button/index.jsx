import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "../../../theme";

// Warna default jika theme tidak tersedia
const defaultColors = {
  primary: "#4361ee",
  secondary: "#b5179e",
};

const StyledButton = styled.button`
  padding: ${({ theme, size }) =>
    theme?.button?.sizes?.[size]?.padding || "0.5rem 1rem"};
  font-size: ${({ theme, size }) =>
    theme?.button?.sizes?.[size]?.fontSize || "1rem"};
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  margin: 2px;

  /* Biar font di tengah tombol */
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  background-color: ${({ theme, variant }) =>
    theme?.button?.colors?.[variant] || defaultColors[variant] || defaultColors.primary};

  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
    `}

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

StyledButton.defaultProps = {
  size: "md",
  variant: "primary",
};

const Button = ({ size, variant, full, children, ...props }) => {
  return (
    <StyledButton size={size} variant={variant} full={full} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  full: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
