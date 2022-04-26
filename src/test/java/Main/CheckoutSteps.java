package Main;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By.ByClassName;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;

public class CheckoutSteps {
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
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[1]/a[@href='#/select-payment']")).click();
		Thread.sleep(2000);
	}

	@And("Click credit\\/debit card")
	public void click_credit_debit_card() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"payment-list\"]/div[1]/a")).click();
		Thread.sleep(2000);
	}


	@When("user enters the {string}, {string}, {string}")
	public void user_enters_the_Card_number(String cardNumber, String expiryDate, String cvvPass) {
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[3]/div/div/div/form/div[2]/div[1]/input")).sendKeys(cardNumber);
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[3]/div/div/div/form/div[2]/div[2]/input")).sendKeys(expiryDate);
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[3]/div/div/div/form/div[2]/div[3]/input")).sendKeys(cvvPass);
	}

	@And("Click Pay Now")
	public void click_Pay_Now() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"application\"]/div[1]/a/div[1]")).click();	
		Thread.sleep(2000);
	}

	@And("user enters {int}")
	public void user_enters(String bankOTP) {
		driver.findElement(By.xpath("//*[@id=\"PaRes\"]")).sendKeys(bankOTP);
	}

	@When("Click ok")
	public void click_ok() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"acsForm\"]/div[6]/div/button[1]")).click();	
		Thread.sleep(2000);
	}

	@Then("Back to home page")
	public void back_to_home_page() {
	}
}
