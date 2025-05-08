import { Image } from './../../../../core/models/image';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductImagesComponent implements OnInit {
  @Input() images: Image[] = null;
  @Input() selectedImage: Image = null;
  @Input() isMobile;
  
  itemsPerSlide = 1;
  singleSlideOffset = false;
  noWrap = false;
  interval = 5000;
  showIndicators = true;

  constructor() {}

  ngOnInit() {}

  getProductImageUrl(url) {
    return url;
  }

  onMouseOver(image: Image) {
    this.selectedImage = image;
  }
}
