export const size = {
  //big desktops
  LaptopsDesktopMin: "1025px",
  LaptopsDesktopMax: "1280px",
  //tablets and ipads
  TabletIpadsMin: "768px",
  TabletIpadsMax: "1024px",
  //small tabs
  TabletsMobilesMin: "481px",
  TabletsMobilesMax: "767px",
  //mobile devices
  SmallMobileMin: "280px",
  SmallMobileMax: "480px",
};

export const devices = {
  bigLaptopsAndDesktops: `(min-width: ${size.LaptopsDesktopMin}) and (max-width: ${size.LaptopsDesktopMax})`,
  tabletsAndIpads: `(min-width: ${size.TabletIpadsMin}) and (max-width: ${size.TabletIpadsMax})`,
  smallTabs: `(min-width: ${size.TabletsMobilesMin}) and (max-width: ${size.TabletsMobilesMax})`,
  smallMobiles: `(min-width: ${size.SmallMobileMin}) and (max-width: ${size.SmallMobileMax})`,
};

/*
@media ${devices.bigLaptopsAndDesktops} {
}

@media ${devices.tabletsAndIpads} {
 
}
@media ${devices.smallTabs} {
  
}

@media ${devices.smallMobiles} {
  
}

  -webkit-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    -moz-box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);
    box-shadow: 0px 4px 16px 3px rgba(1, 81, 81, 1);

*/
