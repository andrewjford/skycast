# README

A weather web application built on Rails and React. See a demo [here](https://skycast-seattle.herokuapp.com/).

To Deploy:

1. Obtain Dark Sky API key and Google Geocoding API key and set keys in environment (Keys are expected to be DARKSKY_KEY and GOOGLE_KEY).
2. To run in local dev environment:
  a. Run rails server in console `rails s -p 3001`
  b. Run node server in console from ./client directory `yarn start`
3. The app is configured to deploy to heroku with the React client being served from the Rails server
  a. Create new heroku app in console: `heroku apps:create`
  b. Add node buildpack: `heroku buildpacks:add heroku/nodejs --index 1`
  c. Add ruby buildpack: `heroku buildpacks:add heroku/ruby --index 2`
  d. git commit and push to heroku master
