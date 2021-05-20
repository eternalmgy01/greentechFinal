import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {
currentDate: number = new Date().getDate();
remainDate: number;
currentMonth: number = new Date().getMonth();
remainMonth: number;

  transform(value: any): any {
    this.currentDate = new Date().getDate();
    this.remainDate = new Date(value).getDate();
    let days = this.currentDate - this.remainDate;
    return days;
  }

}
