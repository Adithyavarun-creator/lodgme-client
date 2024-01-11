import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const DeletePopupStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  margin-top: 30px;
  align-items: center;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    margin-top: 40px;

    gap: 30px;
  }
  @media ${devices.smallTabs} {
    margin-top: 50px;

    gap: 25px;
  }

  @media ${devices.smallMobiles} {
    margin-top: 50px;
    gap: 20px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 28px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 22px;
    }
    @media ${devices.smallTabs} {
      font-size: 16px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 24px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .deletehousebox {
    margin-top: 40px;
    padding: 30px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 0.8px solid ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 25px;
    }
    @media ${devices.smallTabs} {
      padding: 18px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px;
    }
  }

  .deletehousbtns {
    display: flex;
    justify-content: space-between;
    gap: 200px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 150px;
    }
    @media ${devices.smallTabs} {
      gap: 120px;
    }

    @media ${devices.smallMobiles} {
      gap: 100px;
    }
  }

  span {
    font-size: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }
`;
