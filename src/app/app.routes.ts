import { Routes } from '@angular/router';
import { Component01 } from './componentes/component01/component01';
import { Comments } from './componentes/comments/comments';
import { CreateUser } from './componentes/create-user/create-user';

export const routes: Routes = [
    {
        path: 'consultar-usuarios', component: Component01
    },
    {
        path: 'comments', component: Comments
    },
    {
        path: 'crear-usuario', component: CreateUser
    }
];
