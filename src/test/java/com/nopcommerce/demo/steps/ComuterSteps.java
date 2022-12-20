package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class ComuterSteps {
    @Given("^I am on Computer page$")
    public void iAmOnComputerPage() {
    }


    @When("^I click on Menu Tab \"([^\"]*)\"$")
    public void iClickOnMenuTab(String menu)  {
        new HomePage().clickOnMenuTab(menu);
    }


    @Then("^I should navigate computers page successfully$")
    public void iShouldNavigateComputersPageSuccessfully() {
        String expectedMessage = "Computers";
        String actualMessage = new ComputerPage().getPageTitleText();
        Assert.assertEquals ( "Not Navigate to computer page",expectedMessage, actualMessage);


    }

    @And("^I click On subMenu \"([^\"]*)\"$")
    public void iClickOnSubMenu(String subTab)  {
        new ComputerPage().clickOnSubMenu(subTab);
    }

    @Then("^Verify desktop page displayed successfully$")
    public void verifyDesktopPageDisplayedSuccessfully() {
        String expectedMessage1 = "Desktops";
        String actualMessage1 = new DesktopsPage().getPageTitleText();
        Assert.assertEquals("Desktops page not displayed",expectedMessage1, actualMessage1);

    }


    @And("^I select Product \"([^\"]*)\"$")
    public void iSelectProduct(String productName) {
        new DesktopsPage().selectProduct(productName);
    }

    @And("^i select Processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor) {
        new BuildYourOwnComputerPage().selectProcessor(processor);
    }

    @And("^i select ram \"([^\"]*)\"$")
    public void iSelectRam(String ram) throws Throwable {
        new BuildYourOwnComputerPage().selectRam(ram);
    }


    @And("^i select hdd \"([^\"]*)\"$")
    public void iSelectHdd(String hdd)  {
        new BuildYourOwnComputerPage().selectHDD(hdd);
    }

    @And("^i select os \"([^\"]*)\"$")
    public void iSelectOs(String os) throws Throwable {
        new BuildYourOwnComputerPage().selectOS(os);
    }


    @And("^i select software \"([^\"]*)\"$")
    public void iSelectSoftware(String software)  {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I click on Add to cart  button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I should see the  confirmation message$")
    public void iShouldSeeTheConfirmationMessage() {
        String expectedMessage2 = "The product has been added to your shopping cart";
        String actualMessage2 = new BuildYourOwnComputerPage().getProductAddedMessage();
  Assert.assertEquals("Product does not added to cart",expectedMessage2, actualMessage2 );


    }
}
