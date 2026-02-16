# css-flex-align-items

Functional CSS for flex-align-items

## Filesize

| File | Size |
|------|------|
| `dist/flex-align-items.css` | 1305 bytes |
| `dist/flex-align-items.min.css` | 967 bytes (204 Gzipped) |

## Install

```sh
npm install css-flex-align-items
```

## Usage

### Import

```css
@import "css-flex-align-items";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/css-flex-align-items/dist/flex-align-items.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/css-flex-align-items/dist/flex-align-items.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|
| `.align-start` | `align-items: flex-start;` |
| `.align-end` | `align-items: flex-end;` |
| `.align-center` | `align-items: center;` |
| `.align-baseline` | `align-items: baseline;` |
| `.align-stretch` | `align-items: stretch;` |
| `.align-inherit` | `align-items: inherit;` |
| `.align-start-s` | `align-items: flex-start;` |
| `.align-end-s` | `align-items: flex-end;` |
| `.align-center-s` | `align-items: center;` |
| `.align-baseline-s` | `align-items: baseline;` |
| `.align-stretch-s` | `align-items: stretch;` |
| `.align-inherit-s` | `align-items: inherit;` |
| `.align-start-m` | `align-items: flex-start;` |
| `.align-end-m` | `align-items: flex-end;` |
| `.align-center-m` | `align-items: center;` |
| `.align-baseline-m` | `align-items: baseline;` |
| `.align-stretch-m` | `align-items: stretch;` |
| `.align-inherit-m` | `align-items: inherit;` |
| `.align-start-l` | `align-items: flex-start;` |
| `.align-end-l` | `align-items: flex-end;` |
| `.align-center-l` | `align-items: center;` |
| `.align-baseline-l` | `align-items: baseline;` |
| `.align-stretch-l` | `align-items: stretch;` |
| `.align-inherit-l` | `align-items: inherit;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.align-start-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/flex-align-items.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/flex-align-items.css` — formatted
- `dist/flex-align-items.min.css` — minified

## License

MIT
