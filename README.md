# css-flex-align-items 0.0.7

Css module of single purpose classes for flex align items

#### Stats

256 | 24 | 24
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-flex-align-items
```

#### With Git

```
git clone https://github.com/tachyons-css/css-flex-align-items
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-flex-align-items";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-flex-align-items">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*
   FLEX ALIGN ITEMS
*/
.ai-fs { align-items: flex-start; }
.ai-fe { align-items: flex-end; }
.ai-c { align-items: center; }
.ai-b { align-items: baseline; }
.ai-s { align-items: stretch; }
.ai-i { align-items: inherit; }
@media screen and (min-width: 48em) {
 .ai-fs-ns { align-items: flex-start; }
 .ai-fe-ns { align-items: flex-end; }
 .ai-c-ns { align-items: center; }
 .ai-b-ns { align-items: baseline; }
 .ai-s-ns { align-items: stretch; }
 .ai-i-ns { align-items: inherit; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .ai-fs-m { align-items: flex-start; }
 .ai-fe-m { align-items: flex-end; }
 .ai-c-m { align-items: center; }
 .ai-b-m { align-items: baseline; }
 .ai-s-m { align-items: stretch; }
 .ai-i-m { align-items: inherit; }
}
@media screen and (min-width: 64em) {
 .ai-fs-l { align-items: flex-start; }
 .ai-fe-l { align-items: flex-end; }
 .ai-c-l { align-items: center; }
 .ai-b-l { align-items: baseline; }
 .ai-s-l { align-items: stretch; }
 .ai-i-l { align-items: inherit; }
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
