import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const BookingPreviewStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  padding: 50px;

  @media ${devices.bigLaptopsAndDesktops} {
    grid-template-columns: 2fr 1fr;
    padding: 30px;
    gap: 50px;
  }

  @media ${devices.tabletsAndIpads} {
    grid-template-columns: 2fr 1fr;
    padding: 30px;
    gap: 30px;
  }
  @media ${devices.smallTabs} {
    grid-template-columns: 1fr;
    padding: 30px;
    margin-top: 30px;
    gap: 30px;
  }

  @media ${devices.smallMobiles} {
    grid-template-columns: 1fr;
    padding: 20px;
    margin-top: 30px;
    gap: 20px;
  }

  .bookingbox-1 {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 20px;
    box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    @media ${devices.bigLaptopsAndDesktops} {
      padding: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 20px;
      gap: 15px;
    }
    @media ${devices.smallTabs} {
      padding: 20px;
      gap: 15px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px;
      gap: 15px;
    }
  }

  .bookingbox1heading {
    font-size: 26px;
    font-weight: bolder;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 24px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 16px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  .bookingstayname {
    font-weight: bold;
    font-size: 24px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .bookingstay {
    font-size: 22px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: underline;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }
  h3 {
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .bookingcheckdatescenter {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    color: #fff;
    border-radius: 15px;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 10px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 10px;
    }
    @media ${devices.smallTabs} {
      padding: 8px;
    }

    @media ${devices.smallMobiles} {
      padding: 4px;
      border-radius: 10px;

    }
  }

  .checktitle {
    font-size: 20px;
    font-weight: bolder;
    text-decoration: underline;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
      text-align: center;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
      text-align: center;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
      text-align: center;
    }
  }

  .checkdate {
    font-weight: bold;
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
      text-align: center;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
      text-align: center;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
      text-align: center;
    }
  }

  .bookingcheckdates {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 30px;
    }
    @media ${devices.smallTabs} {
      gap: 20px;
    }

    @media ${devices.smallMobiles} {
      gap: 20px;
    }
  }

  .bookingamenititesbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 20px;
    }
    @media ${devices.smallTabs} {
      gap: 20px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
    }
  }

  .bookingamenitieslist {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    border-radius: 20px;
    padding: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 10px;
    }
    @media ${devices.smallTabs} {
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px;
    }
  }

  .bookingamenitiestitle {
    font-size: 18px;
    text-decoration: underline;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
      text-align: center;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
      text-align: center;
    }
  }

  .doneIcon {
    height: 25px;
    width: 25px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 18px;
      width: 18px;
    }
    @media ${devices.smallTabs} {
      height: 13px;
      width: 13px;
    }

    @media ${devices.smallMobiles} {
      height: 8px;
      width: 8px;
    }
  }

  ul {
    margin-top: 6px;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  li {
    font-size: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  span {
    font-size: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .bookingbox-2 {
    border: 3px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 30px;
    border-radius: 20px;
    height: max-content;
    box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 20px;
    }
    @media ${devices.smallTabs} {
      padding: 20px;
    }

    @media ${devices.smallMobiles} {
      padding: 20px;
    }
  }

  .bookingpriceheading {
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
      margin-bottom: 15px;
    }
    @media ${devices.smallTabs} {
      font-size: 16px;
      margin-bottom: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  .bookingpricecontent {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 3px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 10px;
    }
    @media ${devices.smallTabs} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 7px;
    }
  }

  .bookingpricebox {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
      align-items: center;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .bookingpricetotal {
    font-size: 22px;
    font-weight: bolder;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 10px;
    color: #fff;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 6px;
    }
    @media ${devices.smallTabs} {
      padding: 5px 8px;
      font-size: 12px;
      border-radius: 5px;
    }

    @media ${devices.smallMobiles} {
      padding: 3px 6px;
      font-size: 10px;
      border-radius: 5px;
    }
  }

  .bookingboxbtn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 10px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 20px;
    }
    @media ${devices.smallTabs} {
      gap: 20px;
    }

    @media ${devices.smallMobiles} {
      /* gap: 20px; */
    }
  }
`;
