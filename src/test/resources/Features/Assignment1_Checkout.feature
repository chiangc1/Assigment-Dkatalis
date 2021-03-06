#Author: Vincent
Feature: Feature to Checkout "Pillow"

  Scenario Outline: Checkout flow for purchasing "Pillow"
    Given Browser is open
    And User is on home page
    And Click buy now button
    And Click checkout
    And Click continue
    And Click credit/debit card
    When user enters the <Card Number>, <Expiry Date>, <CVV Number>
    And Click Pay Now
    When user enters <Bank OTP>
    And Click ok
    Then Back to home page

    Examples: 
      | Payment Type                | Card Number      			| Expiry Date | CVV Number | Bank OTP |
      | Success Credit Card Payment | '4811 1111 1111 1114' | '12/24'     |    '123'	 | '112233' |
      | Failed Credit Card Payment  | '4911 1111 1111 1113' | '02/20'     |    '123'	 | '112233' |
