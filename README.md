# README
The demo project automates the below-given scenarios for the [gocity.com](https://gocity.com/)

#### Scenarios automated
1. Navigating to the All Inclusive pass page
2. Redirecting user to the home page when selecting the home link
3. Redirect the user to the pricing page after clicking the ‘Buy’ button
4. Select one day pass
5. Choose for one person and click on the “Checkout” button
6. Navigates to Home page from checkout page
7. Navigates to ‘Explorer’ page
8. Tests all the ‘Explorer’ page links
9. Tests you can add an ‘Explorer’ pass to the cart
10. Tests that you can remove an ‘Explorer’ pass from the cart

### Technologies used
- Cypress (10.8.0)
- Cypress xpath (2.0.1)
- Node.js (16.17.0)
- Javascript
- Cypress Mochawesome Reporter

### Tested on

#### Browsers
- Chrome 105
- Firefox 104

#### Devices
- Windows 10

### Pre-requisites to run the test
- Node.js should be installed on the device

### Steps to run
1. Open a terminal and run below command
> npm i
2. After the setup is complete, run below command to execute tests in Chrome (default configured test)
> npm test

For testing in Firefox, please use the below command
> npm run test-firefox

### View the report
After the test are completed, navigate to the below location and open mochawesome.html in any of the browsers
> location : cypress/report/mochawesome-report