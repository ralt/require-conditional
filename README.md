Conditional loader for require.js
===

What is it?
---

This require.js module is quite simple: it just allows you to define
a list of modules to load or not depending on the path -- path being the url, the pathname,
or actually any reference you want.

Usage
---

Here is how to use it:

    define(['conditional-loader'], function(loader) {
        var modules = [{
            // Any path
            path: '',

            // The url of the module
            url: 'some/module',

            // The callback when the module is loaded
            callback: function(mod) {
                mod.init();
            }
        }];

        loader.init(modules, window.location.pathname);
    });

The module `some/module` will be loaded on any path and the `callback` function will
be executed on its loading. It gets more interesting with the following case:

    var modules = [{
        path: 'some/path',
        url: 'some/module',
        callback: function(mod) {
            mod.init();
        }
    }];

There, the module will only be loaded on the `some/path` page.

That's about everything there is to this small module.

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

Distributed under the MIT License.
