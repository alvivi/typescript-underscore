
Underscore ambient declarations for TypeScript
==============================================

[underscore.js](http://underscorejs.org/) is a utility-belt library for
JavaScript that provides a lot of the functional programming support that you
would expect in [Prototype.js](http://prototypejs.org/api), but without
extending any of the built-in JavaScript objects.

Underscore provides 80-odd functions that support both the usual functional
suspects: **map**, **select**, **invoke** — as well as more specialized helpers:
function binding, javascript templating, deep equality testing, and so on. It
delegates to built-in functions, if present, so modern browsers will use the
native implementations of **forEach**, **map**, **reduce**, **filter**,
**every**, **some** and **indexOf**.

These ambient declaration source files add statically type information for use
[underscore.js](http://underscorejs.org/) in
[TypeScript](http://www.typescriptlang.org/).

Usage
-----

To use *underscore.js* in the browser just add a reference comment on the top of
the sources that use underscore.

```
/// <reference path="underscore.browser.d.ts" />

console.log(_.range(10));
```

If you are using underscore.js in a [node.js](http://nodejs.org/) environment,
then you have to add a reference comment and import the underscore module where
you need it.

```
/// <reference path="underscore.d.ts" />

import _ = module("underscore");
console.log(_.range(10));
```

You can also use this syntax on a browser through
[require.js](http://requirejs.org/).
