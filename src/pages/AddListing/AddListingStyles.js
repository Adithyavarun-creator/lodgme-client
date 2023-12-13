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
    /* width: 450px; */
    width: 450px;

  }
  label {
    color: red;
  }

  input {
    height: 40px;
    width: 450px;
    padding: 10px;
    border-radius: 5px;
    offset: none;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    :focus {
      border: none;
      offset: none;
    }

    :invalid {
      color: red;
    }
  }

  textarea {
    height: 200px;
    width: 400px;
    padding: 10px;
    border-radius: 5px;
    offset: none;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    :focus {
      border: none;
      offset: none;
    }
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
