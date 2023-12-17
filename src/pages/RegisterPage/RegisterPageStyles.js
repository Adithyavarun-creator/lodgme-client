import { styled } from "styled-components";
import { devices } from "../../theme/breakpoints";

export const RegisterPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 40px;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 50px;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 40px;
  }
  @media ${devices.smallTabs} {
    gap: 35px;
  }

  @media ${devices.smallMobiles} {
    gap: 25px;
  }

  h1 {
    text-align: center;
    font-size: 24px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 24px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 18px;
    }

    @media ${devices.smallMobiles} {
      font-size: 16px;
    }
  }

  .formbox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 15px;
    }
    @media ${devices.smallTabs} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 6px;
    }
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    @media ${devices.bigLaptopsAndDesktops} {
      gap: 40px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 40px;
    }
    @media ${devices.smallTabs} {
      gap: 28px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }

  .formlabel {
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

  .labeltext {
    position: absolute;
    top: -18px;
    left: 5px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryColor};
    background-color: white;
    padding: 2px;

    @media ${devices.bigLaptopsAndDesktops} {
      top: -18px;
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      top: -18px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      top: -10px;
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      top: -10px;
      font-size: 10px;
    }
  }

  input {
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    height: 50px;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px;
    outline: none;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 15px;
      height: 40px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
      height: 37px;
    }
    @media ${devices.smallTabs} {
      font-size: 13px;
      height: 37px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
      height: 30px;
    }

    :focus {
      border: 1px solid #015151 !important;
    }
  }

  .emailverifybox {
    display: flex;
    justify-content: center;
  }

  .emailverifytext {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: #fff;
    font-size: 18px;
    font-weight: bolder;
    padding: 10px;
    border-radius: 10px;
  }

  select {
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    height: 50px;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px;
    outline: none;
    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 15px;
      height: 40px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
      height: 37px;
    }
    @media ${devices.smallTabs} {
      font-size: 13px;
      height: 37px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
      height: 30px;
    }

    :focus {
      border: 1px solid #015151 !important;
    }
  }

  option {
  }

  .btnbox {
    margin-top: 40px;
    display: flex;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
      margin-top: 20px;
    }
  }

  .register-btn {
    padding: 12px 30px;
    font-size: 19px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: white;
    border-radius: 20px;
    border: none;
    offset: none;
    cursor: pointer;
    text-align: center;
    height: 50px;
    font-weight: bolder;
    /* align-items: center; */

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 12px 30px;
      font-size: 19px;
      height: 50px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 12px 20px;
      font-size: 17px;
      height: 45px;
    }
    @media ${devices.smallTabs} {
      padding: 8px 20px;
      font-size: 12px;
      height: 35px;
    }

    @media ${devices.smallMobiles} {
      padding: 8px 20px;
      font-size: 10px;
      height: 35px;
    }
  }
`;
