package stepDefination;

import com.utility.Baseclass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class BrowserSetUp extends Baseclass{
	@Given("^Open site in browser$")
	public void open_site_in_browser() throws Throwable {
	   Baseclass.openBrowser(); 
	}

	@Then("^navigate to the site \"([^\"]*)\"$")
	public void navigate_to_the_site(String url) throws Throwable {
	Baseclass.navigated_to_the_site(url);
	Thread.sleep(4000);
	}
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	   driver.quit();
	}
}
