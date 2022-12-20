package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.List;

public class RegistrationStep {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
new HomePage().clickOnRegisterLink();
    }

    @And("^I enters following users details$")
    public void iEntersFollowingUsersDetails(DataTable dataTable) {
        List<List<String>> userList = dataTable.asLists(String.class);
        for (List<String> e: userList ) {
            System.out.println(e);
            System.out.println(e.get(0));

        }

    }

    @Then("^registration successful$")
    public void registrationSuccessful() {
    }

    @And("^I should see Registration message$")
    public void iShouldSeeRegistrationMessage() {
       String expectedMessage = "Your registration completed";
        Assert.assertEquals("message not displayed", expectedMessage, new RegisterPage().getYourRegCompletedText());
    }
    @And("^I select Gender \"([^\"]*)\"$")
    public void iSelectGender(String gender)  {
        new RegisterPage().selectGender(gender);
    }

    @And("^I enter first name  \"([^\"]*)\"$")
    public void iEnterFirstName(String first)  {
        new RegisterPage().enterFirstName(first);
    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String last) {
        new RegisterPage().enterLastName(last);
    }

    @And("^I select date of birth \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iSelectDateOfBirth(String day, String month, String year)  {
        new RegisterPage().selectDateOfBirth(day, month, year);
    }


    @And("^I enter Confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confrimPasscode) {
        new RegisterPage().enterConfirmPassword(confrimPasscode);
    }

    @And("^I click on registration button$")
    public void iClickOnRegistrationButton() {
        new RegisterPage().clickOnRegisterButton();
    }


}
