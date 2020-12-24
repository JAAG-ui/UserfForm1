// agregar una fila nueva a la hoja bd
const agregarNuevaFila = (registro) => {
  const libroActual = SpreadsheetApp.getActiveSpreadsheet();
  const hojaBd = libroActual.getSheetByName("bd");
  hojaBd.appendRow([
    registro.categoria,
    registro.item,
    registro.tipo,
    registro.cantidad,
    new Date().toLocaleDateString("es-PE"),
    new Date(registro.fechaIngreso).toLocaleDateString("es-PE"),
    registro.notaDelivery,
    registro.comentarios,
  ]);
  return true;
};

// extrae la data de data y retorna un array
const arrayData = () => {
  const libroActual = SpreadsheetApp.getActiveSpreadsheet();
  const hojaData = libroActual.getSheetByName("data");
  return hojaData.getRange(2, 1, hojaData.getLastRow() - 1, 3).getValues();
};

// extrae la data de stock y retorna un array
const arrayStock = () => {
  const categoria = "Fruta";
  const item = "Manzanas";
  const tipo = "Rojo";

  const libroActual = SpreadsheetApp.getActiveSpreadsheet();
  const hojaStock = libroActual.getSheetByName("stock");
  return hojaStock.getRange(2, 1, hojaStock.getLastRow() - 1, 4).getValues();
};
