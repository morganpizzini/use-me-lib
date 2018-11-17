import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente per visualizzare una gomma girante
 */
@Component({
    selector: 'pot-tyre-spin',
    // tslint:disable-next-line:max-line-length
    template: `<img *ngIf="imgSrc" class="image" [src]="imgSrc" alt="Pirelli Tyre Spa" width="240" height="240">`,
    styles: [`.image {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 120px;
        height: 120px;
        margin:-60px 0 0 -60px;
        -webkit-animation:spin 4s linear infinite;
        -moz-animation:spin 4s linear infinite;
        animation:spin 4s linear infinite;
    }
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }`]
})
export class ImageSpinnerComponent implements OnInit {
    // colore dell'immagine
    @Input()
    color: string = null;

    // source dell'immagine
    @Input()
    imgSrc: string = null;

    /**
     * costruttore
     */
    constructor() { }

    /**
     * Inizializzazoine
     */
    ngOnInit(): void {
        // inizializzazione del colore nel caso in cui non sia settato
        // if (!this.color) {
        //     this.color = 'yellow';
        // }
        // composizione dell percorso dell'immagine
        this.imgSrc = `assets/${this.imgSrc}${this.color}.png`;
    }
}
