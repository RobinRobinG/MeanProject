import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditProductComponent implements OnInit {
  id: string;
  product: any = {};
  updateForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
  ) {
    this.updateForm = this.fb.group({
      name: '',
      category: '',
      description: '',
      price: '',
      rating: '',
      qty: '',
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.productService.getProductById(this.id).subscribe((data) => {
        this.product = data['data'];
        this.updateForm.get('name').setValue(this.product.name);
        this.updateForm.get('category').setValue(this.product.category);
        this.updateForm.get('description').setValue(this.product.description);
        this.updateForm.get('price').setValue(this.product.price);
        this.updateForm.get('rating').setValue(this.product.rating);
        this.updateForm.get('qty').setValue(this.product.qty);
      });
    });
  }

  updateProduct() {
    console.log(this.updateForm.value);
    this.productService.updateProduct(this.id, this.updateForm.value).subscribe(() => {
      this.snackBar.open('Product Updated Successfully!', 'OK', {
        duration: 3000
      });
    });
  }
}
