import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-productoptionsdialog',
  templateUrl: './productoptionsdialog.component.html',
  styleUrls: ['./productoptionsdialog.component.css']
})
export class ProductoptionsdialogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductoptionsdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close('It was saved');
  }

  close(): void {
    this.dialogRef.close('It was closed');
  }
}
