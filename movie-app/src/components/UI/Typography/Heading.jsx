import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeading = styled.h1`
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.5em;
  color: ${({ color }) => color || '#2D3748'};
  font-size: ${({ size }) => size || '1.5rem'};
`;

const Heading = ({ as = "h1", size, color, children, ...props }) => {
  return (
    <StyledHeading as={as} size={size} color={color} {...props}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Heading;