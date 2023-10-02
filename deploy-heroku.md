# Deploy to Heroku

[Heroku](https://www.heroku.com/) is a Cloud Application Platform that will allow you to publish your apps to the web. We'll be primarily using Heroku in this class but it's important to note that there are many other companies out there that offer similar services.

- [Heroku Sign Up](#heroku-sign-up)
  * [Pricing](#pricing)
  * [MFA](#mfa)
- [Install Heroku CLI](#install-heroku-cli)
- [Create a Heroku Project](#create-a-heroku-project)
- [App Updates: Environment Variables](#app-updates-environment-variables)
  * [What are Environment Variables?](#what-are-environment-variables)
  * [Port](#port)
  * [Database URL](#database-url)
  * [Other Environment Variables](#other-environment-variables)
- [Connect to a Database](#connect-to-a-database)
- [Deploy Code Changes](#deploy-code-changes)
- [Troubleshooting](#troubleshooting)
- [Heroku CLI commands](#heroku-cli-commands)


## Heroku Sign Up

To use heroku, you will need to sign up for an account on [heroku.com](https://www.heroku.com/).


### Pricing

Heroku pricing starts at $5/month for an **Eco Dyno Plan.** 

This covers 1,000 "compute hours". Heroku servers ("dynos") start up on-the-fly when a request is made to your server. They stay running for 30 minutes, and then shut down if there are no further requests. 

Given that your servers will only be accessed occasionally, you should be able to host as many apps as you need under the Eco Dyno plan.

Databases are not included with this plan, see [docs on deploying a database to render.com](./render-db.md).

See:
- https://blog.heroku.com/new-low-cost-plans
- https://www.heroku.com/pricing

### MFA

Heroku requires _Multi Factor Authentication_ (MFA) for all accounts. MFA is a security measure that uses your phone (or other device) to prove that you are who you say you are. A common example is when apps send you a text message with a one-time code to login.

During the sign-up process on [heroku.com](https://www.heroku.com/) you will be asked to setup MFA (if not, go to _Account Settings > Setup MFA_):

- Select _Salesforce Authenticator_ as your verification method.
- Install the _Salesforce Authenticator_ app on your phone
- Open the phone app, and select _Add an Account_
- The app will display a two word phrase. Type this phase into the heroku web site when prompted.
- Log out of heroku and log back in, to confirm that MFA is setup properly.

Your heroku account is now configured to use MFA. Whenever you login to heroku, you will receive a push notification asking you to approve the login.

> These things tend to change periodically. Heroku's own documentation may help if the above isn't working as expected. https://devcenter.heroku.com/articles/multi-factor-authentication

## Install Heroku CLI

Heroku offers a CLI (command line) tool. This allows you to deploy and manage your project from the terminal.

```
npm install -g heroku
```

> Note: There are other ways to install, but `npm` is the most simple. As of Nov 2022, `npm` is the only option for M1 computers.

You will need to login from your terminal to use to use the `heroku` CLI command:

```
heroku login
```

This will open a web site in your browser to complete the login process.

## Create a Heroku Project 

You will need a create a new heroku project for every app you want to deploy.

> Note that your project must be setup as a git repository for these commands to work.


1. `cd` into your project directory, if needed
2. Run:
```
heroku create
```
3. Login in if prompted -- it might ask to open a browser
4. Type `git remote -v` to ensure it added successfully. You should see a remote called `heroku`

```
git push heroku main
```

To open your app in a browser:

```
heroku open
```


## App Updates: Environment Variables

Some things about your app will be different when running on heroku, vs on your own computer. We use _environment variables_, which can be set differently on different computers.

### What are Environment Variables?

Environment variables are just like JS variables, but they're live on your entire computer, not in your JS code. Your javascript code can access these variables using `process.env.SOME_ENV_VAR`.

Example:

```js
// script.js
console.log('My name is: ', process.env.MY_NAME)
```

```sh
# Set an environment variable in your terminal
$ export MY_NAME=Jonas

# Run your JS script
$ node ./script.js
> "My name is Jonas"
```


### Port

On Heroku, our apps will run on a different port every time we deploy. Heroku will set a `PORT` environment variable to tell us which port we need to listen on.

Your `server.js` file should have a line of code that looks something like this:

```js
// In server.js

// Use the `PORT` env var, if it's set
// otherwise, default to port 5000
const PORT = process.env.PORT || 5000;
// ...
app.listen(PORT, /* ... */);
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

See docs for [deploying a database on render.com](./render-db.md)

## Deploy Code Changes

To deploy new code changes to heroku, use git:

- Use `git add` and `git commit` to commit your code (as usual)
- Use `git push origin main` to push your code to Github (as usual)
- Use `git push heroku main` to deploy your code to heroku (new!)
- Run `heroku open` to open your app in a web browser.


> Note: You'll need to commit and push each time you make a change that you want to deploy to Heroku. **Keep in mind you CAN NOT pull from Heroku. This is not a replacement for GitHub!**

See [Heroku Docs](https://devcenter.heroku.com/articles/git) for more details on deploying with git.

> Note: It is best to fully test your code locally before deploying to Heroku. Bugs are much harder to troubleshoot on a live website


> BONUS: You can setup [_Github Integration_ on Heroku](https://devcenter.heroku.com/articles/github-integration) to automatically deploy whenever you push code to Github.


## Troubleshooting

Your app is running on heroku's servers, not on your computer. To see the logs from your deployed app, you will need to ask Heroku to send them to you:

```
heroku logs --tail
```

This will "follow" or "tail" logs, so you see new logs as they are written. Press `Ctrl-C` to stop following logs.

## Heroku CLI commands

- `heroku logs --tail` - Display error logs (`Ctrl-C` to exit)
- `heroku config` - Show basic app info
- `heroku restart` - Sometimes it helps to turn things off an on again
- `heroku open` - Opens the website for you project in the browser
- `heroku config:set MY_SUPER_SECRET=some-secret-value` - Set an environment variable
