package Main;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;

public class Assignment2_CompareJSON {
	WebDriver driver = null;
	String txt1, txt2;
	@Given("url to browser")
	public void url_to_browser() throws FileNotFoundException {
		//Setting for browser
		String projectPath = System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver", projectPath + "/src/test/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		
		//Getting file txt from local
		File file1 = new File(projectPath+"/src/test/resources/File/url1.txt");
		Scanner sc1 = new Scanner(file1);

		File file2 = new File(projectPath+"/src/test/resources/File/url2.txt");
		Scanner sc2 = new Scanner(file2);
		
		while (sc1.hasNextLine() && sc2.hasNextLine()) {
			String url1 = sc1.nextLine();
			String url2 = sc2.nextLine();
			get_response_JSON1(url1);
			get_response_JSON2(url2);
			
			compare(url1,url2);
		}
		driver.close();
		driver.quit();
	}

	public void get_response_JSON1(String url1) {
		driver.get(url1);
		txt1 = driver.findElement(By.cssSelector("pre")).getText();
	}
	
	public void get_response_JSON2(String url2) {
		driver.get(url2);
		txt2 = driver.findElement(By.cssSelector("pre")).getText();
	}

	public void compare(String url1, String url2) {
		if (txt1.equals(txt2)) {
			System.out.println(url1 + " Equals " + url2);
		}else {
			System.out.println(url1 + " Not Equals " + url2);	
		}
	}

}
