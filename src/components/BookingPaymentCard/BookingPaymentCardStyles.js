import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const BookingPaymentCardStyles = styled.div`
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
`;
