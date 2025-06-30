import {Component, model, OnInit} from '@angular/core';
import {PhotoFetcherService} from "../../services/photo-fetcher.service";
import {PhotoCarouselItem} from "../../data/photo-carousel-item.data";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
 public images: PhotoCarouselItem[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];

  constructor(private photoFetcherService: PhotoFetcherService) {
  }

  public ngOnInit() {
    this.photoFetcherService.getImages()
      .subscribe((images) => this.images = images);
  }
}
