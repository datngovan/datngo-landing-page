import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryService } from 'src/core/services/history.service';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
})
export class InputComponent {
    protected command = '';
    private _historyService = inject(HistoryService); // Use _historyService without $

    // Method to handle command submission
    submitCommand(): void {
        if (this.isValidCommand()) {
            console.log(1);
            this._historyService.setCommand(this.command);
            this._historyService.setHistory(this.command);
            this.clearCommand();
        }
    }

    // Check if the command is valid
    private isValidCommand(): boolean {
        return this.command.trim().length > 0;
    }

    // Clear the input field after submission
    private clearCommand(): void {
        this.command = '';
    }
}
