/**
    * @author EliasDH Team
    * @see https://eliasdh.com
    * @since 01/01/2025
**/

import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    { path: '', component: IndexComponent, data: { title: 'Zizis' } },
];