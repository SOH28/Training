import { Component } from '@angular/core';
import { Section1Component } from "../../components/home/section1/section1.component";
import { Section2Component } from "../../components/home/section2/section2.component";
import { Section3Component } from "../../components/home/section3/section3.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Section1Component, Section2Component, Section3Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    
}
