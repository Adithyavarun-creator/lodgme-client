import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const SearchBoxStyles = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  height: fit-content;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
  }
  @media ${devices.smallTabs} {
  }

  @media ${devices.smallMobiles} {
  }

  .searchcontentbox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .daterangeposition {
    position: absolute;
    top: -20px;
    left: 280px;
    z-index: 30;
    -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    background-color: #fff;
  }

  .closedateicon {
    height: 30px;
    width: 30px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    cursor: pointer;
    border-radius: 8px;
  }

  .labelcenter {
    text-align: center !important;
  }

  .datewidth {
    width: 100% !important;
  }

  label {
    font-size: 15px;
    font-weight: bolder;
    color: #fff;
    text-align: center !important;

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

  span {
    /* color: #fff; */
    font-size: 14px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .bedbathinputbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    position: relative;
  }

  .searchdatebox {
    position: absolute;
    left: 350px;
    z-index: 20;
  }

  .datepicker {
    color: black;
  }

  .bedbathlabel {
    text-align: center;
  }

  .bedbathinput {
    height: 40px;
    width: 100%;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    offset: none;
    border: 1px solid #fff;
    cursor: pointer;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 30px;
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 30px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      height: 20px;
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      height: 20px;
      font-size: 8px;
    }
  }

  .bedbathinput:focus {
    outline: none;
  }

  .bedbathinput::placeholder {
    font-size: 15px;
    text-align: center;

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

  .bedbathselect {
    height: 40px;
    width: 100%;
    font-size: 14px;
    offset: none;
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
  }
  option {
    font-size: 14px;
    font-weight: bold;
  }

  input {
    height: 40px;
    width: 100%;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    offset: none;
    border: 1px solid #fff;
    cursor: pointer;
    text-align: center;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 30px;
      font-size: 14px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 30px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      height: 20px;
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      height: 20px;
      font-size: 8px;
    }
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-size: 15px;
    text-align: center;

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

  .inputcheckbox {
    height: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      height: 15px;
    }

    @media ${devices.smallMobiles} {
      height: 10px;
    }
  }

  .searchlocationbox {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .inputcheckboxsection {
    display: flex;
    flex-direction: row;
    gap: 5px;
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

  .searchinputcheckbox {
    display: flex;
    flex-direction: column;
  }

  .searchinputcheck {
    display: flex;
    flex-direction: row;
    gap: 3px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .searchfilterbtnbox {
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

  .searchfilterbtn {
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bolder;
    outline: none;
    offset: none;
    cursor: pointer;
    border: 1px solid #fff;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 10px 20px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 8px 16px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      padding: 8px 12px;
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 6px 10px;
      font-size: 8px;
    }
  }

  .inputcheckboxsection {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .input-checkbox-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }

  input[type="checkbox"] {
    accent-color: ${({ theme }) => theme.colors.primaryColor};
    width: 20px;
    height: 20px;
  }

  .span {
    color: #fff;
    font-size: 18px;
    font-weight: bolder;
  }

  select {
    font-size: 16px;
    border: none;
    offset: none;
    text-align: center;
    border-radius: 10px;
    height: 30px;
    padding: 4px;
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }

  option {
    font-size: 16px;
  }
`;
