$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("account.feature");
formatter.feature({
  "line": 1,
  "name": "create account on Maddison Store",
  "description": "",
  "id": "create-account-on-maddison-store",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User successfully creates on Store Account",
  "description": "",
  "id": "create-account-on-maddison-store;user-successfully-creates-on-store-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Flor is on the Store Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enters all required registration fields",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click in register button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "a store account is created",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefAccount.flor_is_on_the_Store_Registration_page()"
});
formatter.result({
  "duration": 9768370300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefAccount.i_enters_all_required_registration_fields()"
});
formatter.result({
  "duration": 913145300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefAccount.i_click_in_register_button()"
});
formatter.result({
  "duration": 3111057300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefAccount.a_store_account_is_created()"
});
formatter.result({
  "duration": 262706900,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Madison Island Login",
  "description": "",
  "id": "madison-island-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login test Scenario",
  "description": "",
  "id": "madison-island-login;login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title Store Homepage is Madison Island",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "go to account menu and click",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "title Dashboard is My Account",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "users",
  "description": "",
  "id": "madison-island-login;login-test-scenario;users",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "madison-island-login;login-test-scenario;users;1"
    },
    {
      "cells": [
        "pruebas85@gmail.com",
        "prueba123"
      ],
      "line": 16,
      "id": "madison-island-login;login-test-scenario;users;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login test Scenario",
  "description": "",
  "id": "madison-island-login;login-test-scenario;users;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title Store Homepage is Madison Island",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "go to account menu and click",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on login link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters \"pruebas85@gmail.com\" and \"prueba123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "title Dashboard is My Account",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLogin.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 10801717600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.title_Store_Homepage_is_Madison_Island()"
});
formatter.result({
  "duration": 17273200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.go_to_account_menu_and_click()"
});
formatter.result({
  "duration": 158132900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.click_on_login_link()"
});
formatter.result({
  "duration": 1297984400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pruebas85@gmail.com",
      "offset": 13
    },
    {
      "val": "prueba123",
      "offset": 39
    }
  ],
  "location": "StepDefLogin.user_enters_and(String,String)"
});
formatter.result({
  "duration": 387714900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2803289500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.title_Dashboard_is_My_Account()"
});
formatter.result({
  "duration": 24069100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.close_the_browser()"
});
formatter.result({
  "duration": 156625300,
  "status": "passed"
});
});