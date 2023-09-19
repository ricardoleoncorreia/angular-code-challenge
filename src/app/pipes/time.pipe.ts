import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  transform(seconds: number): string {
    const minutes = Math.trunc(seconds / 60);
    return `${this.fillWithZeros(minutes)}:${this.fillWithZeros(seconds % 60)}`;
  }

  private fillWithZeros(value: number): string {
    const valueAsString = value.toString();
    return valueAsString.length === 1 ? `0${valueAsString}` : valueAsString;
  }
}
