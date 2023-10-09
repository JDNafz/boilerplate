# Deploy to Heroku

## Install Heroku CLI


```
npm install -g heroku
```


```
heroku login
```

It will ask you to open a web site in your browser to complete the login process.

## Create a Heroku Project 

*must be setup as a git repository for these commands to work.

```javascript
heroku create
```
Check your current remotes (places the code is being pushed to) to ensure it added successfully. 

```
git remote -v
``` 
You should see a remote called `heroku`

Next git push to send your content to heroku:
```javascript
git push heroku main
```

View it in browser running on Heroku with:
```javascript
heroku open
```

Go to [heroku](https://dashboard.heroku.com/apps), select the app, rename it in settings to something more recognizable than prarie-beefcycle-5893013.
then back in VS code update the url of the remote, I like to check it, update it, check it again

```javascript

git remote -v // check current
git remote set-url heroku [INSERT YOUR URL HERE]
git remote -v // to check it worked
```




## App Updates: Environment Variables

grab the content of your .env file and put it in heroku.


### Port

On Heroku, our apps will run on a different port every time we deploy. Heroku will set a `PORT` environment variable to tell us which port we need to listen on.

Your `server.js` file should have a line of code that looks something like this:

```js
// In server.js

const PORT = process.env.PORT || 5000;

```

This will allow heroku to tell your app which port to listen on.

### Database URL

If you are using a database, you will need to configure your database URL as an environment variable.

See [instructions for deploying a database with render.com](./render-db.md)


### Other Environment Variables

You may need to setup other environment variable. For example, API keys and other secrets must be kept as environment variables, so they are not pushed to Github.

To set environment variables in heroku, run:

```
heroku config:set MY_SUPER_SECRET=some-secret-value
```

> Replace `MY_SUPER_SECRET` and `some-secret-value` with the actual variable name and value!

In your app, you can access this value using `process.env`:

```js
const someSecret = process.env.MY_SUPER_SECRET;
```

## Connect to a Database

See docs for 

## Changes after you deploy???

To deploy new code changes to heroku, use git:

- Use `git add` and `git commit` to commit your code (as usual)
- Use `git push origin main` to push your code to Github (as usual)
- Use `git push heroku main` to deploy your code to heroku (new!)
- Run `heroku open` to open your app in a web browser.

> BONUS: You can setup [_Github Integration_ on Heroku](https://devcenter.heroku.com/articles/github-integration) to automatically deploy whenever you push code to Github.


## Troubleshooting

Your app is running on heroku's servers, not on your computer. To see the logs from your deployed app, you will need to ask Heroku to send them to you:

```
heroku logs --tail
```


## Heroku CLI commands

- `heroku logs --tail` - Display error logs (`Ctrl-C` to exit)
- `heroku config` - Show basic app info
- `heroku restart` - Sometimes it helps to turn things off an on again
- `heroku open` - Opens the website for you project in the browser
- `heroku config:set MY_SUPER_SECRET=some-secret-value` - Set an environment variable
