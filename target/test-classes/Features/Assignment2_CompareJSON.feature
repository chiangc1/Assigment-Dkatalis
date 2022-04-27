#Author: Vincent
Feature: Compare JSON File

  Scenario Outline: Comparation respose JSON
    Given url to browser 

    Examples: 
      | urls1                           | urls2                           |
      | 'https://reqres.in/api/users/1' | 'https://reqres.in/api/users/1' |
