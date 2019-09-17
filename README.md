

## Description
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It also adds the following features and builds an opinionated frontend architecture around them:
- Functional programming (rxjs, lodash)
- Routing (react-router-dom)
- State management & epics (redux, react-redux, redux-observable, normalizr)
- Standard resource modules (auth, users, messages, notifications, feature toggles)
- Styles/components (reactstrap, bootstrap, scss, react-spinner, react-toastify)
- Helper libraries (jsonwebtoken, moment, etc)
- Component test harnasses (enzyme, enzyme-jest)

## Steps to using this boilerplate
1. `cp -r react-starter-kit my-new-project`
2. replace "react-starter kit" in the package.json, .circleci/config.yml and helpers/getAppName.js'
3. Push the code to a new Github project and CircleCI project
4. For information about deployments, see the Deployments section
5. The font included in this starter kit (GT America) requires a license. If you don't have access to a license and don't want to buy one, you can change the font in theme.scss and src/fonts.
6. Update the deploy command to point to the right S3 bucket.  Setup an AWS CloudFront system to serve it.

This project provides some out-of-the-box resources (auth, users, feature toggles, notifications, messages). Using one requires simply uncommenting the module in `reducers/reducers.js`, `reducers/moduleName.js`, `epics/moduleNameEpics.js`, `reducers/schema.js` and `helpers/api.js`. They'll also need a backend implementation (Buccaneer has a companion template for the backend).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
