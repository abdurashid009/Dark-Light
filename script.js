


document.getElementById("lightBtn").onclick = function(){
    document.body.style.background = '#C4B5A5 '
    document.body.style.color = 'black'
    document.getElementById('darkBtn').style.background = 'black'
    alert('Light mode yoqildi')

}


document.getElementById("darkBtn").onclick = function(){
    document.body.style.background = 'black'
    document.body.style.color = 'white'
    document.getElementById('darkBtn').style.background = 'gray'
    alert('Dark mode yoqildi')
}

