import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const BookingPreviewStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 30px;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
  }
  @media ${devices.smallTabs} {
  }

  @media ${devices.smallMobiles} {
  }

  .bookingbox-1 {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 20px;
    box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  }

  .bookingstayname {
    font-weight: bold;
    /* color: darkgray; */
    font-size: 24px;
  }

  .bookingstay {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: underline;
  }

  .bookingcheckdatescenter {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    color: #fff;
    border-radius: 15px;
  }

  .checktitle {
    font-size: 20px;
    font-weight: bolder;
    text-decoration: underline;
  }

  .checkdate {
    font-weight: bold;
  }

  .bookingcheckdates {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .bookingamenititesbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .bookingamenitieslist {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .bookingamenitiestitle {
    font-size: 18px;
    text-decoration: underline;
  }

  .doneIcon {
    height: 25px;
    width: 25px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ul {
    margin-top: 6px;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  .bookingbox-2 {
    border: 3px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 20px;
    border-radius: 20px;
    height: max-content;
    box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
  }

  .bookingpriceheading {
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
  }

  .bookingpricecontent {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 3px;
  }

  .bookingpricebox {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-size: 20px;

    /* margin-top: 30px; */
  }

  .bookingpricetotal {
    font-size: 22px;
    font-weight: bolder;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 10px;
    color: #fff;
    border-radius: 10px;
  }

  .bookingboxbtn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
  }
`;
