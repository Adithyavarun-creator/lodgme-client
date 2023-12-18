import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const EmailVerifyStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 50px;
  @media ${devices.bigLaptopsAndDesktops} {
    gap: 35px;
    padding: 50px;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 35px;
    padding: 40px;
  }
  @media ${devices.smallTabs} {
    gap: 25px;
    padding: 30px;
  }

  @media ${devices.smallMobiles} {
    gap: 25px;
    padding: 40px;
  }

  .verify-icon {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.primaryColor};
    box-shadow: 0px 0px 1px 1px #0000001a;
    animation: pulse-animation 2s infinite;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 80px;
      width: 80px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 60px;
      width: 60px;
    }
    @media ${devices.smallTabs} {
      height: 50px;
      width: 50px;
    }

    @media ${devices.smallMobiles} {
      height: 40px;
      width: 40px;
    }
  }

  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primaryColor};
    }
    100% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
  }

  .verified-text {
    font-size: 26px;
    font-weight: bolder;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }
`;
