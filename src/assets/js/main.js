import "./lib/polyfills";
import BYoutubeVideo from "./lib/youtubevideo";
+(function(){
    var script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
})();


window.onYouTubeIframeAPIReady = function() {
    var vid = new BYoutubeVideo('vd6uQgUuuQQ');
    document.body.appendChild(vid.$el);
};