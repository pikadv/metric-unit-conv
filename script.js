let lengthR = document.getElementById("length-result")
let volumeR = document.getElementById("volume-result")
let massR = document.getElementById("mass-result")
let inputS = document.getElementById("inputs")

// onclick is hooked to input on html //
function input() {
	let numberS = inputS.value
	if (numberS == false) {
		numberS = 0
	}
	// Meter/Feet
	let m2f = numberS * 3.28084
	let f2m = numberS * 0.3048
	lengthR.textContent =
		numberS +
		" meters = " +
		m2f.toFixed(3) +
		" feet | " +
		numberS +
		" feet = " +
		f2m.toFixed(3) +
		" meters"
	// Liters/Gallons
	let l2g = numberS * 0.2641722
	let g2l = numberS * 3.78541
	volumeR.textContent =
		numberS +
		" liters = " +
		l2g.toFixed(3) +
		" gallons | " +
		numberS +
		" gallons = " +
		g2l.toFixed(3) +
		" liters"
	//  Kilo/pounds
	let k2p = numberS * 2.20462
	let p2k = numberS * 0.453592
	massR.textContent =
		numberS +
		" kilos = " +
		k2p.toFixed(3) +
		" pounds | " +
		numberS +
		" pounds = " +
		p2k.toFixed(3) +
		" kilos"
}
