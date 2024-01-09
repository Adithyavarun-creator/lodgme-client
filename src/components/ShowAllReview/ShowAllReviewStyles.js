import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ShowAllReviewStyles = styled.div`
  position: absolute;
  top: 200px;
  background-color: #fff;
  height: 70vh;
  right: 0;
  left: 0;
  border-radius: 20px;
  display: flex;
  padding: 50px;
  box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    height: 80vh;
    padding: 30px;
  }
  @media ${devices.smallTabs} {
    height: 50vh;
    padding: 15px;
  }

  @media ${devices.smallMobiles} {
    height: 40vh;
    padding: 10px;
  }

  .allreviewcloseiconbox {
    display: flex;
    justify-content: end;
    position: absolute;
    right: 0;
    padding: 5px;
    top: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      top: 10px;
    }

    @media ${devices.smallMobiles} {
      top: 10px;
    }
  }

  .allreviewcloseicon {
    height: 40px;
    width: 40px;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 38px;
      width: 38px;
    }
    @media ${devices.smallTabs} {
      height: 30px;
      width: 30px;
    }

    @media ${devices.smallMobiles} {
      height: 25px;
      width: 25px;
    }
  }

  .allreviewbox {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      margin-top: 15px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 35px;
    }
  }

  .allreviewheading {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  h2 {
    text-align: center;
    font-size: 18px;
    text-decoration: underline;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .avgratings {
    padding: 6px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    border-radius: 10px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .length {
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .rating-box {
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 20px;
    }
    @media ${devices.smallTabs} {
      gap: 15px;
    }

    @media ${devices.smallMobiles} {
      gap: 15px;
    }
  }

  .ratingboxcontent {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 4px;
    }
    @media ${devices.smallTabs} {
      gap: 4px;
    }

    @media ${devices.smallMobiles} {
      gap: 4px;
    }
  }

  .ratingboximg {
    width: 40px;
    height: 40px;
    object-fit: fill;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    border-radius: 50%;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      width: 35px;
      height: 35px;
    }
    @media ${devices.smallTabs} {
      width: 25px;
      height: 25px;
    }

    @media ${devices.smallMobiles} {
      width: 17px;
      height: 17px;
    }
  }

  .ratinguserbox {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .postedDate {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bolder;
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
  }

  .staricon {
    height: 15px;
    width: 15px;
    color: #fff;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 12px;
      width: 12px;
    }
    @media ${devices.smallTabs} {
      height: 8.5px;
      width: 8.5px;
    }

    @media ${devices.smallMobiles} {
      height: 6.5px;
      width: 6.5px;
    }
  }

  .staricontext {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    padding: 5px;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .reviewername {
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
      font-size: 7px;
    }
  }

  article {
    font-weight: bold;
    font-size: 16px;
    text-align: justify;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 13px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 7px;
    }
  }

  .reviewlength {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryColor};
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }
`;
