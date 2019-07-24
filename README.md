# express-mongoose-email-jobs-redis

Simple email example using "redis" for background jobs with mongodb and express

# Pre-requisites ( Optional )
- Docker with mongodb ( docker run --name mongodb -p 27017:27017 -d -t mongo )
- Docker with redis to jobs in background with "bee queue"  ( docker run --name redis -p 6379:6379-d -t redis:alpine )
- Insomnia ( https://insomnia.rest/download/ ) `Exist a file JSON para importe in project`

# Information
- In this example, you will "redis" the "bee queue" for background jobs. Need read documentation ( https://github.com/bee-queue/bee-queue )
- To test the email service was used mailtrap ( https://mailtrap.io/ )

# Usage
- To begin with, the following steps should be followed:
- Clone repository
- Run `yarn install`
- Rename the `.env.example` file to `.env`
- Configure the `.env` file
- Run `yarn run dev`
- in another console, run `yarn run queue`
