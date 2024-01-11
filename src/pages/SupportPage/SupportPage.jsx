import { lazy, Suspense, useEffect } from "react";
import { FreshdeskWidget } from "@personare/react-freshdesk-widget";
import { FreshworksWidget } from "freshworks-api";
import { Helmet } from "react-helmet";

const SupportPage = () => {
  //45a5ae51-fd93-4418-a357-bcc04f51c682
  //6b8d2588-67d0-4d47-8c90-36eb6aca5631
  const insertScriptFreshWidget = (
    <Helmet>
      <script>
        {`function initFreshChat() {
window.fcWidget.init({
  token: "45a5ae51-fd93-4418-a357-bcc04f51c682",
  host: "https://withlodgeme.freshdesk.com"
});
}
function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://withlodgeme.freshdesk.com",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk Messaging-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);`}
      </script>
    </Helmet>
  );
  return (
    <div className="App">
      {insertScriptFreshWidget}
      <h1>FreshWorks API Widget</h1>
      <button onClick={() => window.FreshworksWidget()}>Show</button>
    </div>
  );
};

export default SupportPage;
