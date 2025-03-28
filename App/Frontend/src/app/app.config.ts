/**
    * @author EliasDH Team
    * @see https://eliasdh.com
    * @since 01/01/2025
**/

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Title } from '@angular/platform-browser';
import { importProvidersFrom } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../main";

export const appConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom(
            HttpClientModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            })
        ),
        { provide: Title, useValue: 'Zizis' }
    ]
};