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
- Node (16.17.0)
- Javascript

### Browsers tested on
- Chrome 105
- Firefox 104
- Windows 10

### Pre-requisites to run the test
- Node should be installed on the device

### Steps to run
1. Open a terminal and run below
> npm i
2. After the setup is done, run below to execute tests in chrome (default configured test)
> npm test

If this needs to be run in firefox issue the below command
> npm run test-firefox