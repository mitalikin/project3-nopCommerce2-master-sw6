@Login@regression
Feature: Login Test
  As user I want to login into nop commerce website

 @smoke
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully

  Scenario: verify Error Message With Invalid Credentials
    Given I am on homepage
    When I click on login link
    And I enter email "prime1234@gmail.com"
    And I enter password "prime123"
    And I click on login button
    Then I should see error message displayed

  @sanity
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When  I click on login link
    And  I enter email "john123@gmail.com"
    And I enter password "234test"
    And I click on login button
    Then I should login successfully

  Scenario:verify That User Should LogOut SuccessFully
    Given I am on homepage
    When I click on login link
    And I enter email "prime123@gmail.com"
    And I enter password "Prime123"
    And I click on login button
    And I click On logout link
    Then i should see login link is displayed




