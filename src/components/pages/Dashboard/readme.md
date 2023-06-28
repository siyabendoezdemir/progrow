# app-dashboard



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [profile-card](../../molecules/ProfileCard)
- [user-challenges](../../molecules/Challenges)
- [user-leaderboard](../../molecules/Leaderboard)

### Graph
```mermaid
graph TD;
  app-dashboard --> profile-card
  app-dashboard --> user-challenges
  app-dashboard --> user-leaderboard
  profile-card --> profile-avatar
  profile-card --> profile-level
  profile-card --> profile-login
  user-leaderboard --> profile-avatar
  style app-dashboard fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
