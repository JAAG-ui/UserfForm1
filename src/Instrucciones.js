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
    registro.chkDemora,
    registro.inputObservaciones,
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
const arrayStock = (categoria, item, tipo) => {
  const libroActual = SpreadsheetApp.getActiveSpreadsheet();
  const hojaStock = libroActual.getSheetByName("stock");
  const arrayOfArrays = hojaStock.getRange(2, 1, hojaStock.getLastRow() - 1, 4).getValues();
  const arrayFiltrado = arrayOfArrays.filter((array) => array[0] === categoria && array[1] === item && array[2] === tipo); // Filtra todas las filas que cumplan con la condición
  return arrayFiltrado[0] ? arrayFiltrado.reduce((subtotal, col) => subtotal + col[3], 0) : 0; // Suma todos las cantidades de la columna stock de las filas de arrays filtrados
};
