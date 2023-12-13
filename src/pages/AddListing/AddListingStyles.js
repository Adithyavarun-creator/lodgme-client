import styled from "styled-components";

export const AddListingStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  .formbox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    position: relative;
  }

  .forminputs {
    display: flex;
    flex-direction: column;
    gap: 1.4px;
    width: 400px;
  }
  label {
    color: red;
  }

  input {
    height: 40px;
    width: 400px;
    padding: 10px;
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-align: justify;
  }

  strong {
    font-weight: bold;
  }
`;
