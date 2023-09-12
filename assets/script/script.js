// Fungsi Responsive

var wWidth = document.documentElement.clientWidth;

function displayWidthSize() {
	var wWidth = document.documentElement.clientWidth;
	const navigasi = document.querySelectorAll("nav li");
	const menu = document.querySelector("nav span");
	if (wWidth <= 500) {
		navigasi.forEach(function (n) {
			n.classList.add("minimize");
		});
		menu.classList.remove("navigator");
	} else {
		navigasi.forEach(function (n) {
			n.classList.remove("minimize");
		});
		menu.classList.add("navigator");
	}
}

if (wWidth <= 500) {
	const menu = document.querySelector("nav span");
	const navigasi = document.querySelectorAll("nav li");
	navigasi.forEach(function (n) {
		n.classList.add("minimize");
	});
	menu.classList.remove("navigator");
}

window.addEventListener("resize", displayWidthSize);

//
