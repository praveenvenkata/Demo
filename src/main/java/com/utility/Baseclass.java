package com.utility;

import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Baseclass {

	public static WebDriver driver;
	public static void openBrowser() throws Exception {

		System.out.println("browser need to start");
		WebDriverManager.chromedriver().setup();
		driver = (WebDriver) new ChromeDriver();

	}

	public static void navigated_to_the_site(String url) {
		try {
			driver.manage().window().maximize();
            driver.get(url);
		} catch (Exception e) {
			e.printStackTrace();
		}
	
	
	}
}
