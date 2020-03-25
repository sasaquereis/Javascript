function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
      //BOM DIA!
      img.scr = 'manhã.jpg'
    }else if (hora >= 12 && hora < 18) { 
      //BOA TARDE!
      img.src = 'tarde.jpg'
    }else{
      //BOA NOITE!
      img.src = 'noite.jpg'
    }
}