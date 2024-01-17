export const DropdownSelectStyles = {
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
      ...DropdownSelectStyles["@media only screen and (min-width: 1200px)"],
      fontSize: "18px",
      height: "250px",
      width: "400px",
      backgroundColor: "#015151",
      borderRadius: "10px",
      textAlign: "center",
      padding: "5px",
      overflow: "hidden",
      color: "#fff",
      cursor: "pointer",
    },
    "@media (min-width: 768px) and (max-width: 1024px) ": {
      ...DropdownSelectStyles[
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
      ...DropdownSelectStyles[
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
      ...DropdownSelectStyles[
        "@media (min-width: 280px) and (max-width: 480px) "
      ],
      fontSize: "10px",
      backgroundColor: "#015151",
      height: "15px",
      borderRadius: "10px",
      textAlign: "center",
      width: "180px",
      padding: "0px",
    },
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
};
