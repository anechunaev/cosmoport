/**
 * @class Time
 * @constructor
 */
var Time = function(){
	this.time; // The time this frame has started. This is the time in seconds since the start of the game.
	this.timeSinceLevelLoad; // The time this frame has started. This is the time in seconds since the last level has been loaded.
	this.deltaTime; // The time in seconds it took to complete the last frame.
	this.smoothDeltaTime; // A smoothed out Time.deltaTime.
	this.timeScale; // The scale at which the time is passing. This can be used for slow motion effects.
	this.frameCount; // The total number of frames that have passed.
}