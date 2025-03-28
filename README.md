# Angular CI/CD

## Link to the deployed application
https://iridescent-biscotti-c3e88b.netlify.app/

## Learning objectives

- Be able to use github actions to create pipelines
- Be able to deploy an Angular application to Netlify

## Setting up

- Fork and clone the repository
- Create a [netlify account](https://www.netlify.com/)

### Generating a netlify auth token

In order to use github actions to deploy the netlify website we need an auth token.

- Go to [Applications > Personal access tokens](https://app.netlify.com/user/applications#personal-access-tokens)
- Select "new personal access token"
- Provide a meaningful description of the token
- Select the desired expiration date
- Click generate token

Save this token somewhere as we will need it later. Once a token is created (and you navigate away from the page) it will be impossible to get that token again. If you lose the token, you will need to create a new one.

## Instructions

Using what was covered in the morning - create a github action that will deploy the website using netlify
