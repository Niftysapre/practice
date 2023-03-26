let lis = document.querySelectorAll('ul li');
	
for (let li of lis) {
	li.addEventListener('click', function() {
		this.classList.add('active');
	});
}