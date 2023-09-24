import CustomInput from './Custominput';

export default function Formulario() {
  const form = document.createElement('form');
  form.classList = 'formulario';

  const button = document.createElement('button')
  button.classList = 'send-button'
  button.textContent = 'Enviar'

  //creamos un array como la api, con sus objetos y atributos
  const inputs = [
    {
      titleLable: 'Nombre Paciente',
      placeholderLabel: 'Escribe el nombre del paciente',
      id: 'nombre',
      class: 'nombre',
      required: true,
    },
    {
      titleLable: 'Teléfono del Paciente',
      placeholderLabel: 'Teléfono',
    },
    {
      titleLable: 'Correo Electrónico',
      placeholderLabel: 'Correo Electrónica',
    },
    {
      titleLable: 'Síntomas',
      placeholderLabel: 'Síntomas',
    },
  ];

  //for each para iterar y ir agregando los objetos del array en la pagina
  inputs.forEach((input) => {
    form.appendChild(CustomInput(input));
  });


  //se crea un evento en el mouse para poder obtner los datos del formulario
  button.addEventListener('click',(e) =>{
    e.preventDefault();
    
    // Obtener los valores de los imputs
   
    const inputArr = document.querySelectorAll('input')
    const [ nombre, telefono, correo, sintomas] = inputArr
    // console.log(nombre.value, telefono.value, correo.value, sintomas.value);

     // Verificar si el campo de nombre está vacío
     //Esta función es útil para validar si un campo de texto está vacío o si solo contiene espacios en blanco.
     if (nombre.value.trim() === '') {
      console.log('El campo Nombre Paciente es obligatorio.');
      return; // Detener el envío del formulario
    }

      // Si el campo de nombre no está vacío, guardar los valores en variables
      const nombrePaciente = nombre.value;
      const telefonoPaciente = telefono.value;
      const correoElectronico = correo.value;
      const sintomasPaciente = sintomas.value;

      console.log('Nombre del Paciente:', nombrePaciente);
      console.log('Teléfono del Paciente:', telefonoPaciente);
      console.log('Correo Electrónico:', correoElectronico);
      console.log('Síntomas:', sintomasPaciente);


  });


  form.appendChild(button);



  return form;
}

