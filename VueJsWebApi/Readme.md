# Introduction
A starter, hello world template, for full-stack app, using vue.js on frontend and ASP.NET Core Web Api on backend. 

Technologies used:
* Vue.js Cli 3
* Eslint Airbnb config
* Vuex
* Axios
* Mocha, Chai
* Webpack

* ASP.NET Core 2.1

# Usage
Run the VueJsWebApi folder as a VsCode workspace. Using Ctrl+Shift+P -> Tasks: Run Task you can run:
1) Install Dependencies - runs npm install in the vue project, use straight after downloading the code to refresh the node_modules
2) Run Mocha Tests - starts the frontend tests
3) Run Vue - runs the mocha tests and starts the frontend app afterwards on port 8080 with Hot Module Replacement active
4) Run Web Api - runs the backend ASP.NET Web Api on port 5000.


If you want to change the base Uri of the api (i.e. when deploying to production environment), you can change it in dotnet-starter-app/src/common/http-common.js, which specifies the root api url for all http calls.