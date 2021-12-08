import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  _albumUrl = '../assets/album.json';
//  response :[];


  constructor(private _http : Http ) { }

  getAlbum(id:number){
    this._http.get(this._albumUrl)
    .subscribe(
      response => response.json
    )
  }

}
