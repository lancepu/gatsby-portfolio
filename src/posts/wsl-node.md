---
title: "Developing NodeJS using Windows Subsystem for Linux (WSL)"
date: "2019-08-05"
author: "Lance Pu"
path: "/blog/wsl-node"
tags: ["node", "nodejs", "javascript", "wsl"]
---

Since I'm using `Windows Subsystem for Linux` or `wsl` for short, I find that certain things need to be configured differently. 
Why, you ask, should I use `wsl` instead of other tools that are so much simpler to configure on Windows? Because life is about learning to do new things, after you achieve them, it will give you a sense of accomplishment, or so I feel...

My previous article on how to setup and configure `wsl` on Windows can be find [here](/blog/setup-terminal), if you are curious...

I will add other/link articles to this if I find any other differences using `wsl`, but for now, I'm only talking about `NodeJS`.

After I finally setup and configured `wsl` and `hyper`, I wanted to share the steps that I used, so I eagerly cloned my repo to the new machine trying to get started, and...issues...

On my previous experience using Windows and NodeJS, I download the package from the official [NodeJS site](https://nodejs.org/en/) and install, then I'm good to go. But...Since my terminal is on the Linux subsystem, I'm essentially running Node on Linux, so there's a different way to install node:

1. Get the official node setup file
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```
**Note the `setup_10` here, this means you are downloading the latest node version 10.16.1 (LTS as of the time of this article)**

2. Install node using 
```
sudo apt-get install -y nodejs
```
3. After everything is installed, check your node and npm version by running `node --version` and `npm --version` respectively.

You should now have a working Node environment, on your Linux Subsystem. Happy coding!⌨️

Thanks for reading!