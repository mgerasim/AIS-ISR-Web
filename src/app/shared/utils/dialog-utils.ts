import {DialogCloseResult, DialogRef, DialogResult, DialogService} from '@progress/kendo-angular-dialog';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function showConfirmation(dialogService: DialogService, content: string): Observable<boolean> {
  const dialog: DialogRef = dialogService.open({
    title: 'Подтвердить операцию!',
    content,
    actions: [
      { text: 'Нет' },
      { text: 'Да', primary: true }
    ],
    width: 450,
    height: 200,
    minWidth: 250
  });

  return dialog.result.pipe(
    map(result => {
      if (result instanceof DialogCloseResult) {
        return false;
      }

      return result.primary === true;
    })
  );
};
