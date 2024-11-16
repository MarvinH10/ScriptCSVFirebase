# Firebase Script para Subir CSV a Firestore

Este repositorio contiene un script en Node.js que permite subir datos de un archivo CSV a Firestore, utilizando las credenciales del proyecto Firebase.

---

## Requisitos Previos

1. **Instalar Node.js**  
   Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [Node.js](https://nodejs.org/).

2. **Crear un Proyecto en Firebase**  
   - Accede a [Firebase Console](https://console.firebase.google.com/).
   - Crea un nuevo proyecto o selecciona un proyecto existente.
   - Configura Firestore en el modo que prefieras (`modo de producción` o `modo de prueba`).

3. **Descargar Credenciales del Proyecto (firebase-key.json)**  
   - Ve a la sección `Configuración del proyecto`.
   - Selecciona la pestaña `Cuentas de servicio`.
   - Haz clic en `Generar nueva clave privada`.
   - Descarga el archivo `firebase-key.json` y guárdalo en la raíz del proyecto.

---

## Instalación

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/MarvinH10/ScriptCSVFirebase.git
   cd ScriptCSVFirebase
