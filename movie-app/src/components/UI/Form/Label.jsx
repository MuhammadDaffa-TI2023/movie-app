import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #2D3748;
`;

const Label = ({ htmlFor, children, ...props }) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;