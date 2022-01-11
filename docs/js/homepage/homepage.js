
(function (window, document, undefined) {

    // code that should be taken care of right away

    window.onload = init;

    function init() {
        // the code to be called when the dom has loaded
        // #document has its nodes


        function getMetaPermalink() {
            var metas = document.getElementsByTagName('meta');

            for (i = 0; i < metas.length; i++) {
                if (metas[i].getAttribute("name") == "permalink") {
                    return metas[i].getAttribute("content");
                }
            }

            return "failed to access...";
        }

        var metaPermalink = getMetaPermalink();



        // jQuery
        $.getScript(metaPermalink + '/js/homepage/svg_bottles_animation.js', function () {
            console.log("Load was performed for js svg_bottles_animation.");
        });

        $.getScript(metaPermalink + '/js/homepage/svg_refill_setup.js', function () {
            console.log("Load was performed for js svg_refill_setup.");
        });

        $.getScript(metaPermalink + '/js/homepage/svg_circular_robotics.js', function () {
            console.log("Load was performed for js svg_circular_robotics.");
        });

        // var svg_team_robot_js_path = metaPermalink.concat("js/homepage/svg_team_robot.js");

        $.getScript(metaPermalink + "js/homepage/svg_team_robot.js", function () {
            console.log("Load was performed for js svg_team_robot.");
        });

    }

})(window, document, undefined);