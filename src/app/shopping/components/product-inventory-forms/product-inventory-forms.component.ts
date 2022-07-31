import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ShoppingApiService } from '../../services/api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-inventory-forms',
  templateUrl: './product-inventory-forms.component.html',
  styleUrls: ['./product-inventory-forms.component.scss'],
})
export class ProductInventoryFormsComponent implements OnInit {
  inventoryForm: FormGroup;

  categories$:Observable<any>  = this.api.getAllCategories();

  formSubscription!:Subscription;

  get categoryControls(){
    return this.inventoryForm.get('category');
  }

  sampleData = {
    name: 'notebook',
    image:
      'https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    description: 'Sample notebook with nice cover',
    category: 'stationary',
    manufacturer: 'self',
    price: 100,
  };

  constructor(public fb: FormBuilder,private api:ShoppingApiService) {
    this.inventoryForm = this.fb.group(
       /* to create object from array */
      Object.fromEntries( /* to create array from object */
        Object.entries(this.sampleData).map((i) => {
          i[1] = '';
          return i;
        })
      )
    );
  }

  ngOnInit(): void {
    this.inventoryForm.patchValue(this.sampleData)
    this.formSubscription = this.inventoryForm.valueChanges.subscribe(d=>console.log(d))

  }

  submit(){
    console.log(this.inventoryForm.value)
    this.api.addNewProduct(this.inventoryForm.value).pipe(take(1)).subscribe();
  }

  ngOnDestroy(){
    if(this.formSubscription) this.formSubscription.unsubscribe();
  }
}
