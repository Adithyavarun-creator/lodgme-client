import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const BillingPageStyles = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;

  .billing-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  form {
    display: flex;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .billingform {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  label {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primaryColor};
    padding: 3px;
    width: max-content;
    position: absolute;
    top: -20px;
    left: 5px;
    font-size: 14px;
  }

  input {
    height: 45px;
    width: 350px;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px;

    :focus {
      offset: none;
    }
  }

  .billingpaymentcardbox {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
