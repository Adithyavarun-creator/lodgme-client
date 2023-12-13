import { styled } from "styled-components";
import { devices } from "../../theme/breakpoints";

export const SinginPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  align-items: center;

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
      font-size: 18px;
    }
    @media ${devices.smallTabs} {
      font-size: 16px;
    }

    @media ${devices.smallMobiles} {
      font-size: 13px;
    }
  }

  .formbox {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 15px;
    }
    @media ${devices.smallTabs} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 15px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 50px;
    /* align-items: center; */

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
    width: 300px;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    height: 50px;
    border-radius: 10px;
    font-size: 17px;
    padding: 10px;
    outline: none;
    @media ${devices.bigLaptopsAndDesktops} {
      width: 300px;
      font-size: 15px;
      height: 50px;
    }

    @media ${devices.tabletsAndIpads} {
      width: 280px;
      font-size: 14px;
      height: 37px;
    }
    @media ${devices.smallTabs} {
      width: 250px;
      font-size: 13px;
      height: 37px;
    }

    @media ${devices.smallMobiles} {
      font-size: 9px;
      width: 200px;
      height: 30px;
    }

    :focus {
      border: 1px solid #015151 !important;
    }
  }

  .loginformbox {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 20px;
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .btnsociallinks {
    display: flex;
    flex-direction: row;
    gap: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 30px;
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

  .socialsignin {
    font-size: 16px;
    font-weight: bold;

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

  .socialiconimg {
    height: 30px;
    width: 100%;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      height: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 30px;

    }
    @media ${devices.smallTabs} {
      height: 20px;

    }

    @media ${devices.smallMobiles} {
      height: 20px;

    }
  }

  .hrline {
    width: 100%;
    border: 1px solid lightgray;

    @media ${devices.bigLaptopsAndDesktops} {
      width: 100%;
      border: 1px solid lightgray;
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .btnbox {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
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
      padding: 10px 30px;
      font-size: 19px;
      height: 40px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 10px 20px;
      font-size: 15px;
      height: 40px;
    }
    @media ${devices.smallTabs} {
      padding: 8px 20px;
      font-size: 14px;
      height: 35px;
    }

    @media ${devices.smallMobiles} {
      padding: 8px 20px;
      font-size: 12px;
      height: 30px;
    }
  }

  .forgot-pswd {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;

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
`;
