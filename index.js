require('dotenv').config() // or import 'dotenv/config' if you're using ES6
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "anuragxgithub",
  "id": 119296537,
  "node_id": "U_kgDOBxxSGQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/119296537?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/anuragxgithub",
  "html_url": "https://github.com/anuragxgithub",
  "followers_url": "https://api.github.com/users/anuragxgithub/followers",
  "following_url": "https://api.github.com/users/anuragxgithub/following{/other_user}",
  "gists_url": "https://api.github.com/users/anuragxgithub/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/anuragxgithub/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/anuragxgithub/subscriptions",
  "organizations_url": "https://api.github.com/users/anuragxgithub/orgs",
  "repos_url": "https://api.github.com/users/anuragxgithub/repos",
  "events_url": "https://api.github.com/users/anuragxgithub/events{/privacy}",
  "received_events_url": "https://api.github.com/users/anuragxgithub/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Anurag Jaiswal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "anuragxtwt",
  "public_repos": 6,
  "public_gists": 0,
  "followers": 3,
  "following": 2,
  "created_at": "2022-11-28T09:59:56Z",
  "updated_at": "2026-02-22T12:51:51Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('anuragxtwt')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login here')
})

app.get('/youtube', (req, res) => {
  res.send('youtube.com')
})

app.get('/github', (req, res)=> {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
