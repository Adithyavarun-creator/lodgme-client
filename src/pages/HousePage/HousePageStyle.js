import { styled } from "styled-components";
import { devices } from "../../theme/breakpoints";

export const HousePageStyle = styled.section`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${devices.smallTabs} {
    padding-left: 30px;
    padding-right: 30px;
    gap: 15px;
  }

  @media ${devices.smallMobiles} {
    padding-left: 20px;
    padding-right: 20px;
    gap: 9px;
  }

  h2 {
    font-size: 22px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }

    @media ${devices.smallTabs} {
      font-size: 16px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  .houseimagecontent {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 20px;
    }

    @media ${devices.smallTabs} {
      gap: 15px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
    }
  }

  .houseimage {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 2px;
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

  .swipeimage {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    object-fit: cover;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 320px;
    }

    @media ${devices.smallTabs} {
      height: 250px;
    }

    @media ${devices.smallMobiles} {
      height: 150px;
    }
  }

  .swiper-button-prev {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 20%;
    color: #fff;
    padding: 35px;
    clip-path: circle();
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .swiper-button-next {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 20%;
    color: #fff;
    padding: 35px;
    clip-path: circle();
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .swiper-pagination-bullet-active {
    background-color: #fff !important;
  }

  .showhouseimagebox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 8px;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      column-gap: 5px;
    }

    @media ${devices.smallTabs} {
      column-gap: 2px;
    }

    @media ${devices.smallMobiles} {
      column-gap: 2px;
    }
  }

  .housesmallimage {
    height: 130px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      height: 100px;
    }

    @media ${devices.smallTabs} {
      height: 60px;
    }

    @media ${devices.smallMobiles} {
      height: 40px;
    }
  }

  .housebookcard {
    border: 0.8px solid #d3d3d3;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    height: fit-content;

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      gap: 25px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
    }
  }

  .houseroomtypes {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      gap: 11px;
    }

    @media ${devices.smallTabs} {
      gap: 7px;
    }

    @media ${devices.smallMobiles} {
      gap: 4px;
      flex-wrap: wrap;
    }
  }

  .houseroomtype {
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-weight: bolder;
    font-size: 17px;
    background-color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      padding: 8px;
      font-size: 13px;
    }

    @media ${devices.smallTabs} {
      padding: 6px;
      font-size: 11px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px;
      font-size: 8px;
    }
  }

  .avgratingnumber {
    font-weight: bolder;
    font-size: 17px;
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

  .reviewlength {
    text-decoration: underline;
    font-size: 17px;
    cursor: pointer;
    font-weight: bold;
    @media ${devices.bigLaptopsAndDesktops} {
    }
    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
    }

    @media ${devices.smallTabs} {
      font-size: 11px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .amenityicon {
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 25px;
      width: 25px;
    }

    @media ${devices.smallTabs} {
      height: 20px;
      width: 20px;
    }

    @media ${devices.smallMobiles} {
      height: 14px;
      width: 14px;
    }
  }

  .pricecontentbox {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 8px;
    display: flex;
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

  h4 {
    font-size: 17px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
    }

    @media ${devices.smallTabs} {
      font-size: 13px;
    }

    @media ${devices.smallMobiles} {
      font-size: 11px;
    }
  }

  .pricecontent {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    padding: 15px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
      padding: 9px;
    }

    @media ${devices.smallTabs} {
      font-size: 11px;
      padding: 7px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
      padding: 5px;
    }
  }

  .cardcontent {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      padding: 8px;
    }

    @media ${devices.smallMobiles} {
      padding: 5px;
    }
  }

  .cardaddress {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 600;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 13px;
    }

    @media ${devices.smallTabs} {
      font-size: 11px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .travellersbox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .mapboximg {
    height: 320px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 235px;
    }

    @media ${devices.smallTabs} {
      height: 115px;
    }

    @media ${devices.smallMobiles} {
      height: 47px;
    }
  }

  .flex-col {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 7px;
    }
  }

  .housecontent {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: ${({ theme }) => theme.colors.primaryColor};
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 23px;
    }

    @media ${devices.smallTabs} {
      gap: 18px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
    }
  }

  .housetitlebox {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .housename {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 600;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 17px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 11px;
    }
  }

  .housereviewbox {
    display: flex;
    flex-direction: row;
    gap: 15px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      gap: 13px;
    }

    @media ${devices.smallMobiles} {
    }
  }

  .housepreviewbox {
    padding-top: 20px;
    padding-bottom: 20px;
    border: 0.6px solid ${({ theme }) => theme.colors.primaryColor};
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 20px;
    row-gap: 35px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 8px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      grid-template-columns: 1fr 3fr;
      padding-top: 15px;
      padding-bottom: 15px;
      column-gap: 15px;
      row-gap: 25px;
    }

    @media ${devices.smallMobiles} {
      padding-top: 5px;
      padding-bottom: 5px;
      column-gap: 13px;
      row-gap: 10px;
    }
  }

  .previewheading {
    display: grid;
    align-items: center;
  }

  .previewtitle {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bolder;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }

    @media ${devices.smallTabs} {
      font-size: 13px;
    }

    @media ${devices.smallMobiles} {
      font-size: 11px;
    }
  }

  .housepreviewcontent {
  }

  .boxes {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      gap: 15px;
    }

    @media ${devices.smallMobiles} {
      gap: 8px;
    }
  }

  .flexitems {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    padding: 10px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      column-gap: 15px;
      row-gap: 15px;
      padding: 7px;
    }

    @media ${devices.smallTabs} {
      column-gap: 10px;
      row-gap: 10px;
      padding: 5px;
    }

    @media ${devices.smallMobiles} {
      column-gap: 10px;
      row-gap: 6px;
      padding: 5px;
    }
  }

  .roomspecs {
    font-weight: bolder;
    font-size: 17px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
    }

    @media ${devices.smallTabs} {
      font-size: 11px;
    }

    @media ${devices.smallMobiles} {
      font-size: 7px;
    }
  }

  .previewsubtext {
    font-size: 17px;
    font-weight: 400;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
    }

    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .datebox {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 20px;
    }

    @media ${devices.smallTabs} {
      margin-top: 20px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 15px;
    }
  }

  .houserulebox {
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-weight: bolder;
    font-size: 17px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 8px;
      font-size: 15px;
    }

    @media ${devices.smallTabs} {
      padding: 5px;
      font-size: 11px;
    }

    @media ${devices.smallMobiles} {
      padding: 3.5px;
      font-size: 7px;
    }
  }

  .rdrDefinedRangesWrapper {
    display: none;
  }

  .datepickerbox {
    padding: 50px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 10px;
    border-bottom: 0.6px solid ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 30px;
    }

    @media ${devices.smallTabs} {
      overflow: scroll;
      padding: 0;
      width: 80%;
      background-color: none;
    }

    @media ${devices.smallMobiles} {
      overflow: scroll;
      padding: 0;
      width: 100%;
      background-color: none;
    }
  }

  .daterangepicker {
    border-radius: 10px;
    cursor: pointer;
  }

  .reviewboxsection {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
    border-top: 0.6px solid ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 15px;
    }

    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .ratingflex {
    display: flex;
    flex-direction: row;
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

  .userreviewbox {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border: 1px solid #d3d3d3;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      padding: 15px;

      gap: 7px;
    }

    @media ${devices.smallMobiles} {
      gap: 5px;
      padding: 11px;
    }
  }

  .previewsubtext {
    font-size: 17px;
    font-weight: 400;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 15px;
    }

    @media ${devices.smallTabs} {
      font-size: 11px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .logo {
    width: 100%;
    height: 30px;
    object-fit: contain;
    padding: 5px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      height: 20px;
    }

    @media ${devices.smallMobiles} {
      height: 18px;
    }
  }

  .reviewrating {
    font-weight: bolder;
    font-size: 16px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .reviewcontent {
    font-size: 17px;
    text-align: justify;
    font-weight: bolder;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }

    @media ${devices.smallTabs} {
      font-size: 11px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }

  .reviewdatebox {
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

  .reviewername {
    font-size: 17px;
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
      font-size: 8px;
    }
  }

  .reviewdate {
    font-size: 14px;
    font-weight: 500;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }

    @media ${devices.smallTabs} {
      font-size: 8px;
    }

    @media ${devices.smallMobiles} {
      font-size: 7px;
    }
  }

  .selectoption {
    margin-top: 10px;
    text-align: center;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;
  }
`;
