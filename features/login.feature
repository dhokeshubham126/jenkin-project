
Feature: login functionality

Scenario: login into  portal
Given  open url
When  fill username and password
Then  click on login button
And  verify user is able to login successfully