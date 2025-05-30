import styled from "styled-components";
import PropTypes from "prop-types";

const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1em;
  color: ${({ color }) => color || '#4A5568'};
`;

const Paragraph = ({ color, children, ...props }) => {
  return (
    <StyledParagraph color={color} {...props}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Paragraph;