---
title: "Windows Terminal Setup with Git Bash and Hyper"
date: "2019-08-07"
author: "Lance Pu"
path: "/blog/gitbash-hyper"
tags: ["terminal", "git-bash", "hyper"]
---

Okay... I'm switching back...

A few days back I wrote an article talking about using the Windows Subsystem for Linux, zsh, oh-my-zsh and Hyper as my Windows terminal/development solution. However, after using it a few days, I find that it makes my life harder...

First of all, I have to install all my packages in Linux, such as NodeJS and Python (I know...Ubuntu comes with Python preinstalled, but I need to upgrade it to > 3.6 to get some new features working). Secondly, my Windows directory is located at `/mnt/c/Users/lance`, this makes navigating between Linux and Windows tedious, and some of my projects references my local Windows directory, so I have to change all that...tedious...

You can see my previous setup of Hyper and zsh [here](/blog/setup-terminal)

###Install Git Bash
Download [`Git Bash`](https://git-scm.com/downloads)

###Install Hyper
Download [https://hyper.is/](https://hyper.is/)

###Configure Hyper to use Git Bash
1. Launch `Hyper`
2. Open `Preferences` (`ctrl + ,` or `Right click` on the terminal window and select `Preferences`)
3. Look for `shell` and configure the following:
```
shell: 'C:\\Program Files\\Git\\bin\\sh.exe',
```
4. Look for `shellArgs` and configure the following:
```
shellArgs: ['--login', '-i'],
```
***OPTIONAL*** - You can also install some Hyper plugins under the `plugins` section in `Preferences`, you can refer to my [previous article](/blog/setup-terminal) about plugins.

**That's it! Much simplier than using WSL**

####Bonus
Adding `Alias`.
As some of you might know, aliases are like shortcuts to execute commands. Git Bash has included two shortcuts you can use, `ll` and `ls`. If you type `alias` on the terminal, you will see a list of preconfigured shortcuts.

To add more, you need to configure the `.bashrc` file. If your computer does not already have it, make one by using `touch ~/.bashrc`

1. Open the `.bashrc` file using a code editor and add:
Here are some of mine:
```
alias startagent="eval $(ssh-agent -s)"
alias ll="ls -l -a"
```
The `startagent` alias starts a ssh-agent for you to add sshkey to.
The `ll` alias I modified to show hidden files using the `-a` switch

**NOTE** - There's no space between `alias name` `equal sign (=)` and `command`

2. After you save and close the `.bashrc` file, use the command `source ~/.bashrc` enable your changes, you can also restart your Terminal.
3. Type `alias` again in the terminal, if everything is configured correctly, you will see your customized alias on the list.
4. To use your alias, simply type the `alias name`, such as `startagent` on the terminal.

Thanks for reading!