import {Component, model, OnInit} from '@angular/core';
import {PhotoFetcherService} from "../../services/photo-fetcher.service";
import {PhotoCarouselItem} from "../../data/photo-carousel-item.data";
import {ProductItemService} from "../../services/product-item.service";
import {ProductItemData} from "../../data/product-item.data";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  public images: PhotoCarouselItem[] = [];
  public products: ProductItemData[] = [];


  public responsiveOptions: any[] | undefined;


  constructor(private photoFetcherService: PhotoFetcherService, private productItemService: ProductItemService) {
  }

  public ngOnInit() {
    this.photoFetcherService.getImages()
      .subscribe((images) => this.images = images);

    this.productItemService.getProductItemst().subscribe(products => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }

 public getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return ''
    }
  }

}
