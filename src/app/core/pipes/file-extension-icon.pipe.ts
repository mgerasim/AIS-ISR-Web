import { Pipe, PipeTransform } from '@angular/core';
import {getFileExtension} from '../../shared/utils/file-utils';

@Pipe({
  name: 'fileExtensionIcon'
})
export class FileExtensionIconPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const path = 'assets/img/files/';

    switch (getFileExtension(value)) {
      case '7zip':
        return path + 'icons8-7zip-32.png';

      case 'zip':
        return path + 'icons8-zip-32.png';

      case 'rar':
        return path + 'icons8-rar-32.png';

      case 'csv':
        return path + 'icons8-csv-32.png';

      case 'jpeg':
      case 'jpg':
        return path + 'icons8-jpg-32.png';

      case 'mov':
        return path + 'icons8-mov-32.png';

      case 'mpg':
      case 'mpeg':
        return path + 'icons8-mov-32.png';

      case 'png':
        return path + 'icons8-png-32.png';

      case 'ppt':
        return path + 'icons8-ppt-32.png';

      case 'tiff':
      case 'tif':
        return path + 'icons8-tif-32.png';

      case 'pdf':
        return path + 'icons8-pdf-32.png';

      case 'txt':
        return path + 'icons8-txt-32.png';

      case 'docx':
      case 'doc':
        return path + 'icons8-word-32.png';

      case 'xlsx':
      case 'xls':
        return path + 'icons8-xls-32.png';

      case 'pptx':
      case 'ppt':
        return path + 'icons8-ppt-32.png';

      default:
    }

    return path + 'icons8-file-32.png';
  }

}
