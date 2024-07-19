import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss'
})
export class Section1Component {

}
