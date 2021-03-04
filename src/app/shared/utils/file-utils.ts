import {Base64} from 'js-base64';

export function getFileExtension(filename: string): string {
  const re = /(?:\.([^.]+))?$/;
  const result = re.exec(filename);

  if (result && result[1]) {
    return result[1].toLowerCase();
  }
}

export async function toBase64(file: File) {
  const data = await file.arrayBuffer();
  return Base64.fromUint8Array(new Uint8Array(data));
}

export function base64ToBlob(b64Data, contentType= '', sliceSize= 512): Blob {
  b64Data = b64Data.replace(/\s/g, ''); //IE compatibility...
  let byteCharacters = atob(b64Data);
  let byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    let slice = byteCharacters.slice(offset, offset + sliceSize);

    let byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, {type: contentType});
}
