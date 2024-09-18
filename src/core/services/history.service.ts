import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { History } from 'src/models/history';

export interface HistoryState {
    history: History[];
    command: string;
    lastCommandIndex: number;
}

@Injectable({
    providedIn: 'root',
})
export class HistoryService {
    private _stateSubject = new BehaviorSubject<HistoryState>({
        history: [],
        command: '',
        lastCommandIndex: 0,
    });

    // Observable for history state
    history$ = this._stateSubject.asObservable();

    setHistory(output: string): void {
        console.log('set output:  ', output);
        const currentState = this._stateSubject.getValue();
        const newHistory: History = {
            id: currentState.history.length,
            date: new Date(),
            command: currentState.command,
            output: output,
        };

        // Update the BehaviorSubject with the new state
        this._stateSubject.next({
            ...currentState,
            history: [...currentState.history, newHistory],
        });
    }

    setCommand(command: string): void {
        console.log('set:  ', command);
        const currentState = this._stateSubject.getValue();
        this._stateSubject.next({
            ...currentState,
            command: command,
        });
    }
}
