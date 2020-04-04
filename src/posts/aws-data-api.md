---
title: "Using AWS Data API to Automate Birthday Shoutouts"
date: "2020-04-02"
author: "Lance Pu"
path: "/blog/aws-data-api"
tags: ["aws", "dataapi", "slack", "rds"]
---

We have a practice of celebrating coworkers' birthdays in my company, so there some coworkers who keep track of teammates' birthdays and announce it on the day of someone's birthday on our Slack channel. So I thought, why since people are not robots, why not have a robot a that can automatically keep track of people's birthdays and make a shoutout so people don't have to remember to.

The parts of the automated birthday shoutout bot are the following:
1. Keep a record of people's birthdays.
2. Able to run automatically.
3. Send out Slack alert.
4. And as a bonus, I shouldn't need to manage the bot after it's built, because I'm lazy 😁

### Solution
To satisfy #4 of my requirement, I've decided to use a all cloud solution. Since I've been using AWS for a while for work, it has all the components to satisfy my requirements.
After a bit of research, I came up with the following:
1. Use `RDS` to keep a record of people's birthdays, since I'm more familiar with MySQL.
2. Have `Cloud Watch Events` to trigger the bot automatically on a schedule.
3. Have a `Lambda` function to query the DB and send out Slack alert via [Slack Webhooks](https://api.slack.com/messaging/webhooks)
Since all of the components live on the cloud and AWS has a very generous free tier of services, it's a no-brainer.

One important part that ties everything together is the new [Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html)

I am using `Aurora Serverless RDS for MySQL`, the good thing about this type of server is that it automatically spins up and down depending on the demand, so it is ecomonical for my needs because I am only doing **one query per day** to the database.

The Data API was introduced in 2019, so it is relatively new. The benefit of the Data API is that I don't have to code database connection. I can securely query the database by sending it a query via the API and get results returned as JSON. This works perfectly with my simple Lambda function.

Data API also enables me to use the `Query Editor` under my Aurora Serverless RDS, so I can setup my tables and insert data directly from the AWS console.

After coding the Lambda, setting up propert permissions, and hooking everything up, the bot is ALIVE!
It is currently still working "hard" everyday to provide us with the most up-to-date information on everyone's birthdays.

A special shout to **Jeremy Daly**, who wrote a very detailed, and frequent updated, article on using the Data API, please go check it out [here](https://www.jeremydaly.com/aurora-serverless-data-api-a-first-look/)

You can find the source code and some setup instructions in my [repo](https://github.com/lancepu/birthday-shoutouts)

Thanks for reading!
