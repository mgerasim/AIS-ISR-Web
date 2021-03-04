import * as moment from 'moment';

// Migrated from AngularJS https://raw.githubusercontent.com/Ins87/angular-date-interceptor/master/src/angular-date-interceptor.js
const ISO8601 = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;

export function toISOStringWithoutTimeZone(date: Date) {
  // Если в метке времени нет милисекунд, тогда они не сериализуются.
  // Так ведет себя сервер и от этого зависит работа таблицы потребления.

  if (date.getMilliseconds() > 0) {
    return moment(date).format("YYYY-MM-DDTHH:mm:ss.SSS");
  } else {
    return moment(date).format("YYYY-MM-DDTHH:mm:ss");
  }
}


/**
 * Сравнение месяцев
 * @param date1
 * @param date2
 */
export function compareMonthDate(date1: Date, date2: Date): boolean {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
}

export function isIso8601Date(value) {
  if (value === null || value === undefined) {
    return false;
  }

  return ISO8601.test(value);
}

/**
 * Количество дней между двумя датами
 * @param firstDate
 * @param secondDate
 */
export function calculateTotalDays(firstDate: Date, secondDate: Date) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
}

export function toDate(dateString: string): Date {

  return new Date(dateString);
}
