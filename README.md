# CSS FLEX ALIGN ITEMS

  Mobile-first classes for css-flex-align-items.
  Set the desired css-flex-align-items on any element for any breakpoint.
  Base class names are namespaced across three breakpoints:

*  -ns = not-small (covers everything larger than mobile)
*  -m  = medium
*  -l  = large

## Install
Grab the css partial from github and include it in your project or alternatively
you can install it via npm:
```
npm install --save-dev css-flex-align-items
```
View on [npm](https://www.npmjs.org/package/css-flex-align-items)


## File Size

1.0K flex-align-items.css
824B flex-align-items.min.css
210B minified and gzipped

## The Code
```
.ai-fs { align-items: flex-start; }
.ai-fe { align-items: flex-end; }
.ai-c {  align-items: center; }
.ai-b {  align-items: baseline; }
.ai-s {  align-items: stretch; }
.ai-i {  align-items: inherit; }

@media screen and (min-width: 48em) {
  .ai-fs-ns { align-items: flex-start; }
  .ai-fe-ns { align-items: flex-end; }
  .ai-c-ns {  align-items: center; }
  .ai-b-ns {  align-items: baseline; }
  .ai-s-ns {  align-items: stretch; }
  .ai-i-ns {  align-items: inherit; }
}

@media screen and (min-width: 48em) and (max-width: 64em) {
  .ai-fs-m { align-items: flex-start; }
  .ai-fe-m { align-items: flex-end; }
  .ai-c-m {  align-items: center; }
  .ai-b-m {  align-items: baseline; }
  .ai-s-m {  align-items: stretch; }
  .ai-i-m {  align-items: inherit; }
}

@media screen and (min-width: 64em)  {
  .ai-fs-l { align-items: flex-start; }
  .ai-fe-l { align-items: flex-end; }
  .ai-c-l {  align-items: center; }
  .ai-b-l {  align-items: baseline; }
  .ai-s-l {  align-items: stretch; }
  .ai-i-l {  align-items: inherit; }
}

```

## Author

[http://mrmrs.cc - Entire internet gateway to all things mrmrs](http://mrmrs.cc)
[http://mrmrs.io - Open source projects](http://mrmrs.io)

## License

The MIT License (MIT)

Copyright (c) 2015 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

