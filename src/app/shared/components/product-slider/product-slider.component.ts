import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSliderComponent implements OnInit {
  @Input() productsList = new Array(10);
  @Input() showRating: boolean;
  
  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = false;
  slidesOnly = false;
  
  breakpoint(width: number): number {
    if (width <= 576) return 1;      // xs
    if (width <= 768) return 2;      // sm
    if (width <= 992) return 3;      // md
    return 5;                         // lg
  }
  
  constructor() {}

  ngOnInit() {}
}
