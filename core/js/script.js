function getRandomIndices(count, max) {
	let indices = new Set();
	while (indices.size < count) {
		indices.add(Math.floor(Math.random() * max));
	}
	return Array.from(indices);
}

function getRandomDelay(min, max) {
	return Math.random() * (max - min) + min;
}

let animate = (duration) => {
	const interval = 1200;
	const start = performance.now();
	let lastUpdate = 0;
	const numClasses = 1;
	const minDelay = 1000;
	const maxDelay = 2500;

	function step(timestamp) {
		if (timestamp - lastUpdate >= interval) {
			lastUpdate = timestamp;

			let test = document.querySelectorAll('.light');
			let elements = Array.from(test);

			let indices = getRandomIndices(numClasses, elements.length); 

			indices.forEach((index) => {
				if (index < elements.length) {
					elements[index].classList.add('active');

					setTimeout(() => {
						elements[index].classList.remove('active');
					}, getRandomDelay(minDelay, maxDelay));
				}
			});
		}

		requestAnimationFrame(step);
	}

	requestAnimationFrame(step);
}

animate(0);