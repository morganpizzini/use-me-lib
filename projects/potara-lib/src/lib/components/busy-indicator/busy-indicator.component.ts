import { Component, Input, OnInit } from '@angular/core';

/**
 * Default busy indicator template
 */
@Component({
    selector: 'pot-busy-indicator',
    template: `<div id="overlay">
  <div id="text">{{text}}</div>
</div>`,
    styles: [`#overlay {
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
}
#text{
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
}`]
})
export class BusyIndicatorComponent implements OnInit {
    // testo da visualizzare accanto allo spinner
    @Input()
    text: string = null;

    /**
     * Costruttore
     */
    constructor() { }

    /**
     * Inizializzatore
     */
    ngOnInit(): void {
        // se l'input text non è valorizzato lo riassegno
        if (!this.text) {
            this.text = 'Loading...';
        }
    }
}
