Object.prototype.keyOf = function(value) {
    var keys = Object.keys(this);
    for(var i = 0, l = keys.length; i < l; i++)
        if (this[keys[i]] == value)
            return keys[i];
    return null;
};



window.requestAnimationFrame = window.requestAnimationFrame   ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function (callback, element) {
        var start,
            finish;


        return window.setTimeout( function () {
            start = +new Date();
            callback(start);
            finish = +new Date();

            self.timeout = 1000 / 60 - (finish - start);

        }, self.timeout);
    };

window.cancelAnimationFrame = window.cancelAnimationFrame   ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame    ||
    window.oCancelAnimationFrame      ||
    window.msCancelAnimationFrame     ||
    window.clearTimeout;