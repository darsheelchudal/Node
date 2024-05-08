
const express = require('express');
const app = express();
const port = 4000;
const githubData = {
    "login": "darsheelchudal",
    "id": 74804981,
    "node_id": "MDQ6VXNlcjc0ODA0OTgx",
    "avatar_url": "https://avatars.githubusercontent.com/u/74804981?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/darsheelchudal",
    "html_url": "https://github.com/darsheelchudal",
    "followers_url": "https://api.github.com/users/darsheelchudal/followers",
    "following_url": "https://api.github.com/users/darsheelchudal/following{/other_user}",
    "gists_url": "https://api.github.com/users/darsheelchudal/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/darsheelchudal/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/darsheelchudal/subscriptions",
    "organizations_url": "https://api.github.com/users/darsheelchudal/orgs",
    "repos_url": "https://api.github.com/users/darsheelchudal/repos",
    "events_url": "https://api.github.com/users/darsheelchudal/events{/privacy}",
    "received_events_url": "https://api.github.com/users/darsheelchudal/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Darsheel Chudal",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2020-11-21T03:29:49Z",
    "updated_at": "2024-05-08T09:59:29Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/twitter',(req,res) => {
     res.send('darsheel');
})
app.get('/login', (req,res) => {
      res.send(`<h1>Please login at darsheel's website</h1>`);
})

app.get('/youtube', (req,res) => {
       res.send('<h2>Chai aur code</h2>');
})
app.get('/github', (req,res) => {
    res.json(githubData);
})
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
