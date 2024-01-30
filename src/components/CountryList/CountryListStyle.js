import { styled } from "styled-components";
import { devices } from "../../theme/breakpoints";

export const CountryListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 150px;
  padding-right: 150px;
  position: relative;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 8px;
    padding-left: 80px;
    padding-right: 80px;
  }

  @media ${devices.tabletsAndIpads} {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media ${devices.smallTabs} {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media ${devices.smallMobiles} {
    padding-left: 15px;
    padding-right: 40px;
    gap: 2px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  h2 {
    margin-top: 30px;
    text-align: center;
    font-size: 22px;
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

  .countryboxsection {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    padding-left: 5px;
    padding-right: 5px;
    overflow-x: scroll;
    cursor: pointer;
    background: white;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 25px;
    }

    @media ${devices.smallTabs} {
      gap: 18px;
    }
    @media ${devices.smallMobiles} {
      gap: 10px;
      margin-top: 0;
    }
  }

  .countrybox {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    padding: 10px;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 8px;
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }
    @media ${devices.smallMobiles} {
    }
  }

  .countryimage {
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    @media ${devices.bigLaptopsAndDesktops} {
      height: 65px;
      width: 65px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 50px;
      width: 50px;
    }

    @media ${devices.smallTabs} {
      height: 35px;
      width: 35px;
    }
    @media ${devices.smallMobiles} {
      height: 30px;
      width: 30px;
    }
  }

  .countryname {
    font-size: 17px;
    font-weight: 700;
    text-align: justify;
    @media ${devices.bigLaptopsAndDesktops} {
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

  .nextarrow {
    position: absolute;
    top: 110px;
    right: 100px;
    cursor: pointer;
    @media ${devices.bigLaptopsAndDesktops} {
      right: 35px;
    }

    @media ${devices.tabletsAndIpads} {
      right: 10px;
    }

    @media ${devices.smallTabs} {
      top: 100px;
      right: 3px;
    }
    @media ${devices.smallMobiles} {
      top: 65px;
      right: 10px;
    }
  }

  .arrowicon {
    height: 35px;
    width: 35px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 10px;
    color: #fff;
    border-radius: 50%;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 30px;
      width: 30px;
    }

    @media ${devices.smallTabs} {
      height: 27px;
      width: 27px;
      padding: 8px;
    }
    @media ${devices.smallMobiles} {
      height: 20px;
      width: 20px;
      padding: 5px;
    }
  }
`;
