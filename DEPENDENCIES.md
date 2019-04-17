# Our installation procedures

## Create the project

The first step was create the react project. 

~~~bash
$ npx create-react-app video-streaming-service
~~~

## Link - Router

We used the link - router instead of href to redirect the user to other pages when the user clicks a button

https://www.npmjs.com/package/react-router-dom

https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md

~~~bash 
$ npm install --save react-router-dom
~~~

## Reactstreap

We imported the reactstrap, a bootstrap like for react.js, using React Components. 

https://reactstrap.github.io


## React-Bootstreap

The previous is based on Bootstrap 4, however there is a more stable version using bootstrap 3. We used both of them

https://react-bootstrap.github.io

~~~bash
$ npm install react-bootstrap bootstrap
~~~

Why do we used instead of bootstrap? When react.js is used, it's meant for react update DOM instead of bootstrap directly make this updates. If both are changing DOM, some unpleasant behaviors may occur.

