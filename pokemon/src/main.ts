const div = document.querySelector(".cobrinha") as HTMLDivElement

let andarParaCima: number = 0
let andarParaBaixo: number = 0
let andarParaDireita: number = 0 
let andarParaEsquerda: number = 0

addEventListener("keydown", (w: KeyboardEvent) => {
  if (w.key === "w") {
    andarParaCima += 20;
    div.style.marginBottom = `${andarParaCima}px`;
  }
});

addEventListener("keydown", (s: KeyboardEvent) => {
  if(s.key === "s"){
    andarParaBaixo += 20
    div.style.marginTop = `${andarParaBaixo}px`
  }
})


addEventListener("keydown", (d: KeyboardEvent) => {
  if (d.key === "d") {
    andarParaDireita += 20;
    div.style.marginLeft = `${andarParaDireita}px`;
  }
});

addEventListener("keydown", (a: KeyboardEvent) => {
  if (a.key === "a") {
    andarParaEsquerda += 20;
    div.style.marginRight = `${andarParaEsquerda}px`;
  }
});


const randonLugares = () => {
  const randomMargins = Math.floor(Math.random() * 4) + 1;
  return randomMargins
}


const gerarLugaresComida = () => {
  setInterval(() => {
    const comida = document.querySelector(".comida") as HTMLDivElement;
    const randomMarginPosition =  Math.floor(Math.random() * 100) + 1;
    if (randonLugares() == 1) {
      comida.style.marginTop = `${randomMarginPosition}px`
    } else if (randonLugares() == 2) {
      comida.style.marginTop = `-${randomMarginPosition}px`
    } else if(randonLugares() == 3){
      comida.style.marginLeft = `-${randomMarginPosition}px`
    }else{
      comida.style.marginRight = `${randomMarginPosition}px`
    }
    console.log(randomMarginPosition);
  }, 1000);
}

gerarLugaresComida()