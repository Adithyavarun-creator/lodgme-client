import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 16px 18px;
  border-radius: 10px;
  border: 1px solid #fff;
  offset: none;
  color: #fff;
  background: ${({ theme }) => theme.colors.primaryColor};
  font-size: 18px;
  text-transform: capitalize;
  font-weight: bolder;

  @media ${devices.bigLaptopsAndDesktops} {
    padding: 12px 10px;
    font-size: 16px;
  }

  @media ${devices.tabletsAndIpads} {
    padding: 8px 8px;
    font-size: 12px;
  }
  @media ${devices.smallTabs} {
    padding: 6px;
    font-size: 10px;
  }

  @media ${devices.smallMobiles} {
    padding: 4px 6px;
    font-size: 6px;
  }
`;
