#!/urs/bin/env node

const yargs = require('yargs');
const child = require("child_process");
// const { stdout } = require("process");

// datos del usuario aceptado
const user = "Ovni22"
const pass = "123457"

const argv = yargs.command(
  // nombre
  'acceso',
  // descripcion
  'Comando para acceder al área 51',
  // constructor
  {
    user: {
      describe: 'Username',
      demand: true,
      alias: 'u'
    },
    pass: {
      describe: 'Password',
      demand: true,
      alias: 'p'
    }
  },
  // callback
  (args) => {
    // en algún lugar del sistema existe user y password correctos
    if ( args.user == user && args.pass == pass ) {
      // creamos nodo con comando "Bienvenido al área 51"
      child.exec("node acceso.js", (err, stdout) => {
        if (err){ console.log(err)}
        console.log(stdout)
      })
    } else {
      // enviamos mensaje "Credenciales Incorrectas"
      console.log("Credenciales son incorrectas")
    }
  }
).help().argv
