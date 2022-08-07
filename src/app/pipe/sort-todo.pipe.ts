import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTodo',
})
export class SortTodoPipe implements PipeTransform {
  transform(value: any, sortBy: 'create' | 'complete' | null): any {
    value = this.sortByTimeDesc(value);
    console.log(value);

    if (!sortBy) return value;
    if(sortBy === 'complete') return this.sortByComplete(value)
    if(sortBy === 'create') return this.sortByCreate(value)

    return [];
  }

  sortByComplete(arr:any[]) {
    let completedCollection = arr.filter((i:any) => i.isCompleted);
    let nonCompletedCollection = arr.filter((i:any) => !i.isCompleted);
    return [...completedCollection,...nonCompletedCollection]
  }
  sortByCreate(arr:any[]) {    
      return arr.sort((a: any, b: any) => a.time - b.time);
    
  }

  sortByTimeDesc(arr: any) {
    return arr.sort((a: any, b: any) => b.time - a.time);
  }

}
