package com.utility;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class ElementProxy implements InvocationHandler {

    private final WebElement element;

    public ElementProxy(WebElement element) {
        this.element = element;
    }

    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        //before invoking actual method check for the popup
        this.checkForPopupAndKill();
        //at this point, popup would have been closed if it had appeared. element action can be called safely now.
        Object result = method.invoke(element, args);
        return result;
    }

	private void checkForPopupAndKill() {

	Boolean PopUp=Baseclass.driver.findElement(By.xpath("//*[text()='Request A Demo Today!']")).isDisplayed();
	if(PopUp)
	{
		Baseclass.driver.findElement(By.xpath("//*[text()='No Thanks!']")).click();
	}
	}

}
