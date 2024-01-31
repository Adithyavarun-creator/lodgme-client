import { styled } from "styled-components";

export const ReservationPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* padding-top: 25px;
  padding-left: 50px;
  padding-right: 50px; */
  justify-content: center;
  background-color: red;

  .reservationtitle {
    font-size: 24px;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .reservationbox {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  .dateboxcolumn {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .datebox {
    /* border: 1px solid red; */
    padding: 15px;
    border-radius: 10px;
    background-color: #f0f0f0;
  }

  .datecontent {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .datespace {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h5 {
    font-size: 18px;
    font-weight: bolder;
  }

  .reservationediticon {
    height: 17px;
    width: 17px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
  }

  .amountbox {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .supportbox {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 15px;
    border-radius: 10px;
    background-color: #f0f0f0;
  }
`;
