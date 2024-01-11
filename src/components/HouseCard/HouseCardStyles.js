import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const HouseCardStyles = styled.div`
  /* margin-top: 250px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
  }

  @media ${devices.smallTabs} {
    margin-top: 30px;
  }

  @media ${devices.smallMobiles} {
  }

  .toprated_house_cardbox {
    display: grid;
    grid-template-columns: 260px 260px 260px 260px;
    justify-content: center;
    column-gap: 30px;
    row-gap: 50px;
    margin-top: 40px;
    margin-bottom: 40px;

    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 240px 240px 240px;
      row-gap: 40px;
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 220px 220px 220px;
      column-gap: 20px;
      row-gap: 40px;
    }

    @media ${devices.smallTabs} {
      grid-template-columns: 270px;
      column-gap: 20px;
      row-gap: 40px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 250px;
      column-gap: 20px;
      row-gap: 40px;
    }
  }

  .toprated_house_card {
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: all 0.6s;
    /* border: 2px solid red; */

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .slick-dots {
    top: 145px;

    @media ${devices.bigLaptopsAndDesktops} {
      top: 175px;
    }

    @media ${devices.tabletsAndIpads} {
      top: 135px;
    }
    @media ${devices.smallTabs} {
      top: 155px;
    }

    @media ${devices.smallMobiles} {
      top: 145px;
    }
  }

  .slick-dots li.slick-active button:before {
    color: #fff !important;
  }

  .toprated_house_card:hover {
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
  }

  .toprated_house_cardimg {
    height: 170px;
    width: 100%;
    object-fit: fill;
    border-radius: 10px;
    transition: all 0.6s;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 200px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 160px;
    }

    @media ${devices.smallTabs} {
      height: 180px;
    }
    @media ${devices.smallMobiles} {
      height: 180px;
    }
  }

  .toprated_priceboxi {
    font-size: 18px;
    padding: 10px;
    background-color: #015151;
    color: #fff;
    border-radius: 15px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
      padding: 4px 10px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
      padding: 4px 8px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
      padding: 4px 8px;
    }
  }

  .toprated_favorite {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    height: 44px;
    border-radius: 8px;
    align-items: center;
    display: flex;
    color: #e31b23;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_favoriteicon {
    height: 25px;
    width: 25px;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 25px;
      width: 25px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 20px;
      width: 20px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_locationicon {
    height: 25px;
    width: 25px;
    color: #ea4335;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_favoriteuser {
    position: absolute;
    top: 5px;
    right: 0;
    height: 44px;
    border-radius: 40%;
    align-items: center;
    display: flex;

    @media ${devices.bigLaptopsAndDesktops} {
      top: 5px;
    }

    @media ${devices.tabletsAndIpads} {
      top: 0;
    }
    @media ${devices.smallTabs} {
      top: 5px;
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_user {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.colors.primaryColor};

    /* border: 3px solid #015151; */

    @media ${devices.bigLaptopsAndDesktops} {
      height: 50px;
      width: 50px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 40px;
      width: 40px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_locationbox {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: ${({ theme }) => theme.tabletAndIpadScreens.cardlocation};
    font-weight: 400;
    line-height: 19px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
      gap: 6px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
      gap: 6px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
      gap: 6px;
    }
  }

  /* #e31b23 */

  .toprated_house_cardsubs {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      padding: 6px;
      gap: 5px;
    }

    @media ${devices.smallTabs} {
      padding: 4px;
      gap: 3px;
    }

    @media ${devices.smallMobiles} {
      padding: 2.5px;
      gap: 3px;
    }
  }

  .housetitlebox {
    display: flex;
    flex-direction: row;
    align-items: center;
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

  .toprated_house_cardmaintext {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  .toprated_house_cardsubtext {
    color: gray;
    font-size: 22px;
    font-weight: bold;

    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_staricon {
    color: ${({ theme }) => theme.colors.ratingColor};
    height: 20px;
    width: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_ratingcount {
    font-size: 20px;
    font-weight: bolder;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  .toprated_reviewbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.cardrating};
    }
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_button {
    padding: 11px 14px 11px 14px;
    border-radius: 8px;
    border: 2px;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size: ${({ theme }) => theme.bigScreens.btnFontsize};
    margin-top: 50px;
    margin-bottom: 50px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.btnFontsize};
      padding: 14px 16px;
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      font-size: ${({ theme }) => theme.mobileScreens.cardprice};
    }
  }

  .notfoundhouse {
    text-align: center;
    font-size: 22px;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }
`;
