/* Declarar una clase */
class Animales {
  constructor(
    dueña,
    nombre,
    raza,
    edad,
    actividades,
    comida,
    visitaAlVete,
    vacunas
  ) {
    this.dueña = dueña;
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.actividades = actividades;
    this.comida = comida;
    this.visitaAlVete = visitaAlVete;
    this.vacunas = vacunas;
  }

  get verInfoAnimal() {
    return `El animal es de raza ${this.raza}, su nombre es ${this.nombre}`;
  }

  set capup(edadCumplida) {
    this.vivo = edadCumplida;
  }
}

let gato = new Animales(
  'LaProfeDeReact',
  'China',
  'pixie bob',
  4,
  'En sus ratos libres rompe displays y funde discos, en fin vida gatuna.',
  'pescados y Catchow',
  2,
  'Todas'
);

console.log(gato);

let ObjetoChina = [
  { Detalle: 'Dueña: ', valor: gato['dueña'] },
  { Detalle: 'Raza : ', valor: gato['raza'] },
  { Detalle: 'Edad : ', valor: gato['edad'] + ' años humanos' },
  { Detalle: 'Vacunas : ', valor: gato['vacunas'] },
  { Detalle: 'Comida : ', valor: gato['comida'] },
  {
    Detalle: 'Visitas al Veterinario : ',
    valor: gato['visitaAlVete'] + ' veces por año',
  },
  { Detalle: 'Actividades : ', valor: gato['actividades'] },
];

const carta1 = document.querySelector('.uno');
const carta2 = document.querySelector('.dos');

/* shitchea aunque un modal quedaba mejor*/
function MostrarChina() {
  carta1.classList.add('d-none');
  carta2.classList.remove('d-none');
  document.querySelector('.name').textContent = gato.nombre;

  for (let i = 0; i < 7; i++) {
    let item = document.createElement('li');
    item.innerHTML = ObjetoChina[i].Detalle + ObjetoChina[i].valor;
    document.querySelector('.descripcion').appendChild(item);
  }
}

function OcultarChina() {
  carta2.classList.add('d-none');
  carta1.classList.remove('d-none');
  document.querySelector('.name').textContent = '';
  let items = document.querySelectorAll('li');
  items.forEach(element => {
    element.parentNode.removeChild(element);
  });
}
