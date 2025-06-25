import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'projects', component: Projects },
    { path: 'contact', component: Contact }
];
