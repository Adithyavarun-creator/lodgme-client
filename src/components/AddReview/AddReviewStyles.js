import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const AddReviewStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #fff;
  height: 430px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  z-index: 30;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    height: 380px;
  }
  @media ${devices.smallTabs} {
    height: 330px;
  }

  @media ${devices.smallMobiles} {
    height: 320px;
  }

  .reviewclosebox {
    display: flex;
    justify-content: end;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .reviewcloseicon {
    height: 40px;
    width: 40px;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 30px;
      width: 30px;
    }
    @media ${devices.smallTabs} {
      height: 30px;
      width: 30px;
    }

    @media ${devices.smallMobiles} {
      height: 30px;
      width: 30px;
    }
  }

  .reviewcontentheading {
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  h3 {
    font-weight: bolder;
    font-size: 17px;
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    border-radius: 10px;
    width: max-content;
    padding: 8px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .reviewinputs {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .reviewcontentbox {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 25px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 15px;
    }
    @media ${devices.smallTabs} {
      gap: 13px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
    }
  }

  .reviewlabel {
    font-size: 12px;
    color: darkgray;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 10px;
    }
    @media ${devices.smallTabs} {
      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }
  input {
    height: 40px;
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    outline: none;
    offset: none;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
      height: 35px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
      height: 30px;
    }

    :focus {
      outline: none;
    }
  }

  textarea {
    width: 100%;
    height: 100px;
    outline: none;
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }

    :focus {
      outline: none;
      offset: none;
    }
  }

  .addreviewbtn {
    display: flex;
    justify-content: space-between;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }
`;
