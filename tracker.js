var running = true;
var tick = 0;
var max_tick = 30;
var resolution = 250;

function _init_() {
}

function run() {
	// Run the track
	// Get current tick

	var pt = document.getElementsByClassName('on');
	if (pt.length !== 0) { 
		pt[0].className = '';
	}

	var ct = document.getElementById('line-' + tick);
	ct.className = 'on';
		
	if (running) {
		window.setTimeout(run, resolution, false);
	}

	tick++;
	if (tick > max_tick) {
		tick = 0;
	}
}
