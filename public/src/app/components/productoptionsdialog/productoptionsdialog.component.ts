import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productoptionsdialog',
  templateUrl: './productoptionsdialog.component.html',
  styleUrls: ['./productoptionsdialog.component.css']
})
export class ProductoptionsdialogComponent implements OnInit {
  user: object;

  constructor(
    public dialog: MatDialog,
    public fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<ProductoptionsdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    }

  ngOnInit() {
    this.authService.getProfile().subscribe((data: any) => {
      this.user = data.user;
    },
    (err) => {
      this.router.navigate(['']);
      return false;
    });
  }

  save() {
    this.dialogRef.close('It was saved');
  }

  close(): void {
    this.dialogRef.close('It was closed');
  }
}
