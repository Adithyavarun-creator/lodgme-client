import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const EditListingStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    gap: 30px;
  }
  @media ${devices.smallTabs} {
    margin-top: 30px;
    gap: 20px;
  }

  @media ${devices.smallMobiles} {
    margin-top: 30px;
    gap: 5px;
  }

  .formbox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    position: relative;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .forminputs {
    display: flex;
    flex-direction: column;
    gap: 1.4px;
    width: 450px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      width: 350px;
    }

    @media ${devices.smallMobiles} {
      width: 250px;
    }
  }
  label {
    color: red;
    font-size: 16px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  input {
    height: 40px;
    width: 450px;
    padding: 10px;
    border-radius: 5px;
    offset: none;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    outline: none;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      width: 350px;
    }

    @media ${devices.smallMobiles} {
      width: 250px;
    }

    :focus {
      border: none;
      offset: none;
    }

    :invalid {
      color: red;
    }
  }

  textarea {
    height: 200px;
    width: 400px;
    padding: 10px;
    border-radius: 5px;
    offset: none;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    :focus {
      border: none;
      offset: none;
    }

    ::placeholder {
      @media ${devices.bigLaptopsAndDesktops} {
      }

      @media ${devices.tabletsAndIpads} {
      }
      @media ${devices.smallTabs} {
      }

      @media ${devices.smallMobiles} {
        font-size: 8px;
      }
    }

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      width: 350px;
    }

    @media ${devices.smallMobiles} {
      width: 250px;
    }
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-align: justify;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
    }
  }

  strong {
    font-weight: bold;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .uploadImagebox {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      flex-direction: column;
    }
    @media ${devices.smallTabs} {
      flex-direction: column;
    }

    @media ${devices.smallMobiles} {
      flex-direction: column;
    }
  }

  .uploadImage {
    display: flex;
    flex-direction: column;
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

  .imginput {
    height: 50px;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 18px;
    font-weight: bolder;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  .uploadbtn {
    border: 2px solid green;
    padding: 12px 28px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bolder;
    color: #fff;
    border: none;
    offset: none;
    font-size: 18px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px 20px;
      font-size: 10px;
    }
  }

  .imagemap {
    display: flex;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      gap: 35px;
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .imageUrls {
    width: 200px;
    height: 200px;
    object-fit: contain;
    border: 1px solid grey;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
      width: 170px;
      height: 170px;
    }

    @media ${devices.tabletsAndIpads} {
      width: 120px;
      height: 120px;
    }
    @media ${devices.smallTabs} {
      width: 120px;
      height: 120px;
    }

    @media ${devices.smallMobiles} {
      width: 80px;
      height: 80px;
    }
  }

  .imageboxurl {
    position: relative;
  }

  .progress {
    font-weight: bolder;
    font-size: 18px;

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

  .deleteimg {
    position: absolute;
    top: 0;
    right: 0;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .deleteicon {
    height: 30px;
    width: 30px;
    padding: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: white;
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

  .datepicker {
    position: absolute;
    top: 210px;
    right: 0;
    left: 0;
    overflow: hidden;
    z-index: 130;
    background-color: #fff;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      top: 350px;
      overflow-x: scroll;
    }
    @media ${devices.smallTabs} {
      top: 280px;
      overflow-x: scroll;
    }

    @media ${devices.smallMobiles} {
      top: 270px;
      overflow-x: scroll;
    }
  }
`;
