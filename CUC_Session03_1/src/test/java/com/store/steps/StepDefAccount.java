package com.store.steps;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;

import com.store.util.*;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefAccount extends BasePage {
	
	@Given("^Flor is on the Store Registration page$")
	public void flor_is_on_the_Store_Registration_page() throws Throwable {
	// System.setProperty("webdriver.chrome.driver", "C:\\webdriver\\chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.manage().window().maximize();
	   driver.manage().deleteAllCookies();
	   driver.get("http://demo-store.seleniumacademy.com/customer/account/create/");
		
	}

	@When("^I enters all required registration fields$")
	public void i_enters_all_required_registration_fields() throws Throwable {
	   driver.findElement(By.id("firstname")).sendKeys("Flor2");
	   driver.findElement(By.id("middlename")).sendKeys("F.");
	   driver.findElement(By.id("lastname")).sendKeys("Perez2");
	   driver.findElement(By.id("email_address")).sendKeys("pruebas85@gmail.com");
	   driver.findElement(By.id("password")).sendKeys("prueba123");
	   driver.findElement(By.id("confirmation")).sendKeys("prueba123");
	}

	@When("^I click in register button$")
	public void i_click_in_register_button() throws Throwable {
	  JavascriptExecutor js = (JavascriptExecutor)driver;
	  js.executeScript("window.scrollBy(0,500)");
	  driver.findElement(By.xpath("//*[@id=\"form-validate\"]/div[2]/button")).submit();
	}

	@Then("^a store account is created$")
	public void a_store_account_is_created() throws Throwable {
		String expected = "Thank you for registering with Madison Island.";
	    String actual = driver.findElement(By.xpath("//*[@id=\"top\"]/body/div/div[2]/div[2]/div/div[2]/div[2]/div/ul/li/ul/li/span")).getText();
	    assertEquals("Passed", expected, actual);
	    driver.close();
	}

	
	
}
