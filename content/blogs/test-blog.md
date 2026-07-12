---
title: Test Blog
date: 12-07-2026
description: This is a blog for testing purposes. It contains an example of each markdown element I would reasonably expect to use in my blogs.
---

# Title

This is an introductory paragraph. Let's see how it's rendered. **This is some bold text**. This is some _italic text_. This is an [inline link](https://example.com). This is some `inlined code`. This is ~~text with a strike-through~~. Lorem ipsum yada yada.

---

This is an introductory paragraph. Let's see how it's rendered. **This is some bold text**. This is some _italic text_. This is an [inline link](https://example.com). This is some `inlined code`. This is ~~text with a strike-through~~. Lorem ipsum yada yada.

## Section Header

### Sub-Section Header

This is a random paragraph. Let's see how it's rendered. **This is some bold text**. This is some _italic text_. This is an [inline link](https://example.com). This is some `inlined code`. This is ~~text with a strike-through~~. Lorem ipsum yada yada yada.

This is a second paragraph. Let's see how it's rendered. **This is some bold text**. This is some _italic text_. This is an [inline link](https://example.com). This is some `inlined code`. This is ~~text with a strike-through~~. Lorem ipsum yada yada.

---

## Image

![This is alt text for an image](https://raw.githubusercontent.com/aryanpingle/Runic/master/public/images/banner.jpg)

## Blockquotes

> This is a quote by some famous guy.  
> Two spaces at the end make sure this line is on a new one.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

Here's a list that's easier to write:

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```javascript
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
_here be dragons_
:::
