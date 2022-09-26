function format(time) {
	const t = time * 10;
	return `${day(t)}:${hour(t)}:${minute(t)}:${second(t)},${milliSecond(t)}`;
}

function round(num, maxNum, pad) {
	if (maxNum)
		return Math.floor(num % maxNum)
			.toString()
			.padStart(pad, '0');
	return num.toString();
}

function milliSecond(time) {
	const milliseconds = Math.floor((time / 10) % 100);
	return round(milliseconds, 1000, 2);
}

function second(time) {
	const seconds = Math.floor((time / 1000) % 60);
	return round(seconds, 60, 2);
}

function minute(time) {
	const minutes = Math.floor((time / 1000 / 60) % 60);
	return round(minutes, 60, 2);
}

function hour(time) {
	const hours = Math.floor((time / 1000 / 60 / 60) % 24);
	return round(hours, 24, 2);
}

function day(time) {
	const days = Math.floor(time / 1000 / 60 / 60 / 24);
	return round(days);
}

export default format;
