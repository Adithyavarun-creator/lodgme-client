export const HomepageSelectStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#fff",
    };
  },
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: "#fff",
    color: state.isSelected ? "#015151" : "#fff",
    backgroundColor: state.isSelected ? "#fff" : "#015151",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#015151",
    border: "none",
    boxShadow: "none",
    color: "#fff",
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
      color: "#fff",

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

export const AddListingSelectStyles = {
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
    border: "1px solid #015151",
    // padding: "10px",
    border: "none",
    boxShadow: "none",
    color: "#ffffff",
    fontSize: "18px",
    height: "50px",
    textAlign: "center",

    "@media only screen and (min-width: 1200px)": {
      ...AddListingSelectStyles["@media only screen and (min-width: 1200px)"],
      fontSize: "16px",
      height: "50px",
      backgroundColor: "#015151",
      border: "1px solid #015151",
      borderRadius: "10px",
      textAlign: "center",
      padding: "0px",

      // width: "300px",
    },
    "@media (min-width: 768px) and (max-width: 1024px) ": {
      ...AddListingSelectStyles[
        "@media (min-width: 768px) and (max-width: 1024px) "
      ],
      fontSize: "14px",
      height: "30px",
      backgroundColor: "#015151",
      border: "1px solid #015151",
      borderRadius: "10px",
      textAlign: "center",
      // width: "150px",
      padding: "0px",
      //width: "300px",
    },
    "@media (min-width: 481px) and (max-width: 767px) ": {
      ...AddListingSelectStyles[
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
      ...AddListingSelectStyles[
        "@media (min-width: 280px) and (max-width: 480px) "
      ],
      fontSize: "12px",
      backgroundColor: "#015151",
      height: "45px",
      borderRadius: "10px",
      textAlign: "center",
      width: "250px",
      padding: "0px",
    },
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
};

export const SinglepageSelectStyles = {};

export const SearchPageSelectStyles = {
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#333",
    };
  },
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#015151" : "#fff",
    backgroundColor: state.isSelected ? "#fff" : "#015151",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#fff",
    // padding: "10px",
    border: "none",
    boxShadow: "none",
    color: "#fff",
    fontSize: "18px",
    height: "30px",
    textAlign: "center",

    "@media only screen and (min-width: 1200px)": {
      ...HomepageSelectStyles["@media only screen and (min-width: 1200px)"],
      fontSize: "16px",
      height: "30px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      textAlign: "center",
      padding: "0px",
      color: "#333",

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
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#333" }),
};
