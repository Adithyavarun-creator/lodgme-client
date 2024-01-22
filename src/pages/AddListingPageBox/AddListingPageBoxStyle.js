import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const AddListingPageBoxStyle = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin: 0 auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);

  .steplisting {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    column-gap: 100px;
    row-gap: 40px;
  }

  h2 {
    text-transform: capitalize;
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
  }

  .stepnumberbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .stepnumber {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    font-weight: bolder;
    font-size: 22px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .stepdesc {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bolder;
    font-size: 22px;
  }

  .addlistbtn {
    display: flex;
    justify-content: space-between;
    gap: 70px;
    margin-top: 30px;
  }

  .houseboxes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 0;
  }

  .housebox {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px;
    gap: 8px;
    border: 1.5px solid ${({ theme }) => theme.colors.primaryColor};
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    transition: all 0.4s ease-in;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .housebox:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
  }

  .selectedicon {
    height: 25px;
    width: 25px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 50%;
    padding: 2px;
  }

  .houseicon {
    height: 20px;
    width: 20px;
  }

  .housename {
    font-size: 17px;
    font-weight: bolder;
  }

  .forstep {
    position: relative;
  }

  .stepbox {
    position: absolute;
    top: -60px;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 5px;
    height: 47px;
    width: 47px;
    color: #fff;
    border-radius: 50%;
    font-weight: bolder;
    text-align: center;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .acctypebox {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 25px;
  }

  .acctypebox-1 {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border: 0.6px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
  }

  h3 {
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 18px;
  }

  .subaccomdatetext {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 16px;
  }

  .selectype {
    /* border: 5px solid ${({ theme }) => theme.colors.primaryColor}; */
    background-color: red;
    color: #fff;
  }
`;
