import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HistoryService, HistoryState } from 'src/core/services/history.service';
import { History } from 'src/models/history';

@Component({
    selector: 'app-history',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './history.component.html',
})
export class HistoryComponent {
    protected history$: Observable<History[]>;

    private _historyService = inject(HistoryService);

    constructor() {
        // Directly use the history observable
        this.history$ = this._historyService.history$.pipe(map((state: HistoryState) => state.history));
    }
}
