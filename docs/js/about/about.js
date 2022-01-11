
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
        $.getScript(metaPermalink + '/js/about/svg_reuse_refill.js', function () {
            console.log("Load was performed for js svg_reuse_refill.");
        });

    }

})(window, document, undefined);