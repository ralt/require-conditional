define(function () {

    function init(paths, ref) {
        paths = getCurrentPathModules(paths, ref);

        for (var i = 0, l = paths.length; i < l; i++) {
            require(paths[i].url, paths[i].callback);
        }
    }

    function getCurrentPathModules(paths, ref) {
        var currentPathModules = [];

        for (var i = 0, l = paths.length; i < l; i++) {
            if ((new RegExp(paths[i].path)).test(ref)) {
                currentPathModules.push(paths[i]);
            }
        }

        return currentPathModules;
    }

    return {
        init: init
    };

});
