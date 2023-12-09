import React from "react";
import { RegisterPageStyles } from "../../pages/RegisterPage/RegisterPageStyles";
import { useTranslation } from "react-i18next";

const RegiserForm1 = ({ step, setStep }) => {
  const { t } = useTranslation();

  const goNext = () => {
    setStep(2);
  };

  return (
    <RegisterPageStyles>
      <div className="register_box">
        <div>
          <h2 className="register_title">{t("register")}</h2>
        </div>
        <div>
          <hr />
        </div>
        <div>
          <h2 className="register_title">{t("createaccount")}</h2>
          <span className="register_account_sub">{t("createaccountsub")}</span>
        </div>
        <div>
          <input
            type="text"
            className="register_emailinput"
            placeholder="Votre email"
            required
          />
        </div>
        <div className="btn">
          <button onClick={goNext} className="register_btn">
            {t("continue")}
          </button>
        </div>
        <div>
          <span className="register_account_sub">{t("alreadyaccount")}</span>
        </div>
        <div>
          <button className="register_loginbtn">{t("login")}</button>
        </div>
      </div>
    </RegisterPageStyles>
  );
};

export default RegiserForm1;
