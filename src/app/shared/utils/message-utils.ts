import notify from 'devextreme/ui/notify';

const DISPLAY_TIME = 5000;

export function showError(message: string): void {
  notify(message, 'error', DISPLAY_TIME);
}

export function showSuccess(message: string): void {
  notify(message, 'success', DISPLAY_TIME);
}

export function showWarning(message: string): void {
  notify(message, 'warning', DISPLAY_TIME);
}

export function showInfo(message: string): void {
  notify(message, 'info', DISPLAY_TIME);
}
