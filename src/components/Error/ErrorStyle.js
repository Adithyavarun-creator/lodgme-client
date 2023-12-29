import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ErrorStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
  }
  @media ${devices.smallTabs} {
    margin-top: 40px;
  }

  @media ${devices.smallMobiles} {
    margin-top: 40px;
  }

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 24px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 22px;
    }
    @media ${devices.smallTabs} {
      font-size: 20px;
    }

    @media ${devices.smallMobiles} {
      font-size: 16px;
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
    height: 300px;
    width: 100%;
    border-radius: 10px;
    animation: pulse-animation 2s infinite;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 250px;
    }
    @media ${devices.smallTabs} {
      height: 200px;
    }

    @media ${devices.smallMobiles} {
      height: 150px;
    }
  }
`;
