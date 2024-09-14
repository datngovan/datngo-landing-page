import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '@lib/components/banner/banner.component';
import { AppTheme, ThemeService } from '@lib/services/theme';
import { HostComponent } from '@pages/host/host.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, HostComponent, BannerComponent],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
    currentTheme!: AppTheme | null;

    private readonly _themeService = inject(ThemeService);

    private readonly _destroy$ = new Subject();

    ngOnInit(): void {
        this._themeService.currentTheme$
            .pipe(takeUntil(this._destroy$))
            .subscribe((theme) => (this.currentTheme = theme));
    }

    ngOnDestroy(): void {
        this._destroy$.complete();
        this._destroy$.unsubscribe();
    }

    handleThemeChange(theme: AppTheme): void {
        this._themeService.setTheme(theme);
    }
}
