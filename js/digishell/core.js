define(function (require) {

    require("./logo");
    var util = require("./util"),
        router = require("./router"),
        widgets = require("./widgets"),
        sidebar = require("./sidebar"),
        theme = require("./theme"),
        fisheye = require("./fisheye"),
        iutil = require("./iutil");


    $(function () {
        $(".user-name").text((function (name) {
            var names = name.split(" ");
            for (var n = 0, s; s = names[n]; n++) {
                names[n] = s.charAt(0).toUpperCase() + s.slice(1);
            }
            return names.join(" ");
        })(util.getUserName() || util.getUserId()));
    });

    $(document).ready(function(){
        $('#dock').Fisheye({
            maxWidth: 50,
            items: 'a',
            itemsText: 'span',
            container: '.dock-container',
            itemWidth: 60,
            proximity: 90,
            halign : 'left'
        })
    });

    return {
        util:util,
        router:router,
        widgets:widgets,
        sidebar:sidebar,
        theme:theme
    };
});