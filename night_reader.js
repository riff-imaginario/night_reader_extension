let data = new Date()
let hora = data.getHours()

if (Number(hora.value) > 19 && Number(hora.value < 6)) {
    x = document.querySelector('html')
    x.style.backgroundColor = 'black'
    x.style.color = 'white'
    document.body.style.backgroundColor = 'black'
    document.content.style.backgroundColor = 'black'
    document.content.style.color = 'white'
    document.body.style.color = 'white'
}