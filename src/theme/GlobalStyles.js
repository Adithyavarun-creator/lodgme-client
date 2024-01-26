import { createGlobalStyle } from "styled-components";
import { devices } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;}

body {
  /* font-family: "Altone Trial", sans-serif; */
  scroll-behavior:smooth;
}

.leaflet-container {
    width: 100%;
    height: 100vh;
  }


::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-button {
  background: #fff;
}
::-webkit-scrollbar-track-piece {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background:  ${({ theme }) => theme.colors.primaryColor};

}

.flex {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  cursor: pointer;
}

.mt-10 {
  margin-top: 10px;
}

.mt-100{
  margin-top: 100px;
  @media ${devices.tabletsAndIpads}{
    margin-top: 50px;
  }

  @media ${devices.smallTabs}{
    margin-top: 20px;
  }

  @media ${devices.smallMobiles}{
    margin-top: 20px;
  }
}

.linkStyle{
  text-decoration: none;
  color: #333333;
  cursor: pointer;
}

.flex-center{
  display: flex;
  justify-content: center;
}

.checkbox {
    accent-color: ${({ theme }) => theme.colors.primaryColor};
    width: 15px;
    height: 15px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
      width: 13px;
      height: 13px;
    }

    @media ${devices.smallTabs} {
      width: 10px;
      height: 10px;
    }

    @media ${devices.smallMobiles} {
      width: 10px;
      height: 10px;
    }
  }


.select {
    font-size: 18px;

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }

    @media ${devices.smallTabs} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }

.register_btn {
    width: 672px;
    height: 60px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.whiteColor};
    offset: none;
    outline: none;
    cursor: pointer;
    font-size: 26px;
    border: none;



    @media ${devices.bigLaptopsAndDesktops} {
      width: 600px;

}

@media ${devices.tabletsAndIpads} {
  width: 500px;

 
}
@media ${devices.smallTabs} {
  width: 350px;
  font-size: 20px;
  height: 40px;



  
}

@media ${devices.smallMobiles} {
  width: 180px;
  font-size: 12px;
  height: 40px;
  
}
  }


  .register_loginbtn {
    width: 672px;
    height: 60px;
    text-align: center;
    background-color: transparent;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.blackColor};
    offset: none;
    outline: none;
    cursor: pointer;
    font-size: 26px;


    @media ${devices.bigLaptopsAndDesktops} {
      width: 600px;
      font-size: 24px;


}

@media ${devices.tabletsAndIpads} {
  width: 500px;
  font-size: 24px;


 
}
@media ${devices.smallTabs} {
  width: 350px;
  font-size: 20px;
  height: 40px;

  
}

@media ${devices.smallMobiles} {
  width: 180px;
  font-size: 12px;
  height: 40px;
  
}
}


@keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.primaryColor};
    }
    100% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
  }


  input:focus {
    outline: none;
  }
`;
