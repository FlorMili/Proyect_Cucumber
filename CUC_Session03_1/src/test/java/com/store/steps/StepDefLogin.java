package com.store.steps;


import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import com.store.util.BasePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefLogin extends BasePage{

	@Given("^user launch Chrome browser$")
	public void user_launch_Chrome_browser() throws Throwable {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://demo-store.seleniumacademy.com/");
	}

	@When("^title Store Homepage is Madison Island$")
	public void title_Store_Homepage_is_Madison_Island() throws Throwable {
        String title = driver.getTitle();
        assertEquals(title, "Madison Island");
		
	}

	@Then("^go to account menu and click$")
	public void go_to_account_menu_and_click() throws Throwable {
 
		driver.findElement(By.xpath("//a[@class='skip-link skip-account']")).click();
	}

	@Then("^click on login link$")
	public void click_on_login_link() throws Throwable {

		 driver.findElement(By.xpath("//a[text()='Log In']")).click();
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("pass")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		 driver.findElement(By.id("send2")).submit();
	}

	@Then("^title Dashboard is My Account$")
	public void title_Dashboard_is_My_Account() throws Throwable {
		Assert.assertEquals(driver.getTitle(), "My Account");
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		  driver.close();
	}

	
}
