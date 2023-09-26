#KINGS CLOTHING

Kings Clothing is a capstone project made with REACT, REDUX, and FIREBASE

##Installation

Install all packages
```zsh
npm install
```

Start project:
```zsh
npm start
```

##Contributing

Fork or Clone from [GitHub](https://github.com/TheGrimmmz/Capstone-Project-2) with:
```zsh
git clone <webpage>
```
For major changes, please open an issue first to discuss what you would like to change.

Please make sure changes are appropriate!

##Firebase
Create an account on firebase attach your [GitHub](https://www.github.com).
Select Go to console in top right corner.
Add project
Follow instructions
Select </> after project is created
Give project a nickname
Use command in terminal
```zsh
npm install firebase
```
Within your application in src/Utils/Firebase/Firebase.js replace the firebase config with your configuration
```javascript
const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "your authDomain",
  projectId: "your projectId",
  storageBucket: "your storageBucket",
  messagingSenderId: "your messagingSenderId",
  appId: "your appId"
};
```
Continue to console

##Stripe
Create an account on [Stripe](https://www.stripe.com)
Connect your stripe account with your
```javascript
REACT_APP_STRIPE_PUBLISHABLE_KEY='your key'
STRIPE_SECRET_KEY='your key'
```
within a .env file outside of the src folder

##Netlify
Setting up netlify
Create account or Log in
Under Sites -> Add new site
Import project from Github
Select project
Under build command add this
CI= npm run build
Add Environmental Variables
REACT_APP_STRIPE_PUBLISHABLE_KEY and value being the string
STRIPE_SECRET_KEY and value being the string
Deploy Project

##Tests
```zsh
cd project
npm test
```
