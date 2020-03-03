function handleMouseMove({ clientX, clientY, target }) {
  // Os argumentos podem ser reatribuidos
  // const { clientX, clientY, target } = event;
  // const clientX = event.clientX;
  // const clientY = event.clientY;

  console.log(clientX, clientY, target);
}

const frutas = ["Banana", "Uva"];

// const fruta1 = frutas[0];
const [fruta1, fruta2] = frutas;

console.log(fruta1, fruta2);

const useState = ["blue", function(color){
  useState[0] = color;
}]

const [color, setColor] = useState;
setColor('red');
console.log(useState);

// document.documentElement.addEventListener('mousemove', handleMouseMove)