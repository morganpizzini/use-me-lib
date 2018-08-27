import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'isl-badge',
    template: `<span *ngIf="!popOver" class="badge" title="{{title}}" [ngClass]="state ? trueBadgeClass : falseBadgeClass">
    {{ state ? trueStatus : falseStatus}}</span>
    <span *ngIf="popOver" class="badge" [ngClass]="state ? trueBadgeClass : falseBadgeClass"
    [ngbPopover]="popOver" popoverTitle="{{popOverTitle}}">
    {{ state ? trueStatus : falseStatus}}</span>`,
})
export class BadgeComponent implements OnInit {
    @Input()
    state = false;
    // text
    @Input()
    trueStatus: string = undefined;
    @Input()
    falseStatus: string = undefined;
    // class
    @Input()
    trueBadgeClass: string = undefined;
    @Input()
    falseBadgeClass: string = undefined;

    @Input()
    popOver: string = undefined;
    @Input()
    popOverTitle: string = undefined;
    @Input()
    title: string = undefined;
    constructor() { }
    ngOnInit(): void {
        if (!this.trueStatus) {
            this.trueStatus = 'Enabled';
        }
        if (!this.falseStatus) {
            this.falseStatus = 'Disabled';
        }
        if (!this.trueBadgeClass) {
            this.trueBadgeClass = 'success';
        }
        this.trueBadgeClass = `badge-${this.trueBadgeClass}`;
        if (!this.falseBadgeClass) {
            this.falseBadgeClass = 'danger';
        }
        this.falseBadgeClass = `badge-${this.falseBadgeClass}`;
    }
}
