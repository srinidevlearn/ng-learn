import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ShoppingApiService } from '../../services/api.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-inventory-forms',
  templateUrl: './product-inventory-forms.component.html',
  styleUrls: ['./product-inventory-forms.component.scss'],
})
export class ProductInventoryFormsComponent implements OnInit {
  inventoryForm: FormGroup;

  categories$: Observable<any> = this.api.getAllCategories();

  formSubscription!: Subscription;

  get categoryControls() {
    return this.inventoryForm.get('category');
  }

  productInfo: any = null;
  productId: string = '';

  sampleData = {
    name: 'notebook',
    image:
      'https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    description: 'Sample notebook with nice cover',
    category: 'stationary',
    manufacturer: 'self',
    price: 100,
  };

  @HostListener('keypress',['$event'])
  onEnterKeyClicked($event:any){

    if($event.keyCode === 13){
      if(this.productInfo) this.update();
      if(!this.productInfo) this.submit();
    }
  }

  constructor(
    public fb: FormBuilder,
    private api: ShoppingApiService,
    private actRouter: ActivatedRoute,
    private router:Router,
  ) {
    this.inventoryForm = this.fb.group(
      /* to create object from array */
      Object.fromEntries(
        /* to create array from object */
        Object.entries(this.sampleData).map((i) => {
          i[1] = '';
          return i;
        })
      )
    );

    this.productId = this.actRouter?.snapshot?.params['id'];
  }

  ngOnInit(): void {
    this.formSubscription = this.inventoryForm.valueChanges.subscribe((d) =>
      console.log(d)
    );

    if (this.productId) {
      this.fetchSingleProductDetail();
     
    }
  }

  submit() {
    console.log(this.inventoryForm.value);
    this.api.addNewProduct(this.inventoryForm.value).pipe(take(1)).subscribe(d=>{
      this.router.navigateByUrl('shopping/product_inventory/view');
    });
  }

  update(){
    this.api.updateProduct({...this.inventoryForm.value,id:this.productId}).pipe(take(1)).subscribe(d=>{
      this.router.navigateByUrl('shopping/product_inventory/view');
    });
  }

  ngOnDestroy() {
    if (this.formSubscription) this.formSubscription.unsubscribe();
  }

  fetchSingleProductDetail() {
    if (this.productId) {
      this.api.getSingleProducts(this.productId).subscribe((d: any) => {
        this.productInfo = d?.data;
        this.inventoryForm.patchValue({ ...this.productInfo });
      });
    }
  }
}
