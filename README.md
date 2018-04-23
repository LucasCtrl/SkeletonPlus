# SkeletonPlus

[![GitHub issues](https://img.shields.io/github/issues/mrdragonxm15/SkeletonPlus.svg)](https://github.com/mrdragonxm15/SkeletonPlus/issues)
[![GitHub stars](https://img.shields.io/github/stars/mrdragonxm15/SkeletonPlus.svg)](https://github.com/mrdragonxm15/SkeletonPlus/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mrdragonxm15/SkeletonPlus.svg)](https://github.com/mrdragonxm15/SkeletonPlus/network)

SkeletonPlus is a dead simple, responsive boilerplate to kickstart any responsive web projects.

# What's in the project?

The project contains a compiled `app.min.css` for using it directly and css files for those who would like to edit the files.

```
skeleton-plus/
├── dist/
│   ├── css/
|   |   ├── app.min.css
|   |   └── app.min.css.map
|   └── fonts/
|       ├── forkawesome-webfont.eot
|       ├── forkawesome-webfont.svg
|       ├── forkawesome-webfont.ttf
|       ├── forkawesome-webfont.woff
|       └── forkawesome-webfont.woff2
├── src/
│   ├── css/
|   |   ├── fork-awesome.min.css
|   |   ├── fork-awesome.min.css.map
|   |   ├── Normalize.css
|   |   ├── Skeleton.css
|   |   └── SkeletonPlusAddon.css
|   └── fonts/
|       ├── forkawesome-webfont.eot
|       ├── forkawesome-webfont.svg
|       ├── forkawesome-webfont.ttf
|       ├── forkawesome-webfont.woff
|       └── forkawesome-webfont.woff2
├── .eslint.js
├── .gitignore
├── gulpfile.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```
---

# Why it's awesome?

SkeletonPlus is simple and lightweight. It styles raw html elements with other awesome features like Grids, Callouts. Nothing more.

* Has less than 1000 lines of code (including comments and whitespaces)
* It's just a starting point. Not a UI framework

---

# Browser support

Skeleton-Plus supports all the browsers including the older versions of the listed browsers below. But still IE has a large degradation prior to IE9

* Chrome Latest
* Opera Latest
* IE Latest
* FireFox Latest
* Safari Latest

---

# Getting Started

#### CDN

You can simply add the line inside the `<head>` tag. No need of downloading, no need of compiling. Just plug and play

```html
<link rel="stylesheet" href="https://cdn.rawgit.com/MrDragonXM15/SkeletonPlus/master/dist/css/app.min.css" type="text/css" />
```
#### From files

You can simply add the line inside the `<head>` tag.

```html
<link rel="stylesheet" type="text/css" media="screen" href="dist/css/app.css" />
```

---

# Development

First, install all the dependencies : 

```node
$ npm install gulp -g && npm install
```

Add some cool stuff in the project

```node
$ gulp dev
```

And then, you just need to concat all files in one single file

```node
$ gulp build
```

---

# Credits

A project by **[LucasAlt](https://lucasalt.fr)**<br>
Skeleton by [dhg](https://github.com/dhg/Skeleton)<br>
Normalize.css by [necolas](https://github.com/necolas/normalize.css/)<br>
ForkAwesome by [ForkAwesome](https://github.com/ForkAwesome)

---

# License
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mrdragonxm15/SkeletonPlus/master/LICENSE)
