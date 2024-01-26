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

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 30px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 30px;
  }
  @media ${devices.smallTabs} {
    padding: 10px;
    gap: 30px;
  }

  @media ${devices.smallMobiles} {
    padding: 5px;
    gap: 20px;
  }

  .steplisting {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    column-gap: 100px;
    row-gap: 40px;

    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 1fr 1fr;
      column-gap: 50px;
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 1fr 1fr;
      column-gap: 25px;
      row-gap: 25px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 1fr;
      column-gap: 20px;
      row-gap: 20px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      column-gap: 14px;
      row-gap: 14px;
    }
  }

  h2 {
    text-transform: capitalize;
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 22px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
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

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
      width: 30px;
      height: 30px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
      width: 40px;
      height: 40px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
      width: 30px;
      height: 30px;
    }
  }

  .stepdesc {
    color: #333;
    font-weight: bolder;
    font-size: 22px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .addlistbtn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    margin-top: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .houseboxes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 0;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 1fr;
      row-gap: 8px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      row-gap: 13px;
    }
  }

  .stepbox {
    position: absolute;
    top: 120px;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
      top: 90px;
    }

    @media ${devices.tabletsAndIpads} {
      top: 80px;
    }
    @media ${devices.smallTabs} {
      top: 130px;
    }

    @media ${devices.smallMobiles} {
      top: 80px;
    }
  }

  .headingexample {
    font-size: 24px;
    display: flex;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
      margin-top: 60px;
    }
    @media ${devices.smallTabs} {
      font-size: 16px;
      margin-top: 100px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
      margin-top: 60px;
    }
  }

  .houseboxes {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 30px;
    column-gap: 35px;
    row-gap: 35px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 30px;
      column-gap: 30px;
      row-gap: 30px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
      row-gap: 30px;
    }

    @media ${devices.smallMobiles} {
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      align-items: center;
      margin-top: 0;
    }
  }

  .housebox {
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

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 12px;
      align-items: center;
      justify-content: center;
    }
    @media ${devices.smallTabs} {
      padding: 8px;
      align-items: center;
      justify-content: center;
    }

    @media ${devices.smallMobiles} {
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      width: 50%;
      gap: 2px;
    }
  }

  .housebox:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .houseicon {
    height: 20px;
    width: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 17px;
      width: 17px;
    }
    @media ${devices.smallTabs} {
      height: 15px;
      width: 15px;
    }

    @media ${devices.smallMobiles} {
      height: 17px;
      width: 17px;
    }
  }

  .housename {
    font-size: 19px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 17px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  .forstep {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 10px;
    }
    @media ${devices.smallTabs} {
      gap: 8px;
    }

    @media ${devices.smallMobiles} {
      gap: 3px;
    }
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

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
      padding: 5px;
      height: 40px;
      width: 40px;
    }

    @media ${devices.smallTabs} {
      font-size: 16px;
      padding: 5px;
      height: 35px;
      width: 35px;
    }

    @media ${devices.smallMobiles} {
      padding: 5px;
      height: 25px;
      width: 25px;
      font-size: 14px;
    }
  }

  .acctypebox {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 25px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      grid-template-columns: 0.75fr;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 0.75fr;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
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

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 20px;
    }

    @media ${devices.smallTabs} {
      padding: 12px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px;
    }
  }

  .acctypebox-1:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  h3 {
    font-weight: bolder;
    font-size: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .subaccomdatetext {
    font-size: 16px;
    font-weight: 500;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }

    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .accomboxes {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      gap: 17px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 10px;
      padding: 10px;
      gap: 10px;
    }
  }

  .accombox {
    display: flex;
    flex-direction: column;
    gap: 0.8px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      gap: 2px;
    }
  }

  .acclabel {
    font-weight: bold;
    font-size: 14px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }

    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .accinput {
    height: 40px;
    border-radius: 10px;
    outline: none;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 0.8px solid ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      height: 30px;
    }

    @media ${devices.smallMobiles} {
      height: 25px;
    }
  }

  .accinput:placeholder-shown {
    font-size: 13px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 13px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }

    @media ${devices.smallTabs} {
      font-size: 13px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
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

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 15px;
    }

    @media ${devices.smallTabs} {
      margin-top: 13px;
      gap: 4px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 10px;
      gap: 3px;
    }
  }

  .roomspeclist {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .roomcounts {
    display: flex;
    align-items: center;
    gap: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .roomspecname {
    font-size: 17px;
    font-weight: 400;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  span {
    font-size: 17px;
    font-weight: 400;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 17px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .roomcountvalue {
    font-size: 20px;
    font-weight: bolder;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 17px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .roomcounticon {
    height: 30px;
    width: 30px;
    padding: 5px;
    border-radius: 50%;
    border: 0.8px solid ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 25px;
      width: 25px;
    }

    @media ${devices.smallTabs} {
      height: 21px;
      width: 21px;
    }

    @media ${devices.smallMobiles} {
      height: 18px;
      width: 18px;
    }
  }

  .amenitybox {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 20px;
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;
      row-gap: 20px;
      padding: 8px;
    }
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

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 90px;
    }

    @media ${devices.smallTabs} {
      padding: 0;
      height: 80px;
    }

    @media ${devices.smallMobiles} {
      padding: 0;
      height: 70px;
    }
  }

  .amenityinputcheck {
    position: absolute;
    top: 10px;
    right: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      top: 3px;
      right: 10px;
    }
  }

  .roomamenityicon {
    height: 30px;
    width: 30px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 22px;
      width: 22px;
    }

    @media ${devices.smallTabs} {
      height: 18px;
      width: 18px;
    }

    @media ${devices.smallMobiles} {
      height: 12px;
      width: 12px;
    }
  }

  .roomamenitytext {
    font-weight: bolder;
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 11px;
    }
  }

  .roomamenitydetail {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .uploadbox {
    border: 1.4px dashed ${({ theme }) => theme.colors.primaryColor};
    height: 240px;
    width: 100%;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 240px;
      margin-top: 0;
      padding: 10px;
      gap: 13px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 230px;
      margin-top: 0;
      padding: 10px;
      gap: 13px;
    }

    @media ${devices.smallTabs} {
      height: 180px;
      margin-top: 0;
      padding: 10px;
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      height: 120px;
      margin-top: 0;
      padding: 5px;
      gap: 8px;
    }
  }

  .uploadcameraicon {
    height: 30px;
    width: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      height: 22px;
      width: 22px;
    }

    @media ${devices.smallMobiles} {
      height: 11px;
      width: 11px;
    }
  }

  .uploadtext {
    font-size: 17px;
    font-weight: bolder;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      font-size: 13px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .uploadtextrule {
    font-size: 14px;
    font-weight: 500;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
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
    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 1fr 1fr
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 20px;
    }

    @media ${devices.smallTabs} {
      grid-template-columns: 1fr;
      column-gap: 20px;
      row-gap: 25px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      column-gap: 0;
      row-gap: 25px;
    }
  }

  .delimgbox {
    position: relative;
    margin-top: 20px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .uploadedimages {
    object-fit: contain;
    height: 200px;
    border-radius: 10px;
    border: 1.3px solid ${({ theme }) => theme.colors.primaryColor};
    width: 100%;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      height: 120px;
    }
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

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      top: -12px;
      height: 17px;
      width: 17px;
      padding: 5px;
    }

    @media ${devices.smallMobiles} {
      top: -12px;
      height: 12px;
      width: 12px;
      padding: 8px;
    }
  }

  .titlebox {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 20px;
      gap: 14px;
    }

    @media ${devices.smallTabs} {
      margin-top: 14px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 10px;
    }
  }

  .exampletext {
    font-size: 20px;
    display: flex;
    justify-content: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }

    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
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

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      width: 500px;
      height: 250px;
      padding: 10px;
    }

    @media ${devices.smallTabs} {
      width: 350px;
      height: 150px;
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      width: 250px;
      height: 100px;
      padding: 10px;
    }
  }

  .pricebox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 5px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 22px;
      gap: 5px;
    }

    @media ${devices.smallTabs} {
      margin-top: 15px;
      gap: 5px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 10px;
      gap: 5px;
    }
  }

  .priceicon {
    height: 70px;
    width: 70px;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 55px;
      width: 55px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 40px;
      width: 40px;
    }

    @media ${devices.smallTabs} {
      height: 30px;
      width: 30px;
    }

    @media ${devices.smallMobiles} {
      height: 25px;
      width: 25px;
    }
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

    @media ${devices.bigLaptopsAndDesktops} {
      height: 50px;
      width: 15%;
      font-size: 50px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 40px;
      width: 15%;
      font-size: 40px;
    }

    @media ${devices.smallTabs} {
      height: 20px;
      width: 15%;
      font-size: 20px;
    }

    @media ${devices.smallMobiles} {
      height: 20px;
      width: 10%;
      font-size: 15px;
    }
  }

  .perday {
    font-size: 50px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 43px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 37px;
    }

    @media ${devices.smallTabs} {
      font-size: 18px;
    }

    @media ${devices.smallMobiles} {
      font-size: 13px;
    }
  }
`;
