import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const OTPPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  align-items: center;
  justify-content: center;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
  }
  @media ${devices.smallTabs} {
  }

  @media ${devices.smallMobiles} {
    margin-top: 40px;
    gap: 15px;
  }

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  .otpinput {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 10px;
    text-align: center;
    font-size: 22px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 40px;
      font-size: 18px;
    }
    @media ${devices.smallTabs} {
      height: 30px;
      font-size: 16px;
    }

    @media ${devices.smallMobiles} {
      height: 30px;
      font-size: 12px;
    }
  }
`;
