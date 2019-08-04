---
title: "Setup Terminal for Windows"
date: "2019-08-05"
author: "Lance Pu"
path: "/blog/setup-terminal"
tags: ["zsh", "terminal", "windows", "hyper"]
---

I recently moved to a Windows environment, Windows 10 to be exact, and trying to set up a Unix terminal.
Since Windows is not Unix based, things can be a bit difficult...

There's a simpler way to use Unix commands on Windows, called [`Git Bash`](https://git-scm.com/downloads), but I wanted to have a pretty terminal with themes using [`oh my zsh`](https://github.com/robbyrussell/oh-my-zsh) (...and to torture myself)

There are many articles online for how to set up `zsh` on Windows, I am listing the steps below that worked for me...

###Install Windows Subsystem for Linux
1. `Control Panel` => `Programs` => `Turn windows features on and off`
2. Check the checkbox for `Windows Subsystem for Linux`
3. Wait for install to finish and restart computer

###Install Linux
1. Go to `Microsoft Store`
2. Search for `Linux`
There are many flavors of Linux to choose from, I'm using `Ubuntu 18.04LTS` (`LTS` stands for `Long Term Support`)

###Install Hyper terminal
1. [https://hyper.is/](https://hyper.is/)

###Install Powerline Font for Windows
1. Go to [Powerline Fronts Github Page](https://github.com/powerline/fonts)
2. Download the repo as `ZIP`
3. Extract the zip file
4. Run `Powershell` as `Administrator` and navigate to the extracted fonts folder
5. To install all the fonts using the provided script, run the following command `as Administrator` using `Powershell`:
```
powershell -ExecutionPolicy Bypass .\install.ps1
```
**This command temporarily set the `ExecutionPolicy` in order to execute a foreign script, you can double check your `ExecutionPolicy` remains unchanged by using `Get-ExecutionPolicy`, default is `Restricted`**

###Configure Linux
1. Launch your installed Linux. (**If it's the first time, you will need to set a username and password**)
2. Install `ZSH` by using `sudo apt-get install zsh`
3. Open your bash profile, `nano ~/.bashrc`
4. Add `bash -c zsh` to the top of the file.
5. `ctrl + o` to save the file, `ctrl + x` to exit nano
6. Install `Oh My Zsh` using `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
7. Default theme of `Oh My Zsh` is `robbyrussel`, but another popular one is `agnoster`. You can change it by editing the `~/.zshrc` file.

###Configure Hyper
1. Launch `Hyper`
2. Open `Preferences` (`ctrl + ,` or `Right click` on the terminal window and select `Preferences`)
3. Look for `plugins` and edit:
```javascript
plugins: [
    "verminal",
    "hyperpower",
    "hyper-search",
]
```
**`verminal` is a terminal theme for hyper, `hyperpower` gives your terminal a little *pop*, and `hyper-search` give you a search window on the Terminal (`ctrl + shift + f` in Windows), you can search for them to see what they do**
4. Look for `fontSize` and put the following above it:
```javascript
verminal: {
    fontSize: 14,
    fontFamily: "Source Code Pro for Powerline"
}
```
**Remember the `Powerline` fonts we installed earlier? You can choose any of them**
5. Look for `shell` and edit the following:
```javascript
shell: 'C:\\Windows\\System32\\bash.exe',
```
6. Look for `shellArgs` and edit the following:
```javascript
shellArgs: ['--login', '-c', 'zsh'],
```
7. Restart `Hyper`, and if everything is configured correctly, enjoy your shiny new terminal! 🎉🎉🎉

**One issue I find while using Windows Subsystem for Linux is the configuration difference for developing NodeJS, I have a [seperate article](/blog/wsl-node) talking about that**

Thanks for reading!