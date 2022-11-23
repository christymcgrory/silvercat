## Silvercat Coding Test

### Running The Code
```sh
# Clone the repo
git clone https://github.com/christymcgrory/silvercat

# Install dev dependencies
npm i or yarn or pnpm i

# Run the development server
npm run dev
```

### Tech Used
Built with Typescript.

This demo utilises several frameworks to ease the development of boilerplate code:
 - Next.js
 - React
 - Mantine (Theme Library)
 - LowDB (Local JSON database)

### Development Progress

 - [x] API Routes `pages/api`
	 - [ ] User Login (Partially done) `pages/api/user/login.tsx`
	 - [x] User Create Account `pages/api/user/create.tsx`
	 - [ ] Balance Transfer (Done but untested) `pages/api/balance/transfer.tsx`
 - [x] Pages
	 - [x] Home Page (unstyled) `pages/index.tsx`
	 - [ ] Login Page `pages/login.tsx`
	 - [x] Account Creation Page `pages/create.tsx`
 - [ ] Tests

**Summary**

The majority of the work completed is around the business logic, building out an account creation api route and page to start with. Similar work would have been completed on the Login page/logic given additional time. A balance transfer route exists and should work in theory but is currently untested.

**Future Work**

Future work would be focused on:

 - Improving serverside input validation + sanitising
 - providing password encryption by default
 - Adding additional checks before transferring funds
 - Implementing unit tests + e2e tests
 - Improving the frontend, with logged in user info/profile pages and consistent styling 

