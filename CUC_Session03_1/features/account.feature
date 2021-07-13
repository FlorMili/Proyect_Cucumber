Feature: create account on Maddison Store

Scenario: User successfully creates on Store Account
  Given Flor is on the Store Registration page
  When I enters all required registration fields
  And I click in register button
  Then a store account is created