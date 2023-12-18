import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const NotFoundStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media ${devices.bigLaptopsAndDesktops} {
    margin-top: 30px;
    gap: 6px;
  }

  @media ${devices.tabletsAndIpads} {
    margin-top: 30px;
    gap: 6px;
  }
  @media ${devices.smallTabs} {
    margin-top: 60px;
  }

  @media ${devices.smallMobiles} {
    margin-top: 30px;
    gap: 5px;
  }
  h2 {
    font-size: 26px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 26px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 24px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  .notfound-icon {
    height: 200px;
    width: 200px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      height: 200px;
      width: 200px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 150px;
      width: 150px;
    }
    @media ${devices.smallTabs} {
      height: 100px;
      width: 100px;
    }

    @media ${devices.smallMobiles} {
      height: 80px;
      width: 80px;
    }
  }
`;
