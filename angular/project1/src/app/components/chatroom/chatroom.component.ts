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
            avatar: 'https://avatars.githubusercontent.com/u/139426?s=48&v=4',
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
            avatar: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
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
            "avatar": "",
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
            "avatar": "https://i.pinimg.com/originals/f7/99/93/f799933b4a2f40a92ef26635ee6110eb.png",
            "message": "Hello guys, any new schemes to get rich?",
            "time": "12:00 PM",
            "status": "read"
          },
          {
            "user": "babu.rao",
            "name": "Baburao Ganpatrao Apte",
            "avatar": "https://sc0.blr1.digitaloceanspaces.com/thumbnail/880445-aazxyprclb-1527422690.jpeg",
            "message": "Hello Raju! Scheme hai, par tumhare jaise logo ke liye nahi hai! 😂",
            "time": "12:01 PM",
            "status": "read"
          },
          {
            "user": "raju",
            "name": "Raju",
            "avatar": "https://i.pinimg.com/originals/f7/99/93/f799933b4a2f40a92ef26635ee6110eb.png",
            "message": "No thanks, Babu Bhaiya. I don't want to end up in another mess!",
            "time": "12:02 PM",
            "status": "unread"
          }
        ]
      }            
    ],

    users: [
      {
        "name": "Joe Biden",
        "avatar": 'https://www.pngguru.in/storage/uploads/images/Joe%20biden%20American%20politician%20transparent%20png_1671540392_1135352576.webp',
        "unread": 1,
        "message": [
          {
            "user": "joe.biden",
            "name": "Joe Biden",
            "avatar": 'https://www.pngguru.in/storage/uploads/images/Joe%20biden%20American%20politician%20transparent%20png_1671540392_1135352576.webp',
            "message": "Hello, how are you?",
            "time": "12:00 PM",
            "status": "read"
          },
          {
            "user": "me",
            "name": "Me",
            "avatar": 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
            "message": "Hello Joe, I am good. How about you?",
            "time": "12:01 PM",
            "status": "unread"
          }
        ]
      },
      {
        "name": "Elon Musk",
        "avatar": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovZAQb84HUaljblHbfvxVLWKAUAfc0_0jLg&s',
        "unread": 1,
        "message": [
          {
            "user": "elon.musk",
            "name": "Elon Musk",
            "avatar": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovZAQb84HUaljblHbfvxVLWKAUAfc0_0jLg&s',
            "message": "Hello, how are you?",
            "time": "12:00 PM",
            "status": "read"
          },
          {
            "user": "me",
            "name": "Me",
            "avatar": 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
            "message": "Hello Elon, I am good. How about you?",
            "time": "12:01 PM",
            "status": "unread"
          }
        ]
      },
      {
        "name": "Bill Gates",
        "avatar": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDeFAQP-Ymfu7nbnMK3TydmTTxx3jIMcI8A&s',
        "unread": 1,
        "message": [
          {
            "user": "bill.gates",
            "name": "Bill Gates",
            "avatar": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDeFAQP-Ymfu7nbnMK3TydmTTxx3jIMcI8A&s',
            "message": "Hello, how are you?",
            "time": "12:00 PM",
            "status": "read"
          },
          {
            "user": "me",
            "name": "Me",
            "avatar": 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
            "message": "Hello Bill, I am good. How about you?",
            "time": "12:01 PM",
            "status": "unread"
          }
        ]
      },
      {
        "name": "Mark Zuckerberg",
        "avatar": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwIU8rKQaZKZ9mmTucashfg0ldpSH3ut44w&s',
        "unread": 1,
        "message": [
          {
            "user": "mark.zuckerberg",
            "name": "Mark Zuckerberg",
            "avatar": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwIU8rKQaZKZ9mmTucashfg0ldpSH3ut44w&s',
            "message": "Hello, how are you?",
            "time": "12:00 PM",
            "status": "read"
          },
          {
            "user": "me",
            "name": "Me",
            "avatar": 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
            "message": "Hello Mark, I am good. How about you?",
            "time": "12:01 PM",
            "status": "unread"
          }
        ]
      },
      {
        "name": "Sundar Pichai",
        "avatar": 'https://media.licdn.com/dms/image/D4E03AQFrmDuWUxQoMg/profile-displayphoto-shrink_200_200/0/1715645354619?e=2147483647&v=beta&t=_WBVcQpyigwPLI-efv18uQQ3eV_hhzU5DcUlIHl77HA',
        "unread": 1,
        "message": [
          {
            "user": "sundar.pichai",
            "name": "Sundar Pichai",
            "avatar": 'https://media.licdn.com/dms/image/D4E03AQFrmDuWUxQoMg/profile-displayphoto-shrink_200_200/0/1715645354619?e=2147483647&v=beta&t=_WBVcQpyigwPLI-efv18uQQ3eV_hhzU5DcUlIHl77HA',
            "message": "Hello, how are you?",
            "time": "12:00 PM",
            "status": "read"
          },
          {
            "user": "me",
            "name": "Me",
            "avatar": 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
            "message": "Hello Sundar, I am good. How about you?",
            "time": "12:01 PM",
            "status": "unread"
          }
        ]
      },
      {
        "name": "Satya Nadella",
        "avatar": 'https://fortune.com/img-assets/wp-content/uploads/2024/05/SN_02-Gray-Table_00198.jpg?w=1440&q=75',
        "unread": 1,
        "message": [
          {
            "user": "satya.nadella",
            "name": "Satya Nadella",
            "avatar": 'https://fortune.com/img-assets/wp-content/uploads/2024/05/SN_02-Gray-Table_00198.jpg?w=1440&q=75',
            "message": "Hello, how are you?",
            "time": "12:00 PM",
            "status": "read"
          },
          {
            "user": "me",
            "name": "Me",
            "avatar": 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
            "message": "Hello Satya, I am good. How about you?",
            "time": "12:01 PM",
            "status": "unread"
          }
        ]
      }
    ]
  }

  filteredData: any = this.chats;

  chatIndex: {index: number, type: 'groups'|'users'} = {
    index: -1,
    type: 'groups'
  }

  setChatIndex(index: number, type: 'groups'|'users') {
    this.chatIndex.index = index;
    this.chatIndex.type = type;
  }

  message: string = '';

  setMessage(event: any) {
    this.message = event.target.value;
  };

  sendMessage() {
    if (this.message) {
      this.chats[this.chatIndex.type][this.chatIndex.index].message.push({
        "user": "me",
        "name": "Me",
        "avatar": 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
        "message": this.message,
        "time": "12:01 PM",
        "status": "read"
      })
      this.message = '';
    }
  }

  onSearch(event: any) {
    this.filteredData = {
      groups: this.chats.groups.filter((group: any) => group.name.toLowerCase().includes(event.target.value.toLowerCase())),
      users: this.chats.users.filter((user: any) => user.name.toLowerCase().includes(event.target.value.toLowerCase()))
    }
  }
}
