import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const UserDashboardStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px;

  @media ${devices.bigLaptopsAndDesktops} {
  }
  @media ${devices.tabletsAndIpads} {
    margin-top: 35px;
  }
  @media ${devices.smallTabs} {
  }

  @media ${devices.smallMobiles} {
  }

  h1 {
    font-size: 24px;
    text-align: center;
    text-transform: capitalize;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 22px;
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

  .dashboardbox {
    display: grid;
    grid-template-columns: 500px 500px;
    gap: 80px;
    padding: 20px;
    justify-content: center;
    margin-bottom: 30px;
    /* height: 250px; */

    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 400px 400px;
    }
    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 300px 300px;
      gap: 50px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 300px;
      gap: 50px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 250px;
      gap: 50px;
    }
  }

  .dashboardbox-1 {
    padding: 40px;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 30px;
      gap: 15px;
    }
    @media ${devices.tabletsAndIpads} {
      padding: 20px;

      gap: 10px;
    }
    @media ${devices.smallTabs} {
      padding: 15px;
      gap: 8px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px;
      gap: 5px;
    }
  }

  .dashboard-logobox {
    position: absolute;
    top: -15px;
    background-color: #fff;
    padding: 3px;
    border-radius: 10px;
    left: -3px;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .dashboard-logo {
    width: 100%;
    height: 30px;
    object-fit: contain;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 30px;
    }
    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .dashboard-icon {
    height: 40px;
    width: 40px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      height: 35px;
      width: 35px;
    }
    @media ${devices.smallTabs} {
      height: 25px;
      width: 25px;
    }

    @media ${devices.smallMobiles} {
      height: 25px;
      width: 25px;
    }
  }

  .dashboard-mainlink {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .dashboard-maintitle {
    font-size: 20px;
    font-weight: bolder;
    text-decoration: underline;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 13px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .flexbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }
    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }
`;
