$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 12884413700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 570315600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1093365800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 170061900,
  "status": "passed"
});
formatter.after({
  "duration": 1264761800,
  "status": "passed"
});
formatter.before({
  "duration": 5794388600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify Error Message With Invalid Credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"prime1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1302732200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 368992800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 286360300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 590322700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeErrorMessageDisplayed()"
});
formatter.result({
  "duration": 189386700,
  "status": "passed"
});
formatter.after({
  "duration": 1431160500,
  "status": "passed"
});
formatter.before({
  "duration": 4995614100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"john123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"234test\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 55700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1308426900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 351417200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234test",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 241803500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 999947500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 140500,
  "status": "passed"
});
formatter.after({
  "duration": 1330206600,
  "status": "passed"
});
formatter.before({
  "duration": 5147940800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"prime123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click On logout link",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i should see login link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 59300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 917516100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 351712900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 302450900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 688894800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 549796000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeLoginLinkIsDisplayed()"
});
formatter.result({
  "duration": 184624000,
  "status": "passed"
});
formatter.after({
  "duration": 1274548100,
  "status": "passed"
});
});