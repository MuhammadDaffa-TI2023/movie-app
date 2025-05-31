import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Form = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};

export default Form;