import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  object-fit: ${({ fit }) => fit || 'cover'};
`;

const Image = ({ src, alt, borderRadius, fit, ...props }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      borderRadius={borderRadius}
      fit={fit}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  fit: PropTypes.oneOf(["contain", "cover", "fill", "none", "scale-down"]),
};

export default Image;