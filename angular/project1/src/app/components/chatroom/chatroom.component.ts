import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-chatroom',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.css'
})
export class ChatroomComponent {
  chats = {
    groups: [
      {
        name: 'Angular Dev Team',
        avatar: 'https://avatars.githubusercontent.com/u/139426?s=48&v=4',
        unread: 1,
        message: [
          {
            user: 'john.doe',
            name: 'John Doe',
            message: 'Hello Angular',
            time: '12:00 PM',
            status: 'read',
          },
          {
            user: 'angular.bot',
            name: 'Angular Bot',
            message: 'Hello John, How can I help you today?',
            time: '12:00 PM',
            status: 'read',
          },
          {
            user: 'john.doe',
            name: 'John Doe',
            message: 'No Thanks',
            time: '12:00 PM',
            status: 'unread',
          },
          {
            user: 'me',
            name: 'Me',
            message: 'Angular is FUN',
            time: '12:50 PM',
            status: 'unread',
          }
        ]
      },
      {
        "name": "Welcome",
        "avatar": 'https://stickerly.pstatic.net/sticker_pack/ZJPqIDnCmJY0WC2Gnn0uyg/NCXRGF/33/58c8366e-8fbc-4dc2-b985-b57445e4bac0.png',
        "unread": 1,
        "message": [
          {
            "user": "rajiv.singh",
            "name": "Rajiv",
            "message": "Hello everyone, what's cooking?",
            "time": "12:00 PM",
            "status": "read"
          },
          {
            "user": "majnu.bhai",
            "name": "Majnu Bhai",
            "message": "Hello Rajiv! Painting a new masterpiece. Need any help?",
            "time": "12:01 PM",
            "status": "read"
          },
          {
            "user": "rajiv.singh",
            "name": "Rajiv",
            "message": "No thanks, Majnu Bhai. I don't want any 'help' with my problems!",
            "time": "12:02 PM",
            "status": "unread"
          }
        ]
      },
      {
        "name": "Hera Pheri",
        "avatar": 'https://media.themoviedb.org/t/p/w220_and_h330_face/c1Mvyd983ZyrU5Vf2aKEe6WncSq.jpg',
        "unread": 1,
        "message": [
          {
            "user": "raju",
            "name": "Raju",
            "message": "Hello guys, any new schemes to get rich?",
            "time": "12:00 PM",
            "status": "read"
          },
          {
            "user": "babu.rao",
            "name": "Baburao Ganpatrao Apte",
            "message": "Hello Raju! Scheme hai, par tumhare jaise logo ke liye nahi hai! 😂",
            "time": "12:01 PM",
            "status": "read"
          },
          {
            "user": "raju",
            "name": "Raju",
            "message": "No thanks, Babu Bhaiya. I don't want to end up in another mess!",
            "time": "12:02 PM",
            "status": "unread"
          }
        ]
      }            
    ]
  }

  chatIndex: {index: number, type: 'group'|'user'|null} = {
    index: -1,
    type: null
  }

  setChatIndex(index: number, type: 'group'|'user'|null) {
    this.chatIndex.index = index;
    this.chatIndex.type = type;
  }
}
