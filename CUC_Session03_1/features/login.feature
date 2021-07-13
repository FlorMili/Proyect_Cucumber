Feature: Madison Island Login

  Scenario Outline: Login test Scenario
  
    Given user launch Chrome browser
     When title Store Homepage is Madison Island
     Then go to account menu and click 
     Then click on login link
     Then user enters "<username>" and "<password>"
     Then user clicks on login button
     Then title Dashboard is My Account
     Then close the browser
  
    Examples: users
      | username            | password  | 
      | pruebas85@gmail.com | prueba123 |