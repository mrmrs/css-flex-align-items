# css-flex-align-items

Functional CSS for flex-align-items

## Filesize

| File | Size |
|------|------|
| `dist/flex-align-items.css` | 1121 bytes |
| `dist/flex-align-items.min.css` | 783 bytes (195 Gzipped) |

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
| `.ai-fs` | `align-items: flex-start;` |
| `.ai-fe` | `align-items: flex-end;` |
| `.ai-c` | `align-items: center;` |
| `.ai-b` | `align-items: baseline;` |
| `.ai-s` | `align-items: stretch;` |
| `.ai-i` | `align-items: inherit;` |
| `.ai-fs-s` | `align-items: flex-start;` |
| `.ai-fe-s` | `align-items: flex-end;` |
| `.ai-c-s` | `align-items: center;` |
| `.ai-b-s` | `align-items: baseline;` |
| `.ai-s-s` | `align-items: stretch;` |
| `.ai-i-s` | `align-items: inherit;` |
| `.ai-fs-m` | `align-items: flex-start;` |
| `.ai-fe-m` | `align-items: flex-end;` |
| `.ai-c-m` | `align-items: center;` |
| `.ai-b-m` | `align-items: baseline;` |
| `.ai-s-m` | `align-items: stretch;` |
| `.ai-i-m` | `align-items: inherit;` |
| `.ai-fs-l` | `align-items: flex-start;` |
| `.ai-fe-l` | `align-items: flex-end;` |
| `.ai-c-l` | `align-items: center;` |
| `.ai-b-l` | `align-items: baseline;` |
| `.ai-s-l` | `align-items: stretch;` |
| `.ai-i-l` | `align-items: inherit;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.ai-fs-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/flex-align-items.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/flex-align-items.css` — formatted
- `dist/flex-align-items.min.css` — minified

## License

MIT
