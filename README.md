## Initial setup
- `cp -r react-starter-kit ./my-new-react-app`
- delete references to the `react-starter-kit` name (in package.json, circleci/config.yml, local.env, etc)
- setup an `s3 bucket` and Cloudformation hosting resources. add this to the `package.json`
- update `local.env` to your desired settings

## Description
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  It is well documentated!

This application also adds the following architecture around the basic create-react-app application:
- Functional programming (rxjs, lodash)
- Routing (react-router-dom)
- State management & epics (redux, react-redux, redux-observable, normalizr)
- Styles/components (reactstrap, bootstrap, scss, react-spinner, react-toastify)
- Helper libraries (jsonwebtoken, moment, etc)
- Component test harnasses (enzyme, enzyme-jest)

## Separation of concerns
```bash
src/ # all the source code for the app
  components/ # UI components (React)
  containers/ # UI containers (pass state and business logic to components)
    Router.js # the front-end router. This is the top-level container.
  redux/
    epics/ # workflows and business logic built with redux-observable
    reducers/ # redux reducers
  helpers/ # helper functions for formatting strings, config, etc
  styles/ # fonts, scss stylesheets, etc
  App.js # the top-level application, which renders react containers/components
  index.js # the entry point for the application
```

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
