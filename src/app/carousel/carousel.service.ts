import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


import 'rxjs/add/operator/map';


/**
 * This is Carousel Service
 */
export class Image {
  constructor(public imgName: string,
              public location: string,
              public active: string) {
  }
}


@Injectable()
export class CarouselService {
  public images: Image[] = [
    {imgName: 'apieu', location: 'assets/img/mainBrands/APIEU.jpg', active: 'active'},
    {imgName: 'cosRx', location: 'assets/img/mainBrands/COSRX.jpg', active: ''},
    {imgName: 'huxley', location: 'assets/img/mainBrands/Huxley.jpg', active: ''}
  ];

  constructor(private http: Http) {
  }

  /**
   *
   * @returns {Image[]}
   * @author Jenny Phan
   */
  getImages(): Image[] {
    return this.images;
  }

}
