@Register@regression
Feature: Register


@sanity
  Scenario:  mandatory fields are required
    Given I am on homepage
    When I click on register link
    And I enters following users details
      | john | white | john16@gmail.com | test123 | test123 |
  And I click on registration button
  Then registration successful


@smoke
  Scenario:  User should create account successfully
    Given I am on homepage
    When I click on register link
    And I select Gender "Male"
    And I enter first name  "prime"
    And I enter last name "test"
    And I select date of birth "22","February","1980"
    And I select Gender "Male"
    And I enter email "test17@gmail.com"
    And I enter password "Prime123"
    And I enter Confirm password "Prime123"
    And I click on registration button
    Then registration successful
    And I should see Registration message