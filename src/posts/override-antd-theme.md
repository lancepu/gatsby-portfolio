---
title: "Override Ant Design Theme"
date: "2019-07-19"
author: "Lance Pu"
path: "/blog/override-antd-theme"
tags: ["theme", "ant design", "javascript"]
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
        "radio-button-checked-bg": "var(--btnBg)",
    }
    }
}
```

As you can probably guess, `link-color` refers to the `anchor` tag color and `link-decoration` refers to the `anchor text-decoration`.

Since my site is using both light and dark themes, you can declare a variable, like `--btnBg` to assign to the override variable:

```css
body {
  /* a shade of pink */
  --btnBg: #fe5186;
}

.dark-theme {
  /* lighter shade of pink */
  --btnBg: #ffa7c4;
}
```

This way, when the theme is switched, the color of the override will change accordingly.

**_Please note that this variable assignment does not work for some Ant Design variables, such as `primary-color` or `radio-dot-color`. It seems that these variables were referenced in some functions so you will get a compile error when trying to override with a variable. If you know how to resolve this, please send me an email and let me know, it would help me greatly!_**

Now my site style is back to normal.

_If you are not using `gatsby-plugin-antd`, you will need to do a bit more configuration and install some more packages. You can check the details [here](https://stackoverflow.com/questions/51831582/change-the-theme-of-antd-when-using-gatsbyjs/51913211#51913211)_

Thanks for reading!
