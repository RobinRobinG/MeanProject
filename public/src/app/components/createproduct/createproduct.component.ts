import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateProductComponent implements OnInit {
  createForm: FormGroup;


  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.createForm = this.fb.group({
      name: '',
      category: '',
      description: '',
      price: '',
      rating: '',
      qty: '',
    });
  }

  addProduct() {
    this.productService.addProduct(this.createForm.value).subscribe((data) => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
