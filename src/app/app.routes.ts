import { Routes } from '@angular/router';
import { ContentDrawerComponent } from './content-drawer/content-drawer.component';

export const routes: Routes = [
    {
        path: 'element/:elementId', component: ContentDrawerComponent
    }
]; 