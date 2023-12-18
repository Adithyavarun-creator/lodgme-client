import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const FooterStyles = styled.footer`
  margin-top: 50px;
  padding-top: 80px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 20px;
  /* border: 1px solid red; */

  @media ${devices.bigLaptopsAndDesktops} {
    margin-top: 50px;
    padding: 80px;
  }

  @media ${devices.tabletsAndIpads} {
    margin-top: 50px;
    padding: 50px;
  }
  @media ${devices.smallTabs} {
    margin-top: 40px;
    padding: 20px;
  }

  @media ${devices.smallMobiles} {
    /* margin-top: 40px; */
    padding: 15px;
  }

  .footer_grids {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1.5fr;
    gap: 40px;
    border-top: 1.5px solid #00000059;
    border-bottom: 1.5px solid #00000059;
    padding: 20px;
    justify-content: center;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;
      padding: 15px;
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 200px 200px 200px;
      gap: 20px;
      padding: 10px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 100px 100px 100px;
      gap: 30px;
      padding: 10px;
      justify-content: space-between;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 80px 80px 80px;
      gap: 10px;
      column-gap: 0;
      padding: 10px;
      /* justify-content: space-between; */
      justify-content: space-between;
    }
  }

  .footer_grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 10px;
      padding: 15px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 8px;
      padding: 10px;
    }
    @media ${devices.smallTabs} {
      gap: 5px;
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 2px;
      padding: 3px;
    }
  }

  /* .footer_grid:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  } */

  .footer_list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 8px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 6px;
    }
    @media ${devices.smallTabs} {
      gap: 4px;
    }

    @media ${devices.smallMobiles} {
      gap: 3px;
    }
  }

  .footer_heading {
    font-size: 20px;
    color: #00000059;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }

  .footer_subheading {
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }

  .footer_centertext {
    font-size: 18px;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      font-size: 5px;
    }
  }

  span {
    font-size: 18px;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }

  .footer_copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      margin-top: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 20px;
    }
    @media ${devices.smallTabs} {
      margin-top: 15px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 10px;
    }
  }

  .footer_center {
    display: flex;
    gap: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 8px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 4px;
    }
    @media ${devices.smallTabs} {
      gap: 4px;
    }

    @media ${devices.smallMobiles} {
      gap: 2.5px;
    }
  }

  .footer_socialicons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 10px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 8px;
    }
    @media ${devices.smallTabs} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 5px;
    }
  }

  .footer_socialiconbox {
    display: flex;
    align-items: center;
    gap: 5px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 3.5px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 2px;
    }
    @media ${devices.smallTabs} {
      gap: 2px;
    }

    @media ${devices.smallMobiles} {
      gap: 2px;
    }
  }

  .social_icon {
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      height: 22px;
      width: 22px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 18px;
      width: 18px;
    }
    @media ${devices.smallTabs} {
      height: 14px;
      width: 14px;
    }

    @media ${devices.smallMobiles} {
      height: 10px;
      width: 10px;
    }
  }
`;

/**
 *
 */
