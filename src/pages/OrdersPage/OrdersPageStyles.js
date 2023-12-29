import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const OrdersPageStyles = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
  }
  @media ${devices.smallTabs} {
    padding: 20px;
    margin-top: 50px;
  }

  @media ${devices.smallMobiles} {
    padding: 10px;
    gap: 20px;
    margin-top: 30px;
  }

  .ordertitle {
    text-decoration: underline;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 27px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 24px;
    }
    @media ${devices.smallTabs} {
      font-size: 20px;
    }

    @media ${devices.smallMobiles} {
      font-size: 16px;
    }
  }

  .ordercard {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    width: max-content;
    margin: 0 auto;
    margin-top: 50px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 150px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 100px;
    }
    @media ${devices.smallTabs} {
      justify-content: space-between;
      gap: 40px;
      padding: 10px;
      margin-top: 20px;

    }

    @media ${devices.smallMobiles} {
      justify-content: space-between;
      gap: 20px;
      padding: 10px;
      margin-top: 20px;

    }
  }

  .ordercard-1 {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 5px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 15px;
    }
    @media ${devices.smallTabs} {
      gap: 5px;
    }

    @media ${devices.smallMobiles} {
      gap: 3px;
    }
  }

  .ordercardid {
    font-size: 22px;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }
    @media ${devices.smallTabs} {
      font-size: 9px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }

  .ordericon {
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .ordernumber {
    /* position: absolute;
    top: -40px;
    left: 0; */
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 5px;
    border-radius: 10px;
    color: #fff;
    width: max-content;
    @media ${devices.bigLaptopsAndDesktops} {
      top: -40px;
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      top: -32px;
    }

    @media ${devices.smallMobiles} {
      top: -25px;

    }
  }

  .orderhousecontent {
    margin-top: 5px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .orderbook {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .ordercard-2 {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 5px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 15px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  h2 {
    font-size: 20px;
    font-weight: bold;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 9px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }
`;
