# DC Boilerplate

## Installation Instructions

- Open a new Terminal window and *cd* into the project directory
- Run *npm install* which will create a *node_modules* directory and pull down all required modules from NPMJS.com.
- Run *gulp* which will run the 'default' task within the project's gulpfile.js file. This task should create a 'dist' directory which contains the final minified files to be uploaded to the server should the project go live. Sourcemaps have been created. So whilst the included webserver (started as part of the default gulp task) runs from the 'dist' directory, the site's JS and CSS should still be able to be inspected in Chrome's DevTools.

