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
    top: 175px;

    @media ${devices.bigLaptopsAndDesktops} {
      top: 150px;
    }

    @media ${devices.tabletsAndIpads} {
      top: 115px;
    }
    @media ${devices.smallTabs} {
      top: 155px;
    }

    @media ${devices.smallMobiles} {
      top: 130px;
    }
  }

  .slick-dots li.slick-active button:before {
    color: #fff !important;
  }

  .toprated_house_cardimg {
    height: 170px;
    width: 100%;
    object-fit: fill;
    border-radius: 10px;
    transition: all 0.6s ease;
    overflow: hidden;

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

  .toprated_house_cardimg:hover {
    transform: scale(1.2);
  }

  .toprated_priceboxi {
    font-size: 13px;
    padding: 10px 14px;
    background-color: #015151;
    color: #fff;
    border-radius: 15px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 13px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 8px 10px;
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
      padding: 5px 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
      padding: 8px 10px;
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
    height: 15px;
    width: 15px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 12px;
      width: 12px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_favoriteuser {
    position: absolute;
    top: -3px;
    right: 0;
    height: 44px;
    border-radius: 40%;
    align-items: center;
    display: flex;
    z-index: 100;

    @media ${devices.bigLaptopsAndDesktops} {
      top: -3px;
    }

    @media ${devices.tabletsAndIpads} {
      top: -3px;
    }
    @media ${devices.smallTabs} {
      top: -3px;
    }

    @media ${devices.smallMobiles} {
      top: -3px;
    }
  }

  .toprated_user {
    height: 35px;
    width: 100%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 10px;
    /* border: 0.8px solid ${({ theme }) => theme.colors.primaryColor}; */

    @media ${devices.bigLaptopsAndDesktops} {
      width: 100%;
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_locationcountrybox {
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

  .toprated_locationbox {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    /* display: flex;
    align-items: center;
    gap: 7px;
    font-size: ${({ theme }) => theme.tabletAndIpadScreens.cardlocation};
    font-weight: 400;
    line-height: 19px; */

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
    padding: 2px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      padding: 2px;
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

  .ratingflex {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 5px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .toprated_staricon {
    /* color: ${({ theme }) => theme.colors.primaryColor}; */
    height: 12px;
    width: 12px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 10px;
      width: 10px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      height: 12px;
      width: 12px;
    }
  }

  .toprated_ratingcount {
    font-size: 13px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 10px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  .toprated_house_cardmaintext {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 700;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 13px;
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

  .toprated_countryname {
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
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
