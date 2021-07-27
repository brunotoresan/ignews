<p align="center">
    <img width="70%" src="https://imgur.com/fKNR6oI.png" alt="Project Image"/>
</p>

<h1 align="center">ignews</h1>

<p align="center">
  <p align="center">Rocketseat - Ignite - <strong>Chapter III</strong></p>
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-installation-and-execution">Installation and execution</a>
</p>

## 🔥 About the project
This is a subscription based React news app, where users can sign in with their GitHub account, see the post's previews, and become customers! Those who choose to become customers pay a recurring price with Stripe and are able to see the posts in its integrity. In this project I learned and practiced a lot of important concepts including: 
- Developing a **JAM Stack app** (Javascript, Api, and Markup)
- Third party authentication for login
- Using the `Next.JS` framework in order to use both **SSR** (Server Side Rendering) and **SSG** (Static Site Generation)
- Using `FaunaDB` to store users and subscription data in a Non-SQL database great for serverless applications
- Using **Stripe** to make easy and reliable payments via API
- Using **Prismic CMS** in order to store and edit the app's post


## 💻 Installation and local execution
To install: `yarn install`<br>
To run: `yarn dev`<br>
Add environment variables in: `.env.local`<br>
To listen to Stripe webhooks: `stripe listen --forward-to localhost:3000/api/webhooks`
