---
title: "Override Ant Design Theme"
date: "2019-07-19"
author: "Lance Pu"
path: "/blog/override-antd-theme"
tags: ["theme", "ant design"]
---

For writing my [small utilities](/tools), I am using [Ant Design](https://ant.design/), a popular UI Library for React that provides many useful components.

To add Ant Design to Gatsby, I am using the [gatsby-plugin-antd](https://www.npmjs.com/package/gatsby-plugin-antd) plugin.

```javascript
npm i gatsby-plugin-antd
```

But here comes the issue...

Since Ant Design provides the whole UI experience, it modifies some global styles. Since my site already has a defined style, they were overridden by Ant Design's styles. All my `anchor` tags were turned to a shade of blue (`#1890ff` to be exact) and `text-decoration` was also changed to `None`.

Luckily, Ant Design provides the option to override it's styles using [Less](http://lesscss.org/).

We first need to install some more packages:

```javascript
npm i less gatsby-plugin-less
```

Now we need to modify the `gatsby-plugin-antd` plugin in your `gatsby-config.js` file to use `Less`:

```javascript
{
    resolve: 'gatsby-plugin-antd',
    options: {
        style: true
    }
}
```

Now that this is done, we can start the override...

```javascript
{
    resolve: `gatsby-plugin-less`,
    options: {
    javascriptEnabled: true,
    modifyVars: {
        'link-color': 'inherit;',
        'link-decoration': 'underline',
    }   
    }
}
```
As you can probably guess, `link-color` refers to the `anchor` tag color and `link-decoration` refers to the `anchor text-decoration`.

Now my site style is back to normal.

*If you are not using `gatsby-plugin-antd`, you will need to do a bit more configuration and install some more packages. You can check the details [here](https://stackoverflow.com/questions/51831582/change-the-theme-of-antd-when-using-gatsbyjs/51913211#51913211)*


Thanks for reading!