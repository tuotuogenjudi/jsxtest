# jsxtest

> My prime Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

说明： 此工程是为了测试jsx在nuxt2.0框架报错，但是经过测试并没有报错。略带修改了eslint对vue的配置。
在从nuxt1升级到nuxt2时， 页面对于jsx语法报错；
解决方法：把vue-loader 升版本为"vue-loader": "^15.4.2", 
