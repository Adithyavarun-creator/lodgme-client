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
  /* box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75); */

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
    justify-content: center;
    align-items: center;
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
    padding: 20px;
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
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .headingexample {
    font-size: 15px;
    display: flex;
    justify-content: center;
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
    transition: all 0.6s ease-in;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .acctypebox-1:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
  }

  h3 {
    font-weight: bolder;
    font-size: 18px;
  }

  .subaccomdatetext {
    font-size: 16px;
    font-weight: bold;
  }

  .selectype {
    background-color: red;
    color: #fff;
  }

  .accomboxes {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .accombox {
    display: flex;
    flex-direction: column;
    gap: 0.8px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .acclabel {
    font-weight: bold;
    font-size: 14px;
  }

  .accinput {
    height: 40px;
    border-radius: 10px;
    outline: none;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 0.8px solid ${({ theme }) => theme.colors.primaryColor};
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  .roomspecs {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 30px;
  }

  .roomspeclist {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .roomcounts {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .roomspecname {
    font-size: 17px;
    font-weight: 400;
  }

  .roomcountvalue {
    font-size: 20px;
    font-weight: bolder;
  }

  .roomcounticon {
    height: 30px;
    width: 30px;
    padding: 5px;
    border-radius: 50%;
    border: 0.8px solid ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;
  }

  .amenitybox {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 30px;
  }

  .roomamenity {
    border: 0.8px solid ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    height: 100px;
    border-radius: 10px;
    position: relative;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;
  }

  .amenityinputcheck {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .roomamenityicon {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

  .roomamenitytext {
    font-weight: bolder;
    font-size: 16px;
  }

  .roomamenitydetail {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    justify-content: center;
  }

  .uploadbox {
    border: 1.4px dashed ${({ theme }) => theme.colors.primaryColor};
    height: 240px;
    width: 100%;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .uploadcamera {
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
  .uploadcameraicon {
    height: 30px;
    width: 30px;
  }

  .uploadtext {
    font-size: 17px;
    font-weight: bolder;
  }

  .uploadtextrule {
    font-size: 14px;
    font-weight: 500;
  }

  .dragarea {
    display: none;
  }

  .uploadimagebox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    cursor: pointer;
  }

  .delimgbox {
    position: relative;
    margin-top: 20px;
  }

  .uploadedimages {
    object-fit: contain;
    height: 200px;
    border-radius: 10px;
    border: 1.3px solid ${({ theme }) => theme.colors.primaryColor};
    width: 100%;
  }

  .deleteimgicon {
    position: absolute;
    top: -15px;
    right: 0;
    height: 20px;
    width: 20px;
    color: #fff;
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 10px;
    cursor: pointer;
  }

  .titlebox {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  textarea {
    resize: none;
    width: 800px;
    height: 200px;
    offset: none;
    font-size: 18px;
    border-radius: 10px;
    padding: 20px;
    outline: none;
    border: 0.8px solid #333;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .pricebox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 5px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .priceicon {
    height: 70px;
    width: 70px;
  }

  .pricenumber {
    height: 70px;
    width: 20%;
    text-align: center;
    border: none;
    border-bottom: 1px solid black;
    font-size: 55px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bolder;
  }

  .perday {
    font-size: 50px;
  }
`;
