---
title: "Using private image from Google Container Registry (Docker part 1)"
date: "2019-08-15"
author: "Lance Pu"
path: "/blog/docker-gcr-image"
tags: ["docker", "gcr", "container", "windows", "part1"]
---

I was recently introduced to using Docker to containerize applications as part of a CD/CI pipeline. This will be the first part of my multipart series on using Docker, CircleCI,Google Container Registry (GCR) and other tools for this pipeline. 

#### -- Other Parts --
#### ------------------

This part is sort of the last part of the pipeline. Having already uploaded the Docker image to GCR, we will be using `docker-compose` to load that private image from GCR to use locally.

I am developing in Windows environment, but these tools are readily available for many common operating systems.

#### A few tools we need for this:
1. Google Cloud SDK: You can download it [here](https://cloud.google.com/sdk/docs/quickstart-windows)
2. Docker-Compose, which is part of the Docker package, download [here](https://docs.docker.com/docker-for-windows/install/)

#### Setup:
1. After Google Cloud SDK has been installed, open up the console using windows `cmd` and navigate to `C:\Program Files (x86)\Google\Cloud SDK>`
2. run `gcloud auth configure-docker` to add the necessary configurations to access the private GCR images. The configurations will be stored in `~/.docker/config.json`.
3. Set up a `docker-compose.yml` file in the root of your project, add the following:
```dockerfile
version: '3'
services:
    frontend:
        image: gcr.io/[projectID]/[image]:latest
        command: npm start
        ports:
            - 3799:3000
```

This is a frontend React application, so when we pull the image down from GCR, we run `npm start` to run the development environment. Port `3799` is the port exposed by docker container, and port `3000` is the port this application runs on. After the image launches, you can navigate to `localhost:3799` to see the site.

***Note - Port 3799 is a random port I chose, you can select others***

4. Run `docker-compose up` in the terminal, if everything is configured correctly, the image will launch.

Thanks for reading!