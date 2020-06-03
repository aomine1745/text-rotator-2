const text = document.getElementById('text')
const word = document.getElementsByTagName('span')

let i = 0

function rotator () {
	word[i].style.display = 'none'
	i = (i + 1) % word.length
	word[i].style.display = 'initial'
}

setInterval(rotator, 800)