import { Routes } from '@angular/router';
import { ElementSetupComponent } from './element-setup/element-setup.component';

export const routes: Routes = [
    {
        path: 'element/:elementId', component: ElementSetupComponent
    }
]; 