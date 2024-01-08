import React from "react";
import ReactDOM from "react-dom";
import Zendesk from "react-zendesk";
const ZENDESK_KEY = "your zendesk embed key";

// Take contact form as an example
// Let's customise our contact form appearance, launcher and add prefill content
const setting = {
  color: {
    theme: "#000",
  },
  launcher: {
    chatLabel: {
      "en-US": "Need Help",
    },
  },
  contactForm: {
    fields: [
      { id: "description", prefill: { "*": "My pre-filled description" } },
    ],
  },
};

//<Zendesk defer zendeskKey={ZENDESK_KEY} {...setting} onLoaded={() => console.log('is loaded')} />;
