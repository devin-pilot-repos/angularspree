import { environment } from './../../../../environments/environment';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-lp-banner',
  templateUrl: './lp-banner.component.html',
  styleUrls: ['./lp-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LpBannerComponent implements OnInit, AfterViewInit {
  public bannerItems = environment.config.landing_page_banner;
  
  itemsPerSlide = 1;
  singleSlideOffset = false;
  noWrap = false;
  interval = 5000;
  showIndicators = true;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
