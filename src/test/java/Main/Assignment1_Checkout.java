package Main;

import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



public class Assignment1_Checkout {
	WebDriver driver = null;
	
	@Given("Browser is open")
	public void browser_is_open() {
		String projectPath = System.getProperty("user.dir");
		
		System.setProperty("webdriver.chrome.driver", projectPath + "/src/test/resources/drivers/chromedriver.exe");
		
		driver = new ChromeDriver();
		
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	@And("User is on home page")
	public void user_is_on_home_page() throws InterruptedException {
		driver.navigate().to("https://demo.midtrans.com");
		
		Thread.sleep(2000);
	}

	@And("Click buy now button")
	public void click_buy_now_button() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"container\"]/div/div/div[1]/div[2]/div/div/a")).click();
		Thread.sleep(2000);
	}

	@And("Click checkout")
	public void click_checkout() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"container\"]/div/div/div[2]/div[2]/div[1]")).click();
		Thread.sleep(2000);
	}

	@And("Click continue")
	public void click_continue() throws InterruptedException {
		driver.switchTo().frame("snap-midtrans");
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[1]/a")).click();
		Thread.sleep(2000);
	}

	@And("Click credit\\/debit card")
	public void click_credit_debit_card() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"payment-list\"]/div[1]/a")).click();
		Thread.sleep(2000);
	}


	@When("user enters the {string}, {string}, {string}")
	public void user_enters_the_Card_number(String cardNumber, String expiryDate, String cvvPass) throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[3]/div/div/div/form/div[2]/div[1]/input")).sendKeys(cardNumber);
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[3]/div/div/div/form/div[2]/div[2]/input")).sendKeys(expiryDate);
		String temp = driver.findElement(By.xpath("//*[@id=\"application\"]/div[3]/div/div/div/form/div[2]/div[2]")).getAttribute("class");
		if (temp.equals("input-group col-xs-7 error")) {
			driver.close();
			driver.quit();
			throw new NoSuchElementException();
		}
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[3]/div/div/div/form/div[2]/div[3]/input")).sendKeys(cvvPass);
		Thread.sleep(2000);	
	}

	@And("Click Pay Now")
	public void click_Pay_Now() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[1]/a")).click();	
		Thread.sleep(2000);
	}

	@And("user enters {string}")
	public void user_enters(String bankOTP) throws InterruptedException, NoSuchElementException {
		driver.switchTo().frame(0);
		driver.findElement(By.xpath("//*[@id=\"PaRes\"]")).sendKeys(bankOTP);	
		Thread.sleep(2000);
	}

	@When("Click ok")
	public void click_ok() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"acsForm\"]/div[6]/div/button[1]")).click();	
		Thread.sleep(2000);
	}

	@Then("Back to home page")
	public void back_to_home_page() {
		driver.close();
		driver.quit();
	}
}
