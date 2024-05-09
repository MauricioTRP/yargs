#!/usr/bin/env node

const yargs = require('yargs')

const argv = yargs.command(
  'saludar',  // Nombre Comando
  'Comando para saludar a la gente', // Descripción del comando
  {
    nombre: { // Flag u opción nombre
      describe: 'Argumento para definir el nombre',
      demand: true,
      alias: 'n'
    }
  },
  // Callback (Acción que va a realizar el comando)
  (args) => {
    console.log(`Hola ${args.nombre}, gusto en saludarte`)
  }
)

.help().argv