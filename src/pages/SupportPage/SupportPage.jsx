import React from "react";
import FreshdeskWidget from "@personare/react-freshdesk-widget";

const SupportPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <FreshdeskWidget
        url="https://support.freshdesk.com"
        type="pop-up"
        buttonType="text"
        buttonText="Send feedback!"
        buttonColor="#fff"
        buttonBackgroundColor="#015151"
        buttonPosition="bottom"
      /> */}
      {/* <button>Send Feedback</button>
      </FreshdeskWidget> */}
      <FreshdeskWidget url="https://support.freshdesk.com" formHeight="700px" />
    </div>
  );
};

export default SupportPage;
