const range = () => {
	const $point1 = document.querySelector('.pointer1');
	const $point2 = document.querySelector('.pointer2');
	const $ranges = document.querySelector('.slider_ranges');
	const $track = document.querySelector('.track');
	const $price  = document.querySelectorAll('.price>span');
	console.log('$ranges: ', $price[0].innerHTML);
	console.log('$ranges: ', $price[2]);

	$point2.onmousedown = function(event) {
		event.preventDefault(); // предотвратить запуск выделения (действие браузера)
		const shiftX = event.clientX - $point2.getBoundingClientRect().left;
		const pointrigth = $point1.getBoundingClientRect().left - $ranges.getBoundingClientRect().left;

		// shiftY здесь не нужен, слайдер двигается только по горизонтали
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		function onMouseMove(event) {
			let newLeft = event.clientX - shiftX - $ranges.getBoundingClientRect().left;
			// курсор вышел из слайдера => оставить бегунок в его границах.
			if (newLeft < 0) {
				newLeft = 0;
			}
			//const rightEdge = $ranges.offsetWidth - $point2.offsetWidth;
			if (newLeft > pointrigth) {
				newLeft = pointrigth - 10;
			}
			$point2.style.left = newLeft + 'px';
			$track.style.left = newLeft + 'px';
			$track.style.width = (pointrigth - newLeft) + 5 + 'px';
		}
		function onMouseUp() {
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		}
	};
	$point2.ondragstart = function() {
		return false;
	};
	/////////////////////////////////
	$point1.onmousedown = function(event) {
		event.preventDefault(); // предотвратить запуск выделения (действие браузера)
		const shiftX = event.clientX - $point1.getBoundingClientRect().left;
		const pointleft = $point2.getBoundingClientRect().left - $ranges.getBoundingClientRect().left;
		// shiftY здесь не нужен, слайдер двигается только по горизонтали
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		function onMouseMove(event) {
			let newLeft = event.clientX - shiftX - $ranges.getBoundingClientRect().left;
			// курсор вышел из слайдера => оставить бегунок в его границах.
			if (newLeft < pointleft) { //
				newLeft = pointleft + 10;
			}
			const rightEdge = $ranges.offsetWidth - $point1.offsetWidth;
			const rightEdge1 = $ranges.offsetWidth - $point1.getBoundingClientRect().left;
			const rightEdge2 = $ranges.offsetWidth - $point2.getBoundingClientRect().left;
			if (newLeft > rightEdge) {
				newLeft = rightEdge;
			}
			$point1.style.left = newLeft + 'px';
			$track.style.width = Math.abs(rightEdge1 - rightEdge2) + 5 + 'px';
		}
		function onMouseUp() {
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		}
	};
	$point1.ondragstart = function() {
		return false;
	};



};
export default range;
//event.which == 1
