export const FooterStyles = styled.footer`
  /* height: 592px; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://plus.unsplash.com/premium_photo-1687960117014-f6463f5b419a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHx8MHx8fDA%3D");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: fill;
  width: 100%;
  z-index: -5;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 40px;

  @media ${devices.bigLaptopsAndDesktops} {
    width: 100%;
    gap: 30px;
    padding: 30px;
  }

  @media ${devices.tabletsAndIpads} {
    width: 100%;
    gap: 30px;
    padding: 20px;
  }
  @media ${devices.smallTabs} {
    width: 100%;
    gap: 10px;
    padding: 10px;
  }

  @media ${devices.smallMobiles} {
    width: 100%;
    gap: 10px;
  }
  /* } */

  .footer_contents {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px;

    @media ${devices.bigLaptopsAndDesktops} {
      gap: 20px;
      padding: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 10px;
      padding: 3px;
    }
    @media ${devices.smallTabs} {
      gap: 5px;
      padding: 3px;
    }

    @media ${devices.smallMobiles} {
      gap: 5px;
      padding: 3px;
    }
  }

  .footer_icons {
    height: 50px;
    width: 50px;
    color: ${({ theme }) => theme.colors.primaryColor};
    @media ${devices.bigLaptopsAndDesktops} {
      height: 50px;
      width: 50px;
    }

    @media ${devices.tabletsAndIpads} {
      height: 35px;
      width: 35px;
    }
    @media ${devices.smallTabs} {
      height: 20px;
      width: 20px;
    }

    @media ${devices.smallMobiles} {
      height: 10px;
      width: 10px;
    }
  }

  .footer_grids {
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    z-index: 15;
    padding: 40px;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ theme }) => theme.colors.whiteColor};
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      grid-template-columns: 300px 300px 300px 300px;
      padding: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      grid-template-columns: 150px 150px 150px 150px;
      padding: 20px;
    }
    @media ${devices.smallTabs} {
      grid-template-columns: 100px 100px 100px 100px;
      padding: 20px;
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      grid-template-columns: 50px 50px 50px 50px;
      padding: 10px;
    }
  }

  .footer_grid1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);
    font-size: 30px;
    cursor: pointer;
    list-style: none;
    justify-content: center;
    align-content: center;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
      gap: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
      gap: 20px;
    }
    @media ${devices.smallTabs} {
      font-size: 12px;
      gap: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
      gap: 8px;
    }
  }
  /* .footer_grid2 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);
    font-size: 30px;
    cursor: pointer;

    list-style: none;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
      gap: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
      gap: 25px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
      gap: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }
  .footer_grid3 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);
    font-size: 30px;
    list-style: none;

    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  }
  .footer_grid4 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);
    font-size: 30px;
    cursor: pointer;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 12px;
    }
  } */
  /* .footer-grid4-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--white-color);

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  } */

  .flex-gap10 {
    display: flex;
    gap: 20px;
    align-items: center;

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
      gap: 3px;
    }
  }

  .footer_width {
    width: 100%;

    border: 0.8px solid ${({ theme }) => theme.colors.whiteColor};

    @media ${devices.bigLaptopsAndDesktops} {
    }

    @media ${devices.tabletsAndIpads} {
    }
    @media ${devices.smallTabs} {
    }

    @media ${devices.smallMobiles} {
    }
  }

  .footer_copyright {
    font-size: 30px;
    font-weight: 400;
    line-height: 19px;
    color: #ffffff;
    margin: 40px;

    @media ${devices.bigLaptopsAndDesktops} {
      font-size: 20px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }
    @media ${devices.smallTabs} {
      font-size: 15px;
    }

    @media ${devices.smallMobiles} {
      font-size: 8px;
    }
  }
`;
