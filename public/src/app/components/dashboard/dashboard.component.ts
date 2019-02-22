import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatGridTile } from '@angular/material';
import { MatDialog } from '@angular/material';
import { ProductoptionsdialogComponent } from '../productoptionsdialog/productoptionsdialog.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imagesData: any;
  error: string;

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,

  ) {
    this.getImages();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
    });
  }

  getImages() {
    console.log('daashboard getting images');
    const obs = this.imageService.getImages();
    obs.subscribe(
      data => {
        this.imagesData = data;
        console.log(this.imagesData);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductoptionsdialogComponent, {
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result);
    });
  }


}
