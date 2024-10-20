# Learning React

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Code Splitting (Dynamic Imports)
- Consistent Hashing
- Differential Bundling - support older browsers
- Error Handling
- HTTPS
- Tree Shaking - remove unused code

03:08:00 E13

# Namaste Food

- Header
  - Logo
  - NavBar
- Body
  - Search
  - RestaurantContainer
    - RestaurantCard
- Footer
  - Copyright
  - Links
  - Address
  - Contact

Two types of Export/Import

1. Named Export/Import :

export const Component;
import {Component} from 'path';

2. Default Export/Import

export default Component;
import Component from 'path';

# React Hooks

Normal JS utility function
useState() -> This can create superpowerful react variable called state variables
useEffect()

# 2 type of Routing

- client side routing -> When we route without making any network calls to the server and route in the browser itself in React Applications.
- server side routing -> When we make and network call to the server and data got fetched by the server then it will be rendered on the client side in React Applications.

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch (action)
- selector

# Type of Testing

- Unit Testing
- Integration Testing
- End to End Testing - e2e Testing

# Setting up Testing in our app

- Install React Testing Library
- Install Jest
- Install Bebel dependencies
- Configure Babel
- Configure Parcel Config File to disable default babel transpilation
- Jest configuration. -- npx jest --init
- Install jsdom library (testing-library/react)
- Install @babel/preset-react -to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install npm i -D @testing-library/jest-dom
