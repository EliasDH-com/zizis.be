/**
 * @author EliasDH Team
 * @see https://eliasdh.com
 * @since 01/01/2025
 */

import { NgModule } from '@angular/core';
import { ContextMenuComponent } from './contextmenu/contextmenu.component';

@NgModule({
    imports: [
        ContextMenuComponent
    ],
    exports: [
        ContextMenuComponent
    ]
})

export class SharedModule {}