import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const AmenitiesStyle = styled.div`
  -webkit-box-shadow: 3px 10px 59px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 10px 59px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 10px 59px -3px rgba(0, 0, 0, 0.75);
  padding: 10px;
  height: max-content;
  background-color: #fff;
  border-radius: 15px;
  z-index: 130;
  width: 40%;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    width: 40%;
  }
  @media ${devices.smallTabs} {
    width: 20%;
  }

  @media ${devices.smallMobiles} {
    width: 15%;
  }

  .close-box {
    display: flex;
    justify-content: end;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .close-icon {
    color: ${({ theme }) => theme.colors.primaryColor};
    height: 45px;
    width: 45px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 40px;
      width: 40px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 30px;
      width: 30px;
    }
    @media ${devices.smallTabs} {
      height: 25px;
      width: 25px;
    }

    @media ${devices.smallMobiles} {
      height: 20px;
      width: 20px;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .amenitiesboxcontent {
    padding: 10px;
    display: flex;
    flex-direction: column;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      padding: 5px;
    }

    @media ${devices.smallMobiles} {
    }
  }

  .amenitycolumn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
    /* gap: 100px; */
    padding: 30px;
    justify-content: center;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 20px;
    }
    @media ${devices.smallTabs} {
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px;
      /* gap: 50px; */
    }
  }

  .amenitycolumn1 {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 7px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 4px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      gap: 4px;
    }
  }

  li {
    list-style: none;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 18px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .amenityicon {
    color: ${({ theme }) => theme.colors.primaryColor};
    height: 25px;
    width: 25px;

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
      height: 15px;
      width: 15px;
    }
  }

  .amenitycontent {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      gap: 5px;
    }
  }

  .line-through {
    text-decoration: line-through;
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
`;
