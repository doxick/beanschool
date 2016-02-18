import EventEmitter from "events/events.js";
const MediaState = {
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5
};
class BMedia extends EventEmitter {
    constructor() {
        super();
        this._duration = 0;
        this._position = 0;
        this._state = MediaState.UNSTARTED;
        this.$el = document.createElement('div');
    }
    get duration() { return this._duration; }
    set duration(value) { this._duration = value; }

    get position() { return this._position; }
    set position(value) {
        var lastposition = this._position;
        this._position = value;
        this.emit('progress',this._position, lastposition);
    }


    get state() { return this._state; }
    set state(value) {
        var key = MediaState.keyOf(value);
        if (!key)
            return;
        console.log(key,value);
        this._state = value;
        this.emit(key.toLowerCase());
    }
}
export default BMedia;