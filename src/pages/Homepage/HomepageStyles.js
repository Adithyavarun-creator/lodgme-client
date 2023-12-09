import styled from "styled-components";
import { devices } from "../../theme/breakpoints";
import { motion } from "framer-motion";

export const HomepageStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 20px;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 40px;
  }

  @media ${devices.smallTabs} {
    gap: 10px;
  }
  @media ${devices.smallMobiles} {
    gap: 8px;
  }

  h1 {
    font-size: 24px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 24px;
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

  .homepage_header_image {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -20;
    overflow: hidden;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .homepage_header_img {
    height: 400px;
    object-fit: cover;
    opacity: 0.8;
    width: 100%;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 500px;
    }

    @media ${devices.smallTabs} {
      height: 300px;
    }

    @media ${devices.smallMobiles} {
      height: 300px;
    }
  }

  .homepage_header_text {
    font-size: 36px;
    font-weight: bolder;
    margin-top: 200px;
    color: #fff;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
      margin-top: 180px;
      font-size: 30px;
      text-align: center;
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 100px;
      font-size: 22px;
      text-align: center;
    }

    @media ${devices.smallTabs} {
      margin-top: 0px;
      font-size: 15px;
      text-align: center;
    }

    @media ${devices.smallMobiles} {
      margin-top: 0px;
      font-size: 14px;
      text-align: center;
    }
  }

  .homepage_search_container {
    display: flex;
    flex-direction: row;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    height: 125px;
    background-color: white;
    z-index: 20;
    width: 70%;
    margin: 0 auto;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 20px;
    cursor: pointer;
    box-shadow: 0px 5px 5px 0px rgba(82, 78, 78, 0.75);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(82, 78, 78, 0.75);
    -moz-box-shadow: 0px 5px 5px 0px rgba(82, 78, 78, 0.75);
    margin-top: 0;

    @media ${devices.bigLaptopsAndDesktops} {
      width: 90%;
      gap: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      width: 98%;
      /* margin-top: 420px; */
      padding: 5px;
      gap: 10px;
      /* justify-content: space-evenly; */
    }

    @media ${devices.smallTabs} {
      height: 330px;
      display: flex;
      flex-direction: column;
      gap: 7px;
      padding: 3px;
      width: 60%;
    }

    @media ${devices.smallMobiles} {
      height: 300px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      /* margin-top: 130px; */
      padding: 0;
      width: 75%;
    }
  }

  .search_box_icon {
    height: 10px;
    width: 10px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.tabletsAndIpads} {
      height: 10px;
      width: 10px;
    }

    @media ${devices.smallTabs} {
      height: 10px;
      width: 10px;
    }
  }

  .date_inputfield {
    padding: 5px;
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
    /* width: 240px; */
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    border: none;
    offset: none;
    text-align: center;
    padding: 10px;
    width: 240px;

    @media ${devices.bigLaptopsAndDesktops} {
      text-align: center;
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      text-align: center;
      font-size: 14px;
      height: 40px;
      padding: 8px;
      width: 200px;
    }

    @media ${devices.smallTabs} {
      text-align: center;
      height: 30px;
      font-size: 12px;
      width: 180px;
    }
    @media ${devices.smallMobiles} {
      text-align: center;
      height: 35px;
      font-size: 12px;
      width: 180px;
    }
  }

  .date_inputbox {
    color: ${({ theme }) => theme.colors.whiteColor};
    cursor: pointer;
    font-size: 18px;

    @media ${devices.tabletsAndIpads} {
      /* font-size: ${({ theme }) => theme.tabletAndIpadScreens.inputFont}; */
      font-size: 18px;
    }

    @media ${devices.smallTabs} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.inputFont};
    }
    @media ${devices.smallMobiles} {
      font-size: ${({ theme }) => theme.mobileScreens.inputFont};
    }
  }

  .date_range {
    position: absolute;
    top: 100px;
    left: 250px;
    right: 0;

    @media ${devices.bigLaptopsAndDesktops} {
      left: 100px;
      top: 110px;
    }

    @media ${devices.tabletsAndIpads} {
      top: 100px;
      left: 0;
      right: 0;
      z-index: 100;
      overflow-y: hidden;
    }

    @media ${devices.smallTabs} {
      top: 0;
      left: -100px;
      z-index: 100;
      overflow-y: hidden;
    }

    @media ${devices.smallMobiles} {
      top: 0;
      left: 0;
      right: 0;
      overflow-y: hidden;
      z-index: 100;
    }
  }

  .search-icon {
    color: var(--white-color);
    height: 15px;
    width: 15px;
  }

  .homepage_searchbtn {
    padding: 12px 16px;
    height: 40px;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    align-items: center;
    border: none;
    offset: none;
    text-transform: uppercase;
    display: flex;
    gap: 5px;
    justify-content: center;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 40px;
      font-size: 16px;
      font-weight: 400;

    }

    @media ${devices.tabletsAndIpads} {
      height: 40px;
      /* font-size: ${({ theme }) => theme.tabletAndIpadScreens.inputFont}; */
      font-size: 12px;
      font-weight: 400;

    }

    @media ${devices.smallTabs} {
      height: 30px;
      font-size: 9px;
      font-weight: 400;

    }

    @media ${devices.smallMobiles} {
      height: 30px;
      font-size: 12px;
      font-weight: 400;

    }
  }

  /* .search_select_width {
    height: 40px;
  } */

  .search_selectpersons {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    offset: none;
    font-size: 18px;
    padding: 3px;
    text-align: center;

    @media ${devices.tabletsAndIpads} {
      height: 40px;
      font-size: 18px;
      text-align: center;
    }

    @media ${devices.smallTabs} {
      height: 40px;
      font-size: ${({ theme }) => theme.smallTabScreens.inputFont};
    }
    @media ${devices.smallMobiles} {
      height: 40px;
      font-size: ${({ theme }) => theme.mobileScreens.inputFont};
    }
  }

  .search_labeltitle {
    font-size: ${({ theme }) => theme.bigScreens.labelFont};
    color: ${({ theme }) => theme.bigScreens.searchLabelColor};

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: ${({ theme }) => theme.bigScreens.labelFont};
    }
    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.labelFont};
    }

    @media ${devices.smallTabs} {
      font-size: ${({ theme }) => theme.smallTabScreens.labelFont};
    }

    @media ${devices.smallMobiles} {
      font-size: ${({ theme }) => theme.mobileScreens.labelFont};
    }
  }

  /* .select {
    font-size: 18px;

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  } */

  .select::placeholder {
    color: var(--white-color);
  }

  .select:focus {
    border: 1px solid black;
  }

  .search_optionpersons {
    font-size: 12px;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.whiteColor};

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.inputFont};
      text-align: center;
    }
  }

  .search_labelbox {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 5px;
    justify-content: center;
  }

  .homepage_recommendations {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 80px;

    @media ${devices.tabletsAndIpads} {
      margin-top: 5px;
      padding: 40px;
    }
  }

  .house_cardbox {
    display: grid;
    grid-template-columns: 280px 280px 280px 280px;
    column-gap: 30px;
    row-gap: 50px;
    margin-top: 40px;
    cursor: pointer;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 280px 280px 280px;
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 220px 220px 220px;
      column-gap: 20px;
      row-gap: 40px;
    }

    @media ${devices.smallTabs} {
      grid-template-columns: 320px;
      column-gap: 20px;
      row-gap: 40px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 250px;
      column-gap: 20px;
      row-gap: 40px;
    }
  }

  .house_card {
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-shadow: 0px 5px 5px 0px rgba(82, 78, 78, 0.75);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(82, 78, 78, 0.75);
    -moz-box-shadow: 0px 5px 5px 0px rgba(82, 78, 78, 0.75);
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.6s;
  }

  .house_cardtexttitle {
    text-align: center;
    font-size: ${({ theme }) => theme.bigScreens.titleFont};

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.titleFont};
    }
    @media ${devices.smallTabs} {
      font-size: ${({ theme }) => theme.smallTabScreens.titleFont};
    }
    @media ${devices.smallMobiles} {
      /* font-size: ${({ theme }) => theme.mobileScreens.titleFont}; */
      font-size: 16px;
    }
  }

  .house_cardimg {
    width: 100%;
    height: 250px;
    object-fit: fill;
    border-radius: 10px 10px 0px 0px;
    transition: all 0.6s;

    @media ${devices.tabletsAndIpads} {
      height: 200px;
    }

    @media ${devices.smallTabs} {
      height: 190px;
    }

    @media ${devices.smallMobiles} {
      height: 180px;
    }
  }

  .house_cardimg:hover {
    transform: scale(1.1);
  }

  .house_cardsubs {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;

    @media ${devices.tabletsAndIpads} {
      margin-top: 5px;
      margin-bottom: 5px;
      padding: 10px;
    }

    @media ${devices.smallTabs} {
      margin-top: 5px;
      margin-bottom: 5px;
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 2px;
      margin-bottom: 2px;
      padding: 10px;
    }
  }

  .house_cardmaintext {
    font-size: ${({ theme }) => theme.bigScreens.fontsize};
    font-weight: bold;
    text-transform: capitalize;

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.fontsize};
    }

    @media ${devices.smallTabs} {
      font-size: ${({ theme }) => theme.smallTabScreens.fontsize};
    }

    @media ${devices.smallMobiles} {
      font-size: ${({ theme }) => theme.mobileScreens.fontsize};
    }
  }

  .house_cardsubtext {
    color: gray;
    font-size: ${({ theme }) => theme.bigScreens.subFontsize};
    font-weight: bold;

    @media ${devices.tabletsAndIpads} {
      font-size: ${({ theme }) => theme.tabletAndIpadScreens.subFontsize};
    }

    @media ${devices.smallTabs} {
      font-size: ${({ theme }) => theme.smallTabScreens.subFontsize};
    }

    @media ${devices.smallMobiles} {
      font-size: ${({ theme }) => theme.mobileScreens.subFontsize};
    }
  }
`;
