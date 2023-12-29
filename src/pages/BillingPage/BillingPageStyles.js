import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const BillingPageStyles = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @media ${devices.bigLaptopsAndDesktops} {
  }

  @media ${devices.tabletsAndIpads} {
    grid-template-columns: 1.5fr 1fr;
    gap: 40px;
  }
  @media ${devices.smallTabs} {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px;
  }

  @media ${devices.smallMobiles} {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 15px;
  }

  .billing-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -7px 11px 62px -22px rgba(0, 0, 0, 0.75);
    padding: 20px;
    align-items: center;
    border-radius: 10px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      padding: 15px;
    }

    @media ${devices.smallMobiles} {
      padding: 10px;
    }
  }

  .billing-boxheading {
    text-align: center;
    font-size: 22px;
    text-decoration: underline;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 18px;
    }
    @media ${devices.smallTabs} {
      font-size: 16px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

  .billing-boxtitle {
    text-align: center;
    font-size: 20px;
    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 16px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      font-size: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: row;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 40px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 30px;
      margin-top: 15px;
    }
    @media ${devices.smallTabs} {
      gap: 20px;
      margin-top: 0;
    }

    @media ${devices.smallMobiles} {
      margin-top: 10px;
      gap: 13px;
    }
  }

  .billingform {
    display: flex;
    flex-direction: column;
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

  label {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primaryColor};
    padding: 3px;
    width: max-content;
    position: absolute;
    top: -20px;
    left: 5px;
    font-size: 14px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 12px;
      top: -13px;
      left: 5px;
    }
    @media ${devices.smallTabs} {
      font-size: 10px;
      top: -10px;
      left: 5px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
      top: -8px;
      left: 5px;
    }
  }

  input {
    height: 45px;
    width: 450px;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px;
    offset: none;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    @media ${devices.bigLaptopsAndDesktops} {
      width: 400px;
      height: 40px;
      font-size: 16px;
    }

    @media ${devices.tabletsAndIpads} {
      width: 300px;
      height: 35px;
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      width: 170px;
      height: 35px;
      font-size: 12px;
    }

    @media ${devices.smallMobiles} {
      width: 130px;
      height: 25px;
      font-size: 10px;
    }
  }

  input:focus {
    outline: none;
    offset: none;
  }

  .billingpaymentcardbox {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
      gap: 20px;
    }

    @media ${devices.smallMobiles} {
      gap: 20px;
    }
  }
`;
