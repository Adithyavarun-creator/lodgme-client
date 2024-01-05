import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const EditProfileStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  justify-content: center;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    gap: 30px;
    padding: 30px;
  }
  @media ${devices.smallTabs} {
    gap: 20px;
    padding: 20px;
  }

  @media ${devices.smallMobiles} {
    gap: 15px;
    padding: 15px;
  }

  h1 {
    text-align: center;
    font-weight: bolder;
    font-size: 26px;
    text-decoration: underline;
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
      font-size: 12px;
    }
  }

  .accountdatebox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  h3 {
    font-size: 22px;
    padding: 6px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    width: max-content;
    color: #fff;
    border-radius: 10px;

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

  .formbox {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 50px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .formboxcontent {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 5px;
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

  .formlabel {
    position: absolute;
    top: -15px;
    left: 15px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      top: -10px;
      left: 15px;
    }

    @media ${devices.smallMobiles} {
      top: -10px;
      left: 15px;
    }
  }

  label {
    font-size: 20px;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.primaryColor};
    background-color: #fff;
    padding: 2px;
    border-radius: 5px;
    background-color: #fff;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  input,
  select {
    width: 100%;
    height: 45px;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    border-radius: 10px;
    font-size: 19px;
    padding: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
      height: 40px;
    }
    @media ${devices.smallTabs} {
      font-size: 14px;
      height: 35px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
      height: 30px;
    }
  }

  input[type="file"] {
    display: none;
  }

  .custom-file-upload {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    display: inline-block;
    padding: 6px;
    cursor: pointer;
    color: #fff;
    font-weight: bolder;
    font-weight: 18px;
    width: max-content;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-weight: 16px;
    }
    @media ${devices.smallTabs} {
      font-weight: 14px;
    }

    @media ${devices.smallMobiles} {
      font-weight: 10px;
    }
  }

  .proflierow {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      gap: 15px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
    }
  }

  .formprofileimg {
    object-fit: fill;
    border-radius: 50%;
    height: 100px;
    margin-top: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      margin-top: 30px;
    }
    @media ${devices.smallTabs} {
      height: 60px;
    }

    @media ${devices.smallMobiles} {
      height: 60px;
    }
  }
`;
