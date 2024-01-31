import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ReservationStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 25px;
  padding-left: 50px;
  padding-right: 50px;
  justify-content: center;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media ${devices.smallTabs} {
    padding-top: 15px;
    padding-left: 25px;
    padding-right: 25px;
  }

  @media ${devices.smallMobiles} {
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .reservationtitle {
    font-size: 24px;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 16px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }

  .reservationbox {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;
    color: ${({ theme }) => theme.colors.primaryColor};
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      column-gap: 10px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 1fr;
      column-gap: 15px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      column-gap: 10px;
    }
  }

  .end {
    display: flex;
    justify-content: end;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      margin-bottom: 20px;
    }

    @media ${devices.smallMobiles} {
      margin-bottom: 16px;
    }
  }

  .dateboxcolumn {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 20px;
    }
    @media ${devices.smallTabs} {
      gap: 14px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
    }
  }

  .datebox {
    /* border: 1px solid red; */
    padding: 15px;
    border-radius: 10px;
    background-color: #f0f0f0;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 6px;
    }
  }

  .datecontent {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 10px;
    }
    @media ${devices.smallTabs} {
      margin-top: 12px;

      gap: 7px;
    }

    @media ${devices.smallMobiles} {
      margin-top: 8px;

      gap: 5px;
    }
  }

  .datespace {
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

  h5 {
    font-size: 18px;
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

  .reservationediticon {
    height: 17px;
    width: 17px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 15px;
      width: 15px;
    }
    @media ${devices.smallTabs} {
      height: 12px;
      width: 12px;
    }

    @media ${devices.smallMobiles} {
      height: 10px;
      width: 10px;
    }
  }

  h4 {
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

  span {
    font-size: 16px;
    font-weight: 400;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 11px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .amountbox {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 10px;
    }
    @media ${devices.smallTabs} {
      gap: 8px;
    }

    @media ${devices.smallMobiles} {
      gap: 6px;
    }
  }

  .supportbox {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 15px;
    border-radius: 10px;
    background-color: #f0f0f0;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      gap: 6px;
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 4px;
      padding: 8px;
    }
  }

  .housecontentbox {
    background-color: #f0f0f0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 15px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 9px;
    }
    @media ${devices.smallTabs} {
      gap: 10px;
      padding: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 6px;
      padding: 8px;
    }
  }

  .houseimagebox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .houseimage {
    border-radius: 10px;
    height: 80px;
    width: 100%;
    object-fit: cover;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      height: 60px;
    }
    @media ${devices.smallTabs} {
      height: 50px;
    }

    @media ${devices.smallMobiles} {
      height: 40px;
    }
  }

  .housename {
    font-size: 16px;
    font-weight: bolder;
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

  .housetype {
    font-size: 15px;
    font-weight: 500;
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

  .traveldates {
    display: flex;
    justify-content: space-between;
    border: 1px solid #a9a9a9;
    padding: 10px;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }

    @media ${devices.smallTabs} {
      padding: 8px;
    }

    @media ${devices.smallMobiles} {
      padding: 6px;
    }
  }

  .arrival {
    text-decoration: underline;
    margin-bottom: 5px;
    text-align: center;
    font-size: 17px;
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

  .pricecardbox {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 10px;
    }
    @media ${devices.smallTabs} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 8px;
    }
  }

  .space {
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

  .total {
    border-top: 2px solid ${({ theme }) => theme.colors.primaryColor};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 6px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      padding: 4px;
    }
    @media ${devices.smallTabs} {
      padding: 4px;
    }

    @media ${devices.smallMobiles} {
      padding: 4px;
    }
  }

  .estimate {
    font-weight: 400;
    font-size: 17px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 11px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  .totalamount {
    font-weight: bolder;
    font-size: 18px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 17px;
    }
    @media ${devices.smallTabs} {
      font-size: 13px;
    }

    @media ${devices.smallMobiles} {
      font-size: 11px;
    }
  }

  .infobox {
    display: flex;
    flex-direction: column;
    gap: 6px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      gap: 4px;
    }
  }

  article {
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

  .infoboxtext {
    text-align: center;
  }
`;
