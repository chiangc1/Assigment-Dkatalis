$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Assignment1_Checkout.feature");
formatter.feature({
  "name": "Feature to Checkout \"Pillow\"",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Checkout flow for purchasing \"Pillow\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "User is on home page",
  "keyword": "And "
});
formatter.step({
  "name": "Click buy now button",
  "keyword": "And "
});
formatter.step({
  "name": "Click checkout",
  "keyword": "And "
});
formatter.step({
  "name": "Click continue",
  "keyword": "And "
});
formatter.step({
  "name": "Click credit/debit card",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the \u003cCard Number\u003e, \u003cExpiry Date\u003e, \u003cCVV Number\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click Pay Now",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cBank OTP\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click ok",
  "keyword": "And "
});
formatter.step({
  "name": "Back to home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Payment Type",
        "Card Number",
        "Expiry Date",
        "CVV Number",
        "Bank OTP"
      ]
    },
    {
      "cells": [
        "Success Credit Card Payment",
        "\u00274811 1111 1111 1114\u0027",
        "\u002712/24\u0027",
        "\u0027123\u0027",
        "\u0027112233\u0027"
      ]
    },
    {
      "cells": [
        "Failed Credit Card Payment",
        "\u00274911 1111 1111 1113\u0027",
        "\u002702/20\u0027",
        "\u0027123\u0027",
        "\u0027112233\u0027"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Checkout flow for purchasing \"Pillow\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click buy now button",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_buy_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click checkout",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click continue",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click credit/debit card",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_credit_debit_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \u00274811 1111 1111 1114\u0027, \u002712/24\u0027, \u0027123\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.user_enters_the_Card_number(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Pay Now",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_Pay_Now()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \u0027112233\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.user_enters(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click ok",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Back to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.back_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checkout flow for purchasing \"Pillow\"",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click buy now button",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_buy_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click checkout",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click continue",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click credit/debit card",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_credit_debit_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the \u00274911 1111 1111 1113\u0027, \u002702/20\u0027, \u0027123\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.user_enters_the_Card_number(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Pay Now",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_Pay_Now()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \u0027112233\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.user_enters(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"PaRes\"]\"}\n  (Session info: chrome\u003d100.0.4896.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.3\u0027, revision: \u00277b1ebf28ef\u0027\nSystem info: host: \u0027DESKTOP-83DM1UL\u0027, ip: \u0027192.168.1.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [cac5c3532ea4383519efe3db08b96106, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"PaRes\"]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\vince\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55484}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55484/devtoo..., se:cdpVersion: 100.0.4896.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cac5c3532ea4383519efe3db08b96106\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\r\n\tat Main.Assignment1_Checkout.user_enters(Assignment1_Checkout.java:92)\r\n\tat ✽.user enters \u0027112233\u0027(file:///D:/eclipse/Assigment1-Vincent/src/test/resources/Features/Assignment1_Checkout.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click ok",
  "keyword": "And "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.click_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Back to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Main.Assignment1_Checkout.back_to_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/Assignment2_CompareJSON.feature");
formatter.feature({
  "name": "Compare JSON File",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Comparation respose JSON",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url to browser",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "urls1",
        "urls2"
      ]
    },
    {
      "cells": [
        "\u0027https://reqres.in/api/users/1\u0027",
        "\u0027https://reqres.in/api/users/1\u0027"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Comparation respose JSON",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "url to browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Main.Assignment2_CompareJSON.url_to_browser()"
});
formatter.result({
  "status": "passed"
});
});