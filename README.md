# Given task Done!!!!

## A Given app created in React and Redux Library.
`1.Redux is a predictable state container for JavaScript apps.
 2.React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.`

##  STEP 1 : Set up the Development Environment

Install Node.js® and npm if they are not already on your machine

Visit : https://nodejs.org/en/download/


##  STEP 2 : Installation
 ### check version on command window by following cmd.

  `npm --version and node --version`

##  Once installed you need to install packages.

  `npm install`

##  To run project and run test cases.

  `npm run serve` --- to run project
  `npm run jest`  --- to run test cases




* Consume our public API @ https://api.mcmakler.de/v1/advertisements to retrieve a list of advertisements of vacant apartments.
* Display the first 10 advertisements in the HTML + CSS layout created in step A, sticking to the layout, placing data where it fits.
* **NOTE:** You are free to use any framework you wish, or do it VanillaJS style. *Brief explanation of your choice.*



## Check Points
* Consumed public API @ https://api.mcmakler.de/v1/advertisements to retrieve
  a list of advertisements of vacant apartments,but not able to find api filters for example. Didn't get any information about meta data which includes page, pageSize and count. Thats why when i am hitting the given api,
  I am getting whole 700 results in my request.Though i am getting whole data, so i thought to implement client side pagination in my App, bit extra work for me but i wanted to be justify with whole data.


* Test cases are written in Jest suit and Enzymes, which are most prefarable 
  suit with React Applications.
* I tried to implement Git hooks but not able push .git folder in repo, for
  now i used npm pre-commit hook which checks linting before any git commit.
