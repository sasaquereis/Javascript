var agora = new Date()
var hora = agora.getDate()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
  console.log('Bom Dia!!!')
}else if (hora <= 18) {
  Console.log('Boa Tarde!!!')
}else{
  console.log('Boa Noite!!!')
}