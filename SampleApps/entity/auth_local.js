// Creating the application namespace
var app = {
    models: {},
    views: {},
    utils: {}
};

jQuery(document).ready(function() {
    //Add event listeners and so forth here
    console.log("onLoad: jquery ready");

    var partialNavigatorUserAgent = navigator.userAgent.substring(0, navigator.userAgent.indexOf(")") + 1);
    var sdkLikeUserAgent = "SalesforceMobileSDK/2.0 " + partialNavigatorUserAgent + " AccountEditor/1.0 Hybrid"

    // Use  when testing in browser
    // Also make sure to start browser with same origin policy disable
    // See http://joshuamcginnis.com/2011/02/28/how-to-disable-same-origin-policy-in-chrome/
    var creds = {
        accessToken: "--will-be-obtained-by-refresh--",
        refreshToken: "5Aep861KIwKdekr90KsESmRP6soKuBrQlSV5iTuNdX6UHGbZnbEUug1hvYnrlDYmYFX.g2AaD7vtQ==",
        clientId: "3MVG9Iu66FKeHhINkB1l7xt7kR8czFcCTUhgoA8Ol2Ltf1eYHOU4SqQRSEitYFDUpqRWcoQ2.dBv_a1Dyu5xa",
        loginUrl: "https://test.salesforce.com",
        instanceUrl: "https://cs1.salesforce.com",
        userAgent: sdkLikeUserAgent
    };
    appStart(creds);
    // End local testing
});

function appStart(creds)
{
    // Force init
    Force.init(creds);

    // router
    app.router = new app.Router();

    // Go!
    Backbone.history.start();
}

