let lis = document.querySelectorAll('ul li');

for (let li of lis) {
	li.addEventListener('click', function() {
		if (this.classList.contains('active')) {
			this.classList.remove('active');
		} else {
			for (let other of lis) {
				other.classList.remove('active');
			}
			this.classList.add('active');
		}
	});
}