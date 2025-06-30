import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {PhotoCarouselItem} from "../components/data/photo-carousel-item.data";


@Injectable({
  providedIn: 'root'
})
export class PhotoFetcherService {

  private photoCollection: PhotoCarouselItem[] = [
    {
      itemImageSrc: './assets/images/bracelets-showcase.jpeg',
      thumbnailImageSrc: './assets/images/bracelets-showcase.jpeg',
      alt: 'bracelet image',
      title: 'Arm Bracelet'
    },
    {
      itemImageSrc: './assets/images/woman_hand.jpeg',
      thumbnailImageSrc: './assets/images/woman_hand.jpeg',
      alt: 'woman bracelet image',
      title: 'Woman with Bracelet'
    },
  ]

  constructor() { }

  public getImages(): Observable<PhotoCarouselItem[]> {
      return of(this.photoCollection);
  }
}
