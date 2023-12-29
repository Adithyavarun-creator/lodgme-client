import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const CheckoutPageStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 30px;
  gap: 20px;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
  }
  @media ${devices.smallTabs} {
  }

  @media ${devices.smallMobiles} {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
  }

  .checkoutbox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    padding: 30px;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      padding: 15px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px;
      gap: 0;
    }
  }

  .checkoutheading {
    font-size: 22px;
    text-decoration: underline;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 16px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  .checkoutoptions {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      margin-top: 20px;
      gap: 25px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 20px;
      gap: 15px;
    }
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
    align-items: center;
    display: flex;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 16px 40px;
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      padding: 12px 30px;
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px 25px;
      font-size: 10px;
    }
  }
`;
