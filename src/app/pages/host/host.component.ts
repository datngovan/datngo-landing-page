import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../config.json';

@Component({
    selector: 'app-host',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './host.component.html',
    styleUrls: ['./host.component.css'],
})
export class HostComponent {
    protected jsonData: any = data as any;
}
