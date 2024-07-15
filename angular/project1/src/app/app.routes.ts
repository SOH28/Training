import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { DevComponent } from './components/dev/dev.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'chatroom',
                component: ChatroomComponent
            },
            {
                path: 'home',
                component: DevComponent
            },
            {
                path: 'notification',
                component: DevComponent
            },
            {
                path: 'settings',
                component: DevComponent
            }
        ]
    }
];
