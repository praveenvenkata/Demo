@SiteValidations
Feature: Verify the user is able to access the site
@validatingLinks
Scenario: validating links
Given Open site in browser 
Then navigate to the site "https://www.growthengineering.co.uk/"
Then validating homePage Links
Then close the browser
@Validating_Form_Filling
Scenario: validating Form filling
Given Open site in browser 
Then navigate to the site "https://www.growthengineering.co.uk/"
Then validating homePage Links
Then fill the form
Then close the browser