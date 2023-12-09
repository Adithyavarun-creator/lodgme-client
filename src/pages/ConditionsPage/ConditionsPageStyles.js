import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ConditionPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 80px;
  text-align: justify;

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 60px;
    gap: 30px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 40px;
    gap: 20px;
  }
  @media ${devices.smallTabs} {
    padding: 25px;
    gap: 15px;
  }

  @media ${devices.smallMobiles} {
    padding: 30px;
    gap: 8px;
    text-align: none;
  }

  .condition-gaps {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 17px;
    }
    @media ${devices.smallTabs} {
      gap: 12px;
    }

    @media ${devices.smallMobiles} {
      gap: 8px;
    }
  }

  .conditionheading {
    text-align: center;
    font-size: 28px;
    text-decoration: underline;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 28px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }
    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  span {
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }
    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  li {
    font-size: 18px;
    list-style: disc;
    margin-left: 50px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
      margin-left: 50px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
      margin-left: 50px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
      margin-left: 40px;
    }
    @media ${devices.smallMobiles} {
      font-size: 9px;
      margin-left: 25px;
    }
  }

  .condition-listheading {
    font-size: 18px;
    font-weight: bolder;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }
    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }
`;
