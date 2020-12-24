// function doGet(e) {
//   return HtmlService.createHtmlOutputFromFile('Index');
// }

const ui = SpreadsheetApp.getUi();

const onOpen = () => {
  crearMenu();
};

const crearMenu = () => {
  const menu = ui.createMenu("Mi menu");
  menu.addItem("Mostrar formulario", "cargarHtml");
  menu.addToUi();
};

const cargarHtml = () => {
  const htmlUI = HtmlService.createTemplateFromFile("Index");
  const htmlOutput = htmlUI.evaluate();
  htmlOutput.setTitle("Formulario de control");
  ui.showSidebar(htmlOutput);
};
