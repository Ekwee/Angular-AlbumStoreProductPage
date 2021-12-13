import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistringComponent implements OnInit {
  albumInfo : Album;
;
  constructor(private _productService: ProductService ) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      response => this.albumInfo = response
    )
  }

}
