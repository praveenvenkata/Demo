$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GrowthEngineeringSiteValidations.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the user is able to click the link",
  "description": "",
  "id": "verify-the-user-is-able-to-click-the-link",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@validatingLinks"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "validating links",
  "description": "",
  "id": "verify-the-user-is-able-to-click-the-link;validating-links",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open site in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "navigate to the site \"https://www.growthengineering.co.uk/\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "validating homePage Links",
  "keyword": "Then "
});
formatter.match({
  "location": "BrowserSetUp.open_site_in_browser()"
});
formatter.result({
  "duration": 2134308300,
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
  "duration": 8326034000,
  "status": "passed"
});
formatter.match({
  "location": "VliadatingLinks.validating_homePage_Links()"
});
formatter.result({
  "duration": 1828315200,
  "status": "passed"
});
});