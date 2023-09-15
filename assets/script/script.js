// Fungsi Responsive

var wWidth = document.documentElement.clientWidth;

function displayWidthSize() {
	var wWidth = document.documentElement.clientWidth;
	const navigasi = document.querySelectorAll("nav ul li");
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
	const navigasi = document.querySelectorAll("nav ul li");
	navigasi.forEach(function (n) {
		n.classList.add("minimize");
	});
	menu.classList.remove("navigator");
}

window.addEventListener("resize", displayWidthSize);

// Scrolling Navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.querySelector("header").style.top = "0";
	} else {
		document.querySelector("header").style.top = "-60px";
	}
	prevScrollpos = currentScrollPos;
};

// Active Menu

const menuNav = document.querySelector(".menuNav");
menuNav.addEventListener("click", function () {
	document.querySelector(".blokMenu").style.right = "20px";
});

document.querySelector(".container").addEventListener("click", function () {
	if (document.querySelector(".blokMenu").style.right == "20px") {
		document.querySelector(".blokMenu").style.right = "-170px";
	} else {
		document.querySelector("header").style.top = "0";
	}
});
