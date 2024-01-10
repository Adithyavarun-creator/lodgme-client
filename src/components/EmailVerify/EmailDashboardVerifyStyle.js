import styled from "styled-components";

export const EmailVerifydashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  input {
    height: 45px;
    width: 100%;
    outline: none;
    offset: none;
    padding: 10px;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
  }
  input:placeholder-shown {
    font-size: 20px;
  }
`;
