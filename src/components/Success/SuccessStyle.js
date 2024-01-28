import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const SuccessStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    gap: 16px;
  }
  @media ${devices.smallTabs} {
    margin-top: 40px;
    gap: 12px;
  }

  @media ${devices.smallMobiles} {
    margin-top: 40px;
    gap: 6px;
  }

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 24px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  h3 {
    font-size: 24px;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  .successimg {
    margin-top: 20px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;

    animation: pulse-animation 2s infinite;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 100px;
      width: 100px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 90px;
      width: 90px;
    }
    @media ${devices.smallTabs} {
      height: 55px;
      width: 55px;
    }

    @media ${devices.smallMobiles} {
      height: 40px;
      width: 40px;
    }
  }

  .redirectmsg {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 13px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }
`;
