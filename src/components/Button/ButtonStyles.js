import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 16px 22px;
  border-radius: 10px;
  border: 1px solid #fff;
  offset: none;
  color: #fff;
  background: ${({ theme }) => theme.colors.primaryColor};
  font-size: 18px;
  text-transform: capitalize;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 12px 20px;
    font-size: 16px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 10px 18px;
    font-size: 12px;
  }
  @media ${devices.smallTabs} {
    padding: 8px 14px;
    font-size: 10px;
  }

  @media ${devices.smallMobiles} {
    padding: 8px;
    font-size: 10px;
  }
`;
