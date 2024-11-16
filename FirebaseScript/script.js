const admin = require("firebase-admin");
const fs = require("fs");
const csv = require("csv-parser");

const serviceAccount = require("./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "aca-va-tu-url",
});

const firestore = admin.firestore();

async function uploadCSV(filePath, collectionName) {
  const dataArray = [];

  fs.createReadStream(filePath)
    .pipe(csv({ separator: ';' }))
    .on("data", (row) => {
      if (row.N && row.DNI && row.COD && row.PATERNO && row.MATERNO && row.NOMBRES) {
        dataArray.push(row);
      } else {
        console.warn("Fila ignorada debido a datos incompletos:", row);
      }
    })
    .on("end", async () => {
      console.log("CSV leído con éxito. Subiendo datos a Firebase...");

      for (const record of dataArray) {
        try {
          const formattedRecord = {
            N: parseInt(record.N, 10),
            DNI: record.DNI,
            COD: record.COD,
            PATERNO: record.PATERNO,
            MATERNO: record.MATERNO,
            NOMBRES: record.NOMBRES,
          };

          await firestore.collection(collectionName).add(formattedRecord);
          console.log(`Documento agregado:`, formattedRecord);
        } catch (error) {
          console.error("Error al agregar documento:", error);
        }
      }

      console.log("Todos los datos han sido subidos.");
    });
}

const filePath = "./data.csv";
const collectionName = "estudiantes";
uploadCSV(filePath, collectionName);
