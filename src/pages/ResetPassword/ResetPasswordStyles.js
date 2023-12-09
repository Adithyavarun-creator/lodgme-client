import { styled } from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ResetPasswordStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
  @media ${devices.bigLaptopsAndDesktops} {
    gap: 40px;
    margin-top: 50px;
  }

  @media ${devices.tabletsAndIpads} {
    gap: 30px;
    margin-top: 30px;
  }
  @media ${devices.smallTabs} {
    gap: 20px;
    margin-top: 40px;
  }

  @media ${devices.smallMobiles} {
    gap: 15px;
    margin-top: 40px;
  }

  .emailInput {
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

  .resetpswd-btn {
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
