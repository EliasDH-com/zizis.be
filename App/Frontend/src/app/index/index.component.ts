/**
 * @author EliasDH Team
 * @see https://eliasdh.com
 * @since 01/01/2025
 */

import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { SharedModule } from '../shared/shared.module';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    imports: [TranslatePipe, CommonModule, SharedModule],
    standalone: true
})
export class IndexComponent implements OnInit {
    dropdownOpen: boolean = false;
    currentLanguage: string = 'nl'; // Standaard Nederlands
    currentTheme: string = 'light'; // Standaard licht thema

    settingsConfig = {
        languages: [
            { code: 'nl', name: 'Nederlands' },
            { code: 'fr', name: 'Français' },
            { code: 'en', name: 'English' },
            { code: 'de', name: 'Deutsch' }
        ]
    };

    galleryPhotos: string[] = [
        'assets/media/images/gallery/photo1.png',
        'assets/media/images/gallery/photo2.png',
        'assets/media/images/gallery/photo3.png',
        'assets/media/images/gallery/photo4.png',
        'assets/media/images/gallery/photo5.png'
    ];

    constructor(private languageService: LanguageService, private translate: TranslateService) {}

    ngOnInit(): void {
        this.languageService.checkAndSetLanguage();
        this.translate.setDefaultLang('nl');
        this.setTheme(this.currentTheme);
    }

    changeLanguage(languageCode: string) {
        this.translate.use(languageCode);
        localStorage.setItem('language', languageCode);
        this.currentLanguage = languageCode;
        this.dropdownOpen = false;
    }

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
    }

    isToday(day: string): boolean {
        const today = new Date();
        const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
        return day === days[today.getDay()];
    }

    setTheme(theme: string) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
    }
}