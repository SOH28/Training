import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { ChatroomComponent } from "../components/chatroom/chatroom.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ChatroomComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
