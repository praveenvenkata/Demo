package stepDefination;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.utility.Baseclass;

import cucumber.api.java.en.Then;

public class FormFilling {
	@Then("^fill the form$")
	public void fill_the_form() throws Throwable {
		Baseclass.driver.findElement(By.xpath("//*[@name='full_name']")).sendKeys("K V Praveen");
		Baseclass.driver.findElement(By.xpath("//input[@name='email']")).sendKeys("K V Praveen@Gmail.com");
		Baseclass.driver.findElement(By.xpath("//input[@name='phone']")).sendKeys("++++++++");
		/*
		 * Robot robot = new Robot(); // Scroll Down using Robot class
		 * robot.keyPress(KeyEvent.VK_PAGE_DOWN);
		 * robot.keyRelease(KeyEvent.VK_PAGE_DOWN);
		 */
		WebElement SelectCountry = Baseclass.driver.findElement(By.xpath("//*[@name='country_']"));
		JavascriptExecutor js = (JavascriptExecutor) Baseclass.driver;

		js.executeScript("arguments[0].scrollIntoView(true);", SelectCountry);
		Thread.sleep(500);
		Baseclass.driver.findElement(By.xpath("//input[@name='company']")).sendKeys("Pedasys");
		Baseclass.driver.findElement(By.xpath("//input[@name='company']")).sendKeys("Pedasys");
		Select s = new Select(SelectCountry);
		s.selectByIndex(2);
		Thread.sleep(4000);

		Baseclass.driver.findElement(By.xpath("//li[@role='radio']/label[contains(@for,'how')]")).click();

		WebElement w = Baseclass.driver.findElement(By.xpath("//select[contains(@id,'role')]"));
		Select e = new Select(w);
		e.selectByIndex(2);
		Thread.sleep(4000);

		WebElement g = Baseclass.driver.findElement(By.xpath("//select[contains(@name,'enquiry')]"));
		Select q = new Select(g);
		q.selectByIndex(2);

		js.executeScript("arguments[0].scrollIntoView(true);",
				Baseclass.driver.findElement(By.xpath("//input[@value='SUBMIT']")));
		Thread.sleep(4000);
		Robot robot = new Robot(); 
		// Scroll up using Robot class
		 robot.keyPress(KeyEvent.VK_PAGE_UP);
		 robot.keyRelease(KeyEvent.VK_PAGE_UP);
	}

}
