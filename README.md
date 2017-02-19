# Use the Twitch.tv JSON API
```
FreeCodeCamp
|-- Front End Development Certification
    |-- Intermediate Front End Development Projects
        |-- Use the Twitchtv JSON API
```

## Objective
Build a [CodePen.io](https://codepen.io/) app that is functionally similar to [this](https://codepen.io/FreeCodeCamp/full/Myvqmo/).

## User Stories
* I can see whether Free Code Camp is currently streaming on Twitch.tv.
* I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
* If a Twitch user is currently streaming, I can see additional details about what they are streaming.
* I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding `brunofin` and `comster404` to your array of Twitch streamers.

## Hints
* See an example call to Twitch.tv's JSON API [here](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Front-End-Project-Use-Twitchtv-JSON-API).
* The relevant documentation about this API call is [here](https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#get-streamschannel).
* Here's an array of the Twitch.tv usernames of people who regularly stream: `["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]`

## Update
Due to a change in conditions on API usage explained [here](https://blog.twitch.tv/client-id-required-for-kraken-api-calls-afbb8e95f843#.f8hipkht1) Twitch.tv now requires an API key, but we've built a workaround. Use https://wind-bow.gomix.me/twitch-api instead of twitch's API base URL (i.e. https://api.twitch.tv/kraken) and you'll still be able to get account information, without needing to sign up for an API key.
