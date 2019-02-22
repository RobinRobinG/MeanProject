import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Product } from '../../product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  displayedColumns = ['name', 'category', 'description', 'price', 'rating', 'qty', 'createdby', 'actions'];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data['data'];
      });
  }
  editProduct(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteProduct(id) {
    this.productService
      .delete(id)
      .subscribe(() => {
        this.fetchProducts();
      });
  }
}
