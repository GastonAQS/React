import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "145045518725-0jo7leemmiv0r9nsdpr9viahjn5vbk69.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
