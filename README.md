# css-flex-align-items 1.0.6

Css module of single purpose classes for flex align items

#### Stats

319 | 24 | 72
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-flex-align-items
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/css-flex-align-items
```

ssh:
```
git clone git@github.com:tachyons-css/css-flex-align-items.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-flex-align-items";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/css-flex-align-items@1.0.6/css/css-flex-align-items.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-flex-align-items">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*
   FLEX ALIGN ITEMS
*/
.ai-fs { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }
.ai-fe { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }
.ai-c { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
.ai-b { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }
.ai-s { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }
.ai-i { -webkit-box-align: inherit; -ms-flex-align: inherit; align-items: inherit; }
@media screen and (min-width: 48em) {
 .ai-fs-ns { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }
 .ai-fe-ns { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }
 .ai-c-ns { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
 .ai-b-ns { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }
 .ai-s-ns { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }
 .ai-i-ns { -webkit-box-align: inherit; -ms-flex-align: inherit; align-items: inherit; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .ai-fs-m { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }
 .ai-fe-m { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }
 .ai-c-m { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
 .ai-b-m { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }
 .ai-s-m { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }
 .ai-i-m { -webkit-box-align: inherit; -ms-flex-align: inherit; align-items: inherit; }
}
@media screen and (min-width: 64em) {
 .ai-fs-l { -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; }
 .ai-fe-l { -webkit-box-align: end; -ms-flex-align: end; align-items: flex-end; }
 .ai-c-l { -webkit-box-align: center; -ms-flex-align: center; align-items: center; }
 .ai-b-l { -webkit-box-align: baseline; -ms-flex-align: baseline; align-items: baseline; }
 .ai-s-l { -webkit-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; }
 .ai-i-l { -webkit-box-align: inherit; -ms-flex-align: inherit; align-items: inherit; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC

