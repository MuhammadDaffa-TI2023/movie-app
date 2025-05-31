import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #4361ee;
    box-shadow: 0 0 0 1px #4361ee;
  }

  &::placeholder {
    color: #A0AEC0;
  }
`;

const Input = ({ type = "text", ...props }) => {
  return <StyledInput type={type} {...props} />;
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "number", "tel"]),
};

export default Input;