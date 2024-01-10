import styled from "styled-components";

export const OTPPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bolder;
  }

  .otpinput {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 10px;
    text-align: center;
    font-size: 22px;
  }
`;
