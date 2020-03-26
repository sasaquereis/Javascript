function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if(fano.value.length == 0 || fano.value > ano ) {
    window.alert('[ERROR] Verivique os dados e tente novamente!')
  }else {
    var fsex = document.getElementsByName('redsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `idade calculada: ${idade}`
    var genero = ''
    if (fsex[0].checked) {
      genero = 'Homem'
    } else if (fsex[1].checked) {
      genoro = 'Muleher'
    }
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  }
}  