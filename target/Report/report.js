$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GrowthEngineeringSiteValidations.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the user is able to access the site",
  "description": "",
  "id": "verify-the-user-is-able-to-access-the-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SiteValidations"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "validating links",
  "description": "",
  "id": "verify-the-user-is-able-to-access-the-site;validating-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@validatingLinks"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open site in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to the site \"https://www.growthengineering.co.uk/\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validating homePage Links",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BrowserSetUp.open_site_in_browser()"
});
formatter.result({
  "duration": 2241960400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.growthengineering.co.uk/",
      "offset": 22
    }
  ],
  "location": "BrowserSetUp.navigate_to_the_site(String)"
});
formatter.result({
  "duration": 7478659300,
  "status": "passed"
});
formatter.match({
  "location": "VliadatingLinks.validating_homePage_Links()"
});
formatter.result({
  "duration": 7940081400,
  "status": "passed"
});
formatter.match({
  "location": "BrowserSetUp.close_the_browser()"
});
formatter.result({
  "duration": 681235600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "validating Form filling",
  "description": "",
  "id": "verify-the-user-is-able-to-access-the-site;validating-form-filling",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Validating_Form_Filling"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Open site in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "navigate to the site \"https://www.growthengineering.co.uk/\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "validating homePage Links",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "fill the form",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BrowserSetUp.open_site_in_browser()"
});
formatter.result({
  "duration": 1213360000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.growthengineering.co.uk/",
      "offset": 22
    }
  ],
  "location": "BrowserSetUp.navigate_to_the_site(String)"
});
formatter.result({
  "duration": 8997014600,
  "status": "passed"
});
formatter.match({
  "location": "VliadatingLinks.validating_homePage_Links()"
});
formatter.result({
  "duration": 8238744200,
  "status": "passed"
});
formatter.match({
  "location": "FormFilling.fill_the_form()"
});
formatter.result({
  "duration": 21577926400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d92.0.4515.131)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT-5CD03610PH\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.131, chrome: {chromedriverVersion: 92.0.4515.107 (87a818b10553..., userDataDir: C:\\Users\\VENKAT~1.KUN\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:65192}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2d6128e73e1f1aa752842863ef7662f6\n*** Element info: {Using\u003dxpath, value\u003d//select[contains(@name,\u0027enquiry\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefination.FormFilling.fill_the_form(FormFilling.java:44)\r\n\tat ✽.Then fill the form(GrowthEngineeringSiteValidations.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BrowserSetUp.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});