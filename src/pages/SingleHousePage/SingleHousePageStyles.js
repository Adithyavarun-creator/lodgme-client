import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const SingleHousePageStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 50px;
  padding-bottom: 0;
  /* position: relative; */

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 40px;
  }

  @media ${devices.tabletsAndIpads} {
    padding-left: 80px;
    padding-right: 80px;
    gap: 30px;
  }
  @media ${devices.smallTabs} {
    padding-left: 30px;
    padding-right: 30px;
    gap: 20px;
  }

  @media ${devices.smallMobiles} {
    padding-left: 15px;
    padding-right: 15px;
    gap: 10px;
  }

  .singlepagetitlebox {
    display: flex;
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

  .singlepagetitlecontent {
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      gap: 3px;
    }

    @media ${devices.smallMobiles} {
    }
  }
  .rating {
    color: ${({ theme }) => theme.colors.ratingColor};
    height: 20px;
    width: 20px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 20px;
      width: 20px;
    }
    @media ${devices.smallTabs} {
      height: 12px;
      width: 12px;
    }

    @media ${devices.smallMobiles} {
      height: 8px;
      width: 8px;
    }
  }
  .ratingnumber {
    font-size: 18px;
    color: darkgrey;
    font-weight: bold;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }

  .singlepageposition {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    position: relative;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 5px;
    }
    @media ${devices.smallTabs} {
      gap: 4px;
    }

    @media ${devices.smallMobiles} {
      gap: 4px;
    }
  }

  .item-1 {
    border-radius: 5px;
    transition: all 0.6s ease-in;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .item-1:hover {
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
  }

  .imgsubgrid1 {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    height: 100%;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .item-2 {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    cursor: pointer;
    gap: 8px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 8px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 6px;
    }
    @media ${devices.smallTabs} {
      gap: 2px;
    }

    @media ${devices.smallMobiles} {
      gap: 2px;
    }
  }

  .imgsubgrid2 {
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
    transition: all 0.5s ease-in;
    width: 100%;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .imgsubgrid2:hover {
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
  }

  .singlepageshowallimages {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagecarouselbox {
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
    z-index: 200;
    overflow-y: scroll;
    padding: 10px;
    border-radius: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .imgsubgrid {
    width: 100%;
    object-fit: fill;
    border-radius: 10px;
    transition: all 0.5s ease-in;

    @media ${devices.bigLaptopsAndDesktops} {
      /* height: 1000px; */
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .imgsubgrid:hover {
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
  }

  .flex-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: 300px 300px; */
    gap: 10px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 0.5fr 0.5fr;
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 0.5fr 0.5fr;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 0.5fr 0.5fr;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 0.5fr 0.5fr;
    }
  }

  .singlehouseimagecalendarbox {
    display: flex;
  }

  .singlepagebookbox {
    display: flex;
    gap: 30px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 20px;
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 5px;
    }
  }
  .share-icon {
    height: 35px;
    width: 35px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      height: 30px;
      width: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 20px;
      width: 20px;
    }
    @media ${devices.smallTabs} {
      height: 15px;
      width: 15px;
    }

    @media ${devices.smallMobiles} {
      height: 10px;
      width: 10px;
    }
  }

  .singlepagetitletext {
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }
    @media ${devices.smallTabs} {
      /* font-size: 12px; */
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .sharetext {
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
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

  .main-image {
    width: 100%;
    height: 800px;
    object-fit: fill;
    border-radius: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 500px;
    }
    @media ${devices.tabletsAndIpads} {
      height: 350px;
    }

    @media ${devices.smallTabs} {
      height: 250px;
    }

    @media ${devices.smallMobiles} {
    }
  }

  /* .fullviewbutton {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 150;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  } */

  /* .fullviewbtn {
    padding: 16px 20px;
    background-color: red;
    color: white;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  } */

  .singlepagelocations {
    display: flex;
    flex-direction: row;
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

  .singlepagelocation {
    display: flex;
    flex-direction: column;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagelocationicons {
    height: 30px;
    width: 30px;
    @media ${devices.bigLaptopsAndDesktops} {
      height: 30px;
      width: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 20px;
      width: 20px;
    }
    @media ${devices.smallTabs} {
      height: 20px;
      width: 20px;
    }

    @media ${devices.smallMobiles} {
      height: 15px;
      width: 15px;
    }
  }

  .singlepagelocationbox {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 4px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 3px;
    }
    @media ${devices.smallTabs} {
      gap: 3px;
    }

    @media ${devices.smallMobiles} {
      gap: 3px;
    }
  }

  .singlepagelocation {
    display: flex;
    flex-direction: column;
    gap: 7px;
    border: 0.5px solid grey;
    padding: 14px 16px;
    border-radius: 20px;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease-in;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 5px;
      padding: 10px 12px;
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      gap: 5px;
      padding: 6px 8px;
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagelocation:hover {
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff !important;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .singlepagelocationtype {
    text-decoration: underline;
    text-underline-position: under;
    font-size: 18px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }
    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .singlepagelocationtext {
    font-size: 16px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }
    @media ${devices.smallMobiles} {
      font-size: 7px;
    }
  }

  .singlepagehouserooms {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 15px;
    }
    @media ${devices.tabletsAndIpads} {
      gap: 10px;
    }
    @media ${devices.smallTabs} {
      gap: 7px;
    }
    @media ${devices.smallMobiles} {
      gap: 4px;
    }
  }

  .singlepagehouseroomdetail {
    display: flex;
    align-items: center;
    border: none;
    offset: none;
    padding: 10px 14px;
    gap: 10px;
    align-items: center;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 12px 10px;
      gap: 6px;
      font-size: 12px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 10px 8px;
      gap: 6px;
      font-size: 10px;
    }
    @media ${devices.smallTabs} {
      padding: 6px 8px;
      gap: 3px;
      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      padding: 4px 6px;
      gap: 3px;
      font-size: 5px;
    }
  }

  .userimage {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    @media ${devices.bigLaptopsAndDesktops} {
      width: 35px;
      height: 35px;
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
      width: 10px;
      height: 10px;
    }
  }

  .singlepagehousepublish {
    padding: 10px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 8px;
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      padding: 4px;
    }
  }

  .singlepagehousepublishbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    /* border: 1px solid red; */

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 7px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 5px;
    }
    @media ${devices.smallTabs} {
      gap: 3px;
    }

    @media ${devices.smallMobiles} {
      gap: 3px;
    }
  }

  .singlepagehousepublishname {
    font-size: 22px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 10px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .singlepagehousepublishsubname {
    font-size: 20px;
    color: darkgray;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .singlepagearticlecontent {
    font-size: 18px;
    text-align: justify;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 10px;
    }
    @media ${devices.smallTabs} {
      font-size: 8px;
    }
    @media ${devices.smallMobiles} {
      font-size: 7px;
    }
  }

  .singlepagecalendarcontent {
    display: flex;
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

  .calendarcenter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      /* width: 70%; */
      overflow-y: scroll;
      width: 100%;
    }
    @media ${devices.smallTabs} {
      overflow-y: scroll;
      width: 100%;
    }

    @media ${devices.smallMobiles} {
      overflow-y: scroll;
      width: 100%;
    }
  }

  .amenities-box {
    border: 1px solid darkgrey;
    border-radius: 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 25px;
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      padding: 10px;
      gap: 15px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      padding: 10px;
      gap: 8px;
    }
  }

  .amenities-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: justify;
  }

  .amenities-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    justify-content: space-between;
    border-radius: 20px;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  .amenities-listheading {
    font-size: 18px;
    font-weight: bold;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 7px;
    }
  }

  .amenities-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  .amenitieslisttext {
    font-size: 18px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 9px;
    }

    @media ${devices.smallMobiles} {
      font-size: 7px;
    }
  }

  .amenities-singlebox {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 5px;
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      gap: 5px;
    }
  }

  .amenities-icon {
    height: 20px;
    width: 20px;
    color: ${({ theme }) => theme.colors.primaryColor};
    @media ${devices.bigLaptopsAndDesktops} {
      height: 18px;
      width: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 15px;
      width: 15px;
    }
    @media ${devices.smallTabs} {
      height: 15px;
      width: 15px;
    }

    @media ${devices.smallMobiles} {
      height: 10px;
      width: 10px;
    }
  }

  .reviewandbookbox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 1fr 1fr;
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      gap: 6px;
    }
  }

  .reservation-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    border-radius: 20px;
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    padding: 15px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 10px;
      padding: 15px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 7px;
      padding: 10px;
    }
    @media ${devices.smallTabs} {
      gap: 5px;
      padding: 5px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
      padding: 5px;
      box-shadow: none;
      overflow-y: hidden;
    }
  }

  .reservation-card-title {
    text-align: center;
    font-size: 16px;
    font-weight: bold;

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
      font-size: 8px;
    }
  }

  .date-calendar-box {
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

  .h-line {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    /* width: 50%; */
    width: 100%;
  }

  .reservation-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 30px;
    gap: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 20px;
      gap: 10px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 30px;
      gap: 12px;
    }
    @media ${devices.smallTabs} {
      padding: 10px;
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 4px;
      gap: 7px;
    }
  }

  .reservation-box {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    font-size: 16px;
    color: darkgray;
    font-weight: bold;

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
      justify-content: space-between;
      font-size: 7px;
    }
  }

  .reservation-details {
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

  .singlepagereviewbox {
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    gap: 20px;
    /* justify-content: center; */

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 8px;
      gap: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 6px;
      gap: 15px;
    }
    @media ${devices.smallTabs} {
      padding: 5px;
      gap: 12px;
    }

    @media ${devices.smallMobiles} {
      padding: 3px;
      gap: 8px;
    }
  }
  .singlepagereviewheading {
    text-align: center;
    font-size: 18px;
    font-weight: bold;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 18px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .reviewuserbox {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 5px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 5px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }
  .reviewwww {
    display: flex;
    flex-direction: column;
  }

  .reviewpersonsbox {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 12px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      gap: 4px;
      padding: 8px;
    }
  }

  .reviewpersondetailbox {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 8px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 3px;
    }
    @media ${devices.smallTabs} {
      gap: 3px;
    }

    @media ${devices.smallMobiles} {
      gap: 3px;
      justify-content: center;
      /* border: 2px solid red; */
    }
  }

  .reviewuserdetailbox {
    display: flex;
    flex-direction: column;
    gap: 0;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .reviewpersonimg {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    @media ${devices.bigLaptopsAndDesktops} {
      width: 30px;
      height: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      width: 30px;
      height: 30px;
    }
    @media ${devices.smallTabs} {
      width: 20px;
      height: 20px;
    }

    @media ${devices.smallMobiles} {
      width: 15px;
      height: 15px;
    }
  }

  .reviewusername {
    font-size: 16px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
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

  .reviewusercountry {
    font-size: 14px;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 8px;
    }
    @media ${devices.smallTabs} {
      font-size: 7px;
    }

    @media ${devices.smallMobiles} {
      font-size: 6px;
    }
  }

  .reviewuserstar {
    height: 20px;
    width: 20px;
    color: ${({ theme }) => theme.colors.ratingColor};

    @media ${devices.bigLaptopsAndDesktops} {
      height: 20px;
      width: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 10px;
      width: 10px;
    }
    @media ${devices.smallTabs} {
      height: 10px;
      width: 10px;
    }

    @media ${devices.smallMobiles} {
      height: 7px;
      width: 7px;
    }
  }

  .reviewuserating {
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
    font-weight: bold;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 3px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 3px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }
  .reviewuserpostdate {
    font-size: 14px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 12px;
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

  .reviewuserpostdated {
    font-size: 14px;
    color: grey;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 12px;
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

  .reviewusercomments {
    font-size: 16px;
    text-align: justify;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
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

  .reviewownerdetail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid darkgrey;
    border-bottom: 1px solid darkgrey;
    padding: 20px;
    justify-content: space-between;
    gap: 70px;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 20px;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 10px;
      gap: 10px;
      grid-template-columns: 1fr;
      justify-content: center;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 1fr;
      padding: 15px;
      gap: 5px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      padding: 10px;
      gap: 5px;
    }
  }

  .reviewownerdetailgrid-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 6px;
      padding: 6px;
    }
    @media ${devices.smallTabs} {
      gap: 8px;
      padding: 8px;
    }

    @media ${devices.smallMobiles} {
      gap: 5px;
      padding: 5px;
    }
  }

  .reviewdetailcontent {
    font-size: 16px;
    text-align: justify;

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
      font-size: 8px;
    }
  }

  .reviewownerbio {
    font-size: 16px;
    text-align: justify;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 10px;
    }
    @media ${devices.smallTabs} {
      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .reviewownerdetailuserbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    gap: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      justify-content: center;
    }
    @media ${devices.smallTabs} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
    }
  }

  .hostimage {
    border-radius: 50%;
    width: 60px;
    height: 60px;

    @media ${devices.bigLaptopsAndDesktops} {
      width: 40px;
      height: 40px;
    }

    @media ${devices.tabletsAndIpads} {
      width: 25px;
      height: 25px;
    }
    @media ${devices.smallTabs} {
      width: 20px;
      height: 20px;
    }

    @media ${devices.smallMobiles} {
      width: 30px;
      height: 30px;
    }
  }

  .hostdetails {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 7px;
    }
    @media ${devices.smallTabs} {
      gap: 5px;
    }

    @media ${devices.smallMobiles} {
      gap: 5px;
    }
  }

  .hostdetailname {
    font-size: 18px;
    font-weight: bold;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .verifiedbox {
    border: none;
    offset: none;
    color: white;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .verifybox {
    display: flex;
    align-items: center;
    padding: 6px 14px;
    gap: 5px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    font-size: 14px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 6px 8px;
      font-size: 8px;
    }
    @media ${devices.smallTabs} {
      padding: 4px 6px;

      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      padding: 2px 4px;
      font-size: 6px;
    }
  }

  .hostdetailsubname {
    font-size: 14px;
    font-weight: bold;
    color: darkgray;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 10px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .reviewownerdetailgrid-2 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    border-radius: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 20px;
      padding: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 25px;
      padding: 10px;
    }
    @media ${devices.smallTabs} {
      gap: 25px;
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 20px;
      padding: 10px;
    }
  }

  .reviewownerlist {
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    @media ${devices.tabletsAndIpads} {
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    @media ${devices.smallTabs} {
      justify-content: center;
      align-items: center;
      gap: 5px;
    }

    @media ${devices.smallMobiles} {
      justify-content: center;
      align-items: center;
      gap: 3px;
    }
  }

  .reviewowneradds {
    font-size: 16px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 14px;
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

  .singlepagemapbox {
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
