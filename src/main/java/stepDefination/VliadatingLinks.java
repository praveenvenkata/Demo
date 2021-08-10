package stepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.utility.Baseclass;
import com.utility.ElementGuard;

import cucumber.api.java.en.Then;

public class VliadatingLinks {
	@Then("^validating homePage Links$")
	public void validating_homePage_Links() throws Throwable {
		System.out.println("enetered");
		WebElement OurProducts = Baseclass.driver.findElement(By.xpath("//a[text()='Our Products'][1]"));

		ElementGuard.guard(OurProducts);

		Assert.assertTrue("our Products menu is not enabled", OurProducts.isEnabled());
		OurProducts.click();
		Thread.sleep(2000);
		WebElement OurApproach = Baseclass.driver.findElement(By.xpath("//a[text()='Our Approach'][1]"));
		ElementGuard.guard(OurApproach);
		Assert.assertTrue("our Approach menu is not enabled", OurApproach.isEnabled());

		OurApproach.click();
		Thread.sleep(2000);
		WebElement Resources = Baseclass.driver.findElement(By.xpath("//a[text()='Resources'][1]"));
		ElementGuard.guard(Resources);
		Assert.assertTrue("Resources menu is not enabled", Resources.isEnabled());
		Resources.click();
		Thread.sleep(2000);
		WebElement AboutUs = Baseclass.driver.findElement(By.xpath("//a[text()='About Us'][1]"));
		ElementGuard.guard(AboutUs);
		Assert.assertTrue("About Us menu is not enabled", AboutUs.isEnabled());
		AboutUs.click();
		WebElement GetInTouch = Baseclass.driver.findElement(By.xpath("//span[text()='GET IN TOUCH']"));
		ElementGuard.guard(GetInTouch);
		Assert.assertTrue("Get in touch  menu is not  enabled", GetInTouch.isEnabled());
		GetInTouch.click();

	}
}
