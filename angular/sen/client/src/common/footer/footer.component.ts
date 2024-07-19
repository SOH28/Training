import { Component } from '@angular/core';
import { IFooter } from '../../types/type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faYoutube, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  footerInfo: IFooter[] = [
    {
      title: 'GET A QUOTE',
      items: [
        {
          avatar: 'https://imgur.com/Irg3Xq5.png',
          msg: '+1 (289) 804-0086',
          href: 'tel:+12898040086'
        },
        {
          avatar: 'https://imgur.com/4WXPPh4.png',
          msg: '+919748743357',
          href: 'tel:+919748743357'
        },
        {
          avatar: 'https://imgur.com/u1Q9h5j.png',
          msg: 'sales@sentientgeeks.com',
          href: 'mailto:sales@sentientgeeks.com'
        },
        {
          avatar: 'https://imgur.com/xADzJ1o.png',
          msg: 'Call on Skype',
          href: 'skype:live:sentientgeeks?chat'
        }
      ]
    },
    {
      title: 'QUICK LINKS',
      items: [
        {
          msg: 'About Us',
          href: 'your_link_here'
        },
        {
          msg: 'Core Values',
          href: 'your_link_here'
        },
        {
          msg: 'Careers',
          href: 'your_link_here'
        },
        {
          msg: 'Contact Us',
          href: 'your_link_here'
        },
        {
          msg: 'Blog',
          href: 'your_link_here'
        },
        {
          msg: 'Privacy Policy',
          href: 'your_link_here'
        },
        {
          msg: 'Refund Policy',
          href: 'your_link_here'
        },
        {
          msg: 'Delivery & Shipping Policy',
          href: 'your_link_here'
        }
      ]
    },
    {
      title: 'HIRE DEDICATED TEAM',
      items: [
        {
          msg: 'Web Developer',
          href: 'your_link_here'
        },
        {
          msg: 'Wordpress | Joomla',
          href: 'your_link_here'
        },
        {
          msg: 'E-commerce Developer',
          href: 'your_link_here'
        },
        {
          msg: 'Magento | WooCommerce | Shopify',
          href: 'your_link_here'
        },
        {
          msg: 'Mobile App Developer',
          href: 'your_link_here'
        },
        {
          msg: 'Android | IOS | Xamarin',
          href: 'your_link_here'
        },
        {
          msg: 'Full Stack Developer',
          href: 'your_link_here'
        },
        {
          msg: 'MEAN | MERN | .NET Core',
          href: 'your_link_here'
        },
        {
          msg: 'Front End Developer',
          href: 'your_link_here'
        },
        {
          msg: 'UI/UX | Angular | Vue Js',
          href: 'your_link_here'
        },
        {
          msg: 'Backend Developer',
          href: 'your_link_here'
        },
        {
          msg: 'PHP | Node JS | Laravel',
          href: 'your_link_here'
        }
      ]
    }
  ];
}
