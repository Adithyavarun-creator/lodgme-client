//45a5ae51-fd93-4418-a357-bcc04f51c682
//6b8d2588-67d0-4d47-8c90-36eb6aca5631

// /      ICEBBmfG6kQYkyCoq9p;

import { lazy, Suspense, useEffect } from "react";
import { FreshdeskWidget } from "@personare/react-freshdesk-widget";
import { FreshworksWidget } from "freshworks-api";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SupportPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerText = `	window.fwSettings={
      'widget_id':69000002389
      
        };
        !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n, window.FreshworksWidget('show', 'launcher')}}()`;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "https://widget.freshworks.com/widgets/69000002389.js";
    //script2.src = "https://withlodgeme.freshdesk.com/widgets/69000002389.js";
    script2.async = true;
    script2.defer = true;
    document.body.appendChild(script2);
  }, []);

  return (
    <div className="">
      {/* <h1>API</h1>
      <button>Show</button> */}
    </div>
  );
};

export default SupportPage;
