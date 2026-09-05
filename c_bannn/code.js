function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Tarjeta interactiva')
    .setWidth(509)
    .setHeight(777)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getImageBase64(fileId) {
  try {
    // 1. Obtener el archivo de Drive por su ID
    var file = DriveApp.getFileById(fileId);
    // 2. Obtener los datos binarios (blob) de la imagen
    var blob = file.getBlob();
    // 3. Obtener el tipo de contenido (ej: image/png)
    var contentType = blob.getContentType();
    // 4. Codificar los datos binarios a texto Base64
    var base64Data = Utilities.base64Encode(blob.getBytes());
    // 5. Devolver la imagen lista para usar en un <img>
    return 'data:' + contentType + ';base64,' + base64Data;
  } catch (error) {
    console.error('Error al obtener la imagen: ' + error);
    return null;
  }
}
