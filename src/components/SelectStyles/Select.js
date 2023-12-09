export const HomepageSelectStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#ffffff",
    };
  },
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#015151" : "#fff",
    backgroundColor: state.isSelected ? "#fff" : "#015151",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#015151",
    // padding: "10px",
    border: "none",
    boxShadow: "none",
    color: "#ffffff",
    fontSize: "18px",
    height: "40px",
    textAlign: "center",

    "@media only screen and (min-width: 1200px)": {
      ...HomepageSelectStyles["@media only screen and (min-width: 1200px)"],
      fontSize: "18px",
      height: "40px",
      backgroundColor: "#015151",
      borderRadius: "10px",
      textAlign: "center",
      padding: "0px",

      // width: "300px",
    },
    "@media (min-width: 768px) and (max-width: 1024px) ": {
      ...HomepageSelectStyles[
        "@media (min-width: 768px) and (max-width: 1024px) "
      ],
      fontSize: "14px",
      height: "30px",
      backgroundColor: "#015151",
      borderRadius: "10px",
      textAlign: "center",
      // width: "150px",
      padding: "0px",
      //width: "300px",
    },
    "@media (min-width: 481px) and (max-width: 767px) ": {
      ...HomepageSelectStyles[
        "@media (min-width: 481px) and (max-width: 767px) "
      ],
      fontSize: "12px",
      backgroundColor: "#015151",
      borderRadius: "10px",
      height: "30px",
      textAlign: "center",
      padding: "0px",
      // width: "150px",
      //width: "300px",
    },
    "@media (min-width: 280px) and (max-width: 480px) ": {
      ...HomepageSelectStyles[
        "@media (min-width: 280px) and (max-width: 480px) "
      ],
      fontSize: "12px",
      backgroundColor: "#015151",
      height: "25px",
      borderRadius: "10px",
      textAlign: "center",
      width: "180px",
      padding: "0px",
    },
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
};

export const SinglepageSelectStyles = {};
