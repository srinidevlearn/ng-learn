import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any[]): any {

    let total = !value.length ? 0 : value.map((item,index)=>{return Number(item.quantity) * Number(item.product.price)}).reduce((acc,value)=>acc+value,0)
    console.log(total)
    return total;
  }

}
