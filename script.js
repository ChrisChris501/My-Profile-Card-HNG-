function updateTime() {
	const utcTimeElement = document.getElementById('utc-time');
	const now = new Date();
	const utcString = now.toUTCString();
	utcTimeElement.textContent = `Current UTC Time: ${utcString}`;
}

updateTime();

setInterval(updateTime, 1000);

setTimeout(function () {
	document.body.classList.add('change-color');
}, 1000);
