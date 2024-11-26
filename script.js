const dialogText = document.getElementById('dialog-text');
const nextBtn = document.getElementById('next-btn');

const messages = [
    "Hola",
    "Hoy es un día especial, y aunque no siempre sé cómo expresarlo, quiero que sepas que me importa mucho.",
    "Porque es tu cumpleaños =D, y eso realmente me hace feliz por ti.",
    "Deseo que este año encuentres momentos que te hagan sonreír y que todo lo que busques se te dé, de la forma que más lo necesites.",
    "Espero que consigas todo lo que te propones, aunque no siempre lo diga, me importa que logres tus metas.",
    "Aunque este año no hayamos compartido tanto tiempo... aún sigues siendo una persona que valoro mucho, aunque no lo diga a menudo.",
    "Solo quería recordarte que te sigo queriendo un montón, aunque a veces no lo exprese de la mejor manera.",
    "Sí, sé que me ghosteas bien kbron XD, pero igual sigo pensando en ti.",
    "Y aunque me insultes cada vez que hablamos...",
    "A pesar de todo eso, quiero que sepas que... ",
    "Te quiero, hermanita. Aunque a veces me cuesta decirlo, siempre estás en mi corazón.",
    "Sí, sos una babosa, idiota, tonta, apestosa, zopenca, zangana y mugrienta... ",
    "Pero eso no cambia lo mucho que te quiero, de verdad. z3"
  ];
  

let currentMessageIndex = 0;
let charIndex = 0;

function typeMessage() {
  const currentMessage = messages[currentMessageIndex];
  if (charIndex < currentMessage.length) {
    dialogText.textContent += currentMessage[charIndex];
    charIndex++;
    setTimeout(typeMessage, 40); 
  } else {
    nextBtn.style.display = 'inline-block'; 
  }
}

function showNextMessage() {
  if (currentMessageIndex < messages.length - 1) {
    currentMessageIndex++;
    charIndex = 0;
    dialogText.textContent = '';
    nextBtn.style.display = 'none';
    typeMessage();
  } else {
    dialogText.textContent = " ¡Feliz Cumpleaños, Lucy! ";
    nextBtn.style.display = 'none';
  }
}

typeMessage();

nextBtn.addEventListener('click', showNextMessage);
