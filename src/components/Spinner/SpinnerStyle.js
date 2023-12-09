import styled from "styled-components";
import { devices } from "../../theme/breakpoints";

export const SpinnerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  margin-top: 100px;

  @media ${devices.bigLaptopsAndDesktops} {
    gap: 5px;
    margin-top: 100px;
    gap: 2px;
  }

  @media ${devices.tabletsAndIpads} {
    margin-top: 70px;
    gap: 2px;
  }
  @media ${devices.smallTabs} {
    margin-top: 80px;
    gap: 2px;
  }

  @media ${devices.smallMobiles} {
    margin-top: 100px;
    gap: 2px;
  }

  .spinnerlogobox {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .spinnerlogo {
    padding: 20px;
    height: 150px;
    width: 100%;
    object-fit: contain;
    border-radius: 30px;

    @media ${devices.bigLaptopsAndDesktops} {
      padding: 10px;
      height: 100px;
    }

    @media ${devices.tabletsAndIpads} {
      padding: 10px;
      height: 80px;
    }
    @media ${devices.smallTabs} {
      padding: 10px;
      height: 60px;
    }

    @media ${devices.smallMobiles} {
      padding: 5px;
      height: 40px;
    }
  }

  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    font-size: 12px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(1, 81, 81, 0.2);
    border-right: 1.1em solid rgba(1, 81, 81, 0.2);
    border-bottom: 1.1em solid rgba(1, 81, 81, 0.2);
    border-left: 1.1em solid #015151;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 10px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 8px;
    }
    @media ${devices.smallTabs} {
      font-size: 6px;
    }

    @media ${devices.smallMobiles} {
      font-size: 4px;
    }
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
