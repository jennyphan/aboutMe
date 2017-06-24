import { Component, OnInit } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CarouselService } from './carousel.service';
import { Image } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [CarouselService]
})

export class CarouselComponent implements OnInit {
  images: Image[] = [];

  constructor(private carouselService: CarouselService) { }

  ngOnInit() {
    this.images = this.carouselService.getImages();
  }

  setClasses(image: Image): string[] {
    let classes: string[] = ['item'];

    if (image.active === 'active') {
      classes = ['active', 'item'];
    }
    return classes;
  }
}
