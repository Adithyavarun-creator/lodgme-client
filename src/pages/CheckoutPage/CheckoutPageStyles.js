import styled from "styled-components";

export const CheckoutPageStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 30px;
  gap: 50px;

  .checkoutbox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .checkoutoptions {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;
  }

  .checkoutbtn {
    padding: 12px 30px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    border-radius: 10px;
    border: none;
    offset: none;
    cursor: pointer;
    font-size: 22px;
    font-weight: bolder;
  }
`;
