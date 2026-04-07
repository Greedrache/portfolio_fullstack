import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { ImprintComponent } from './pages/imprint/imprint.component';


export const routes: Routes = [
   { path: '', component: Main },
   { path: 'imprint', component: ImprintComponent },
];
