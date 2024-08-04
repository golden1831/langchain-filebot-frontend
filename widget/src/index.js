import App from "./app";
(function (window) {
  const scriptEle = document.querySelector(
    'script[data-chat-app-id="filebot"]'
  );
  const appKey = scriptEle.getAttribute("data-chat-app-key");
  const widgetColor = scriptEle.getAttribute("data-chat-widget-color");
  const app = new App({ appKey, widgetColor });
  app.load();
  console.log("new app started");
})(window);
