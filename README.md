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

License
-------

Copyright 2022 Verkstedt <info@verkstedt.com>. Licensed under [ISC license](./LICENSE).
