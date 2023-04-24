function volume_sphere(event) {
	event.preventDefault(); // prevent form submission

	let r = document.getElementById("radius");
	let vol = document.getElementById("volume");
	let rad = parseFloat(r.value);

	 

	let volume = (4 / 3) * Math.PI * Math.pow(rad, 3);
	vol.value = volume.toFixed(2); // round to 2 decimal places
}

document.getElementById("submit").addEventListener('click', volume_sphere);
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
