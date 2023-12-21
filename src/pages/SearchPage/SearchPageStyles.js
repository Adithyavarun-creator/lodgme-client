import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const SearchPageStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  padding-left: 60px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-right: 60px;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 40px;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 30px;

    flex-direction: column;
  }
  @media ${devices.smallTabs} {
    gap: 25px;
    flex-direction: column;
  }

  @media ${devices.smallMobiles} {
    gap: 25px;
    flex-direction: column;
    padding: 30px;
  }

  .search-box {
    display: flex;
    flex: 1;
    gap: 10px;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    height: fit-content;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .seachcontentbox {
    display: flex;
    flex-direction: column;
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

  label {
    font-size: 15px;
    font-weight: bolder;
    color: #fff;
    text-align: center;

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

  span {
    color: #fff;
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
      font-size: 10px;
    }
  }

  input {
    height: 40px;
    width: 100%;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    offset: none;
    border: 1px solid #fff;
    cursor: pointer;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 30px;
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 30px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      height: 20px;
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      height: 20px;
      font-size: 8px;
    }
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-size: 15px;
    text-align: center;

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

  .inputcheckbox {
    height: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      height: 15px;
    }

    @media ${devices.smallMobiles} {
      height: 10px;
    }
  }

  .searchlocationbox {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .inputcheckboxsection {
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: space-between;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .searchinputcheckbox {
    display: flex;
    flex-direction: column;
  }

  .searchinputcheck {
    display: flex;
    flex-direction: row;
    gap: 3px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .searchfilterbtnbox {
    display: flex;
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

  .searchfilterbtn {
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bolder;
    outline: none;
    offset: none;
    cursor: pointer;
    border: 1px solid #fff;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 10px 20px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 8px 16px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      padding: 8px 12px;
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 6px 10px;
      font-size: 8px;
    }
  }

  .search-resultsbox {
    display: flex;
    flex: 3;
    padding: 10px;
    flex-direction: column;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      padding: 5px;
    }
  }

  .searchresultbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 60px;
    align-items: center;
    border-radius: 10px;
    box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 50px;
    }
    @media ${devices.smallTabs} {
      margin-top: 60px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 60px;
    }
  }

  h2 {
    font-size: 22px;
    font-weight: bolder;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  .searchpricebox {
    /* padding: 4px; */
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: white;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 6px;
    width: max-content;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      padding: 5px;

    }

    @media ${devices.smallMobiles} {
      padding: 4px;

    }
  }

  .searchpricetag {
    position: absolute;
    top: 48px;
    left: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      top: 28px;
      left: 10px;
    }

    @media ${devices.smallMobiles} {
      top: 20px;
      left: 10px;
    }
  }

  .searchpricetagicon {
    color: #ff8c00;
    height: 22px;
    width: 22px;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 18px;
      width: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 15px;
      width: 15px;
    }
    @media ${devices.smallTabs} {
      height: 10px;
      width: 10px;
    }

    @media ${devices.smallMobiles} {
      height: 7px;
      width: 7px;
    }
  }

  .searchpriceicon {
    height: 20px;
    width: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 15px;
      width: 15px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 15px;
      width: 15px;
    }
    @media ${devices.smallTabs} {
      height: 10px;
      width: 10px;
    }

    @media ${devices.smallMobiles} {
      height: 10px;
      width: 10px;
    }
  }

  .searchhouseamount {
    color: white;
    font-size: 20px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .searchresultview {
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .searchresultviewbtn {
    padding: 10px 16px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 18px;
    font-weight: bolder;
    color: #fff;
    border-radius: 10px;
    border: none;
    offset: none;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 10px 16px;
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 10px 12px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      padding: 8px 10px;
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 5px 8px;
      font-size: 7px;
    }
  }
  .searchresultviewbtnicon {
    height: 15px;
    width: 15px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 12px;
      width: 12px;
    }
    @media ${devices.smallTabs} {
      height: 10px;
      width: 10px;
    }

    @media ${devices.smallMobiles} {
      height: 7px;
      width: 7px;
    }
  }

  .searchresultsection {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    padding: 15px;
    position: relative;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      grid-template-rows: 1fr 1fr;
      padding: 10px;
      gap: 6px;
    }

    @media ${devices.smallMobiles} {
      grid-template-rows: 1fr;
      padding: 10px;
      gap: 5px;
    }
  }

  .bedsbaths {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    /* padding: 4px; */

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 10px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 8px;
    }
    @media ${devices.smallTabs} {
      gap: 5px;
      padding: 2px;
    }

    @media ${devices.smallMobiles} {
      gap: 5px;
      padding: 2px;
    }
  }

  .bedbathamenities {
    display: flex;
    flex-direction: row;
    gap: 5px;
    color: #333;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 5px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 2px;
      padding: 5px;
    }
    @media ${devices.smallTabs} {
      gap: 2px;
      padding: 1.5px;
      border-radius: 5px;
    }

    @media ${devices.smallMobiles} {
      gap: 2px;
      padding: 2.5px;
      border-radius: 5px;
    }
  }

  .bedsbathicon {
    height: 20px;
    width: 20px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 10px;
      width: 10px;
    }
    @media ${devices.smallTabs} {
      height: 7px;
      width: 7px;
    }

    @media ${devices.smallMobiles} {
      height: 7px;
      width: 7px;
    }
  }

  .searchresultcountry {
    color: #333;
    font-weight: bold;
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .bedsbathtext {
    color: #333;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .searchresultinfo {
    font-size: 14px;
    color: darkgrey;
    font-weight: bolder;

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

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: darkgrey;

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

  .searchresultimgsection {
    padding: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .searchresultimg {
    height: 200px;
    object-fit: contain;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 180px;
    }
    @media ${devices.smallTabs} {
      height: 80px;
    }

    @media ${devices.smallMobiles} {
      /* height: 50px; */
      display: none;
    }
  }

  .searchresultuserbox {
    position: absolute;
    top: -35px;
    left: 0;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      position: absolute;
      top: -35px;
      right: 0;
    }

    @media ${devices.smallMobiles} {
      top: -28px;
      right: 0;
    }
  }

  .searchresultuser {
    height: 50px;
    width: 50px;
    border-radius: 50px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      height: 40px;
      width: 40px;
    }

    @media ${devices.smallMobiles} {
      height: 35px;
      width: 35px;
    }
  }

  .searchuserverified {
    position: absolute;
    top: -32px;
    left: 38px;
    bottom: 0;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      top: -28px;
      left: 28px;
      bottom: 0;
    }

    @media ${devices.smallMobiles} {
      top: -32px;
      left: 25px;
      bottom: 0;
    }
  }

  .searchuserverifiedicon {
    height: 20px;
    width: 20px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      height: 18px;
      width: 18px;
    }

    @media ${devices.smallMobiles} {
      height: 16px;
      width: 16px;
    }
  }
`;
