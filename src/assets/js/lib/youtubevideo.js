import BVideo from "./bvideo";

var ProgressUpdater = (function(){
    var videos = [],
        frameId = undefined;

    function watch(video)
    {
        videos.push(video);
        if (!frameId)
            frameId = requestAnimationFrame(update);
    }
    function unwatch(video)
    {
        var idx = videos.indexOf(video);
        if (idx == -1)
            return;
        videos.splice(idx,1);
        if (videos.length == 0){
            cancelAnimationFrame(frameId);
            frameId = undefined;
        }
    }
    function update()
    {
        videos.forEach(function(video){
            video.position = video.player.getCurrentTime();
        });
        frameId = undefined;
        if (videos.length > 0)
            frameId = requestAnimationFrame(update);
    }

    return {
        watch: watch,
        unwatch: unwatch
    };
})();


class BYoutubeVideo extends BVideo
{
    constructor(youtubeId)
    {
        super();

        var $element = document.createElement('div');
        this.player = new YT.Player($element, {
            height: '100%',
            width: '100%',
            videoId: youtubeId,
            events: {
                'onReady': this._onPlayerReady.bind(this),
                'onStateChange': this._onStateChange.bind(this)
            }
        });
        this.$el.appendChild(this.player.getIframe());
    }
    _onPlayerReady(event) {
        this.duration = this.player.getDuration();
        var player = event.target;
        this.state = player.getPlayerState();
        player.seekTo(0);
        player.pauseVideo();
    }
    _onStateChange(event)
    {
        console.log(event.type, event);
    }
}

export default BYoutubeVideo;


// todo: preload
// mute
// play
// wait for play event
// seekTo(0)
// pause
// bind events
// emit CUED
// enable emit