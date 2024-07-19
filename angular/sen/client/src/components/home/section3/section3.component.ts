import { Component } from '@angular/core';
import { IOffers } from '../../../types/type';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
})
export class Section3Component {
  offers: IOffers[] = [
    {
      avatar: 'https://imgur.com/veoUSEq.png',
      title: 'Creative Design',
      msg: 'Our flexible web design plan helps you build a professional & scalable website that allows your customer to fetch value-driven data & drive directly to purchase your product.',
      footer: 'Apppealing Designs'
    },
    {
      avatar: 'https://imgur.com/yEQXT8V.png',
      title: 'Web Development',
      msg: 'Offering a complete range of advanced web development services tailored to your business needs. We motivate businesses to rope in lucrative ideas for results.',
      footer: 'Custom Development services'
    },
    {
      avatar: 'https://imgur.com/hzZ9H5C.png',
      title: 'Digital Marketing',
      msg: 'We offer multi-channel digital marketing services that help the brand to gain more visibility & generate more leads, eventually increasing sales margin.',
      footer: 'Scalable Solution services'
    },
    {
      avatar: 'https://imgur.com/sAaE1eG.png',
      title: 'Mobile Application',
      msg: 'Our offshore development company is proactive at delivering mobile application development with a feature-laden process-driven approach.',
      footer: 'Personalized Mobile App services'
    },
    {
      avatar: 'https://imgur.com/ACvr5iB.png',
      title: 'Quality Assurance',
      msg: 'For proper analysis & quality check, get connected to our technical experts. Our team follows the latest technological standards for creating flawless results.',
      footer: 'Advanced Quality Check services'
    },
    {
      avatar: 'https://imgur.com/UnmSjkT.png',
      title: 'Ecommerce Development',
      msg: 'Our web application development company is focused on maximum engaging traffic & increasing the sales funnel.',
      footer: 'Skilled Development'
    }
  ];  
}
