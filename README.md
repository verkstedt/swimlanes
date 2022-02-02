`@verkstedt/swimlanes`
======================

Installation
------------

```sh
npm install -g @verkstedt/swimlanes
```

Usage
-----

```terminal
Encode text (opens browser by default):
    swimlanes [OPTIONS] TEXT
    echo TEXT | swimlanes [OPTIONS]
Encode text stored in a file:
    swimlanes [OPTIONS] --file FILE
Decode URL or a hash into text:
    swimlanes --decode URL|HASH

Options:
  --decode, -d    Decode hash (by default we encode text)
  --no-open, -n   Do not open a browser after encoding text, just print the URL
  --file, -f      Read input from a file
```

API
---

```js
import {
  createSwimlanesHash,
  createSwimlanesUrl,
  decodeSwimlanesHash,
  decodeSwimlanesUrl
} from '@verkstedt/swimlanes'

createSwimlanesHash('title: Hello World') // → K8ksyUm1UvBIzcnJVwjPL8pJAQA=
createSwimlanesUrl('title: Hello World')  // → https://swimlanes.io/#K8ksyUm1UvBIzcnJVwjPL8pJAQA=
decodeSwimlanesHash('K8ksyUm1UvBIzcnJVwjPL8pJAQA=')                       // → title: Hello World
decodeSwimlanesHash('https://swimlanes.io/#K8ksyUm1UvBIzcnJVwjPL8pJAQA=') // → title: Hello World
```

License
-------

Copyright 2022 Verkstedt <info@verkstedt.com>. Licensed under [ISC license](./LICENSE).
