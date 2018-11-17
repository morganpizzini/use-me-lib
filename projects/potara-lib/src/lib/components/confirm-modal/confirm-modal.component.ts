import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'pot-confirm-modal',
    template: `<div class="modal-header">
    <h4 class="modal-title">{{title}}</h4>
    <button type="button" class="close" aria-label="Close"  (click)="dismissModal()">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="modal-body">
        <p *ngIf="!showInTextArea">{{message}}</p>
        <textarea rows="{{textAreaRows}}" *ngIf="showInTextArea" style="width:100%">{{message}}</textarea>
          <div class="text-right">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="dismissModal()">{{abortButtonTxt}}</button>
              <button type="button" class="btn btn-success ml-1" *ngIf="showConfirm" (click)="confirmModal()">{{confirmButtonTxt}}</button>
          </div>
</div>`,
})
export class ConfirmModalComponent implements OnInit {
    // confirm buttons text
    @Input()
    confirmButtonTxt: string = undefined;
    // abort buttons text
    @Input()
    abortButtonTxt: string = undefined;

    // modal title text
    @Input()
    title: string = undefined;
    // modal message text
    @Input()
    message: string = undefined;

    // show confirm button
    @Input()
    showConfirm = true;
    // show message in text-area
    @Input()
    showInTextArea = false;
    // text-area rows
    @Input()
    textAreaRows = 5;

    constructor(private _activeModal: NgbActiveModal) { }
    ngOnInit(): void {
        if (!this.confirmButtonTxt) {
            this.confirmButtonTxt = 'Confirm';
        }
        if (!this.abortButtonTxt) {
            this.abortButtonTxt = 'Abort';
        }
    }

    confirmModal() {
        // close with confirm modal
        this._activeModal.close();
    }

    dismissModal(): void {
        // close with abort modal
        this._activeModal.dismiss();
    }
}
