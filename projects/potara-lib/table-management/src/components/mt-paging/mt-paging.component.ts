import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

/**
 * MT Paging controller
 */
@Component({
  selector: 'pot-mt-paging',
  templateUrl: './mt-paging.component.html',
  styleUrls: ['./mt-paging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MtPagingComponent implements OnInit {
  // lunghezza della lista visualizzata
  _listLength = 0;
  @Input()
  get listLength() {
    return this._listLength;
  }
  set listLength(val: number) {
    this._listLength = val;

    // al cambio degli elementi visualizzati ricarico il numero la lista dei take
    this.loadTake();
    // al cambio della lista ricarico il numero di pagine disponibili
    this.loadPages();
  }
  // tagli degli elementi visualizzati per ogni pagina
  @Input() takesItems: number[] = [5, 10, 30];

  @Input() checkCount: number;

  shownTakesItems: number[] = [];
  // emissione cambio degli elementi recuperati nella pagina
  @Output()
  takeChange = new EventEmitter<number>();

  takeValue: number;
  // elementi visualizzati
  @Input()
  get take() {
    return this.takeValue;
  }
  set take(val: number) {
    // TODO check take exists in takeChange array
    this.takeValue = +val;
    // al cambio degli elementi visualizzati ricarico il numero la lista dei take
    this.loadTake();
    // al cambio degli elementi visualizzati ricarico il numero di pagine disponibili
    this.loadPages();
    // emissione evento cambio
    this.takeChange.emit(this.takeValue);
  }

  // evento cambio pagina
  @Output()
  pageChange = new EventEmitter<number>();
  pageValue: number;
  @Input()
  get page() {
    return this.pageValue;
  }

  set page(val: number) {
    // check if real page change happens
    const pageChange = this.pageValue !== val;

    this.pageValue = val;
    if (pageChange) {
      // aggiorno paginatore
      this.validateCurrentPage();
      // emissione evento cambio pagina
      this.pageChange.emit(this.pageValue);
    }
  }

  // numero di pagine totali
  numPage = 0;
  // gruppi di pagine nel paginatore
  numPaging = 1;
  // range di pagine visualizzate
  pagingTake = 10;
  // paginazione dell'indicatore di pagine
  pagingPage = 0;

  get PagingPage() {
    return this.pagingPage;
  }

  set PagingPage(val) {
    this.pagingPage = val;

    // riaggiorno lista delle pagine
    this.loadPages();
  }
  // pagine disponibili
  availablePages: number[];

  constructor() {}

  ngOnInit() {
    // this.loadTake();
    // this.loadPages();
  }
  validateCurrentPage() {
    // se la pagina corrente è all'esterno delle pagine visualizzate devo modificare la pagina corrente
    if (
      this.PagingPage * this.pagingTake < this.page ||
      this.PagingPage * (this.pagingTake + 1) > this.page
    ) {
      this.pagingPage = Math.ceil(this.page / this.pagingTake);
    }

    this.loadPages();
  }

  loadTake() {
    // reset take array
    this.shownTakesItems = [];

    // ricalcolo del numero massimo di elementi visualizzati
    this.shownTakesItems = this.takesItems.filter(x => {
      // se tra le opzioni ho la possibilità di visualizzare più elementi del numero
      return x <= this.listLength;
    });

    // se l'ultimo valore non corrisponde con il numero massimo aggiungo il massimo visualizzabile
    if (
      this.shownTakesItems.length > 0 &&
      this.shownTakesItems[this.shownTakesItems.length - 1] !== this.listLength
    ) {
      this.shownTakesItems.push(this.listLength);
    }

    // override della priprietà input take per pareggiare le selezioni con l'effettivo take in tabella
    if (this.shownTakesItems.length > 0 && !this.take) {
      // update an input value in init methods whitout getting console error
      setTimeout(() => {
        this.take = this.shownTakesItems[0];
      });
    }
  }
  loadPages() {
    // pages number
    this.numPage = Math.ceil(this.listLength / this.take);
    if (!this.numPage) {
      return;
    }

    // compongo un array di numeri
    const totalPages = Array(this.numPage)
      .fill(0)
      .map((x, i) => i + 1);

    // se il numero di pagine totali è maggiore del numero di pagine visualizzabili
    if (this.numPage > this.pagingTake) {
      // page enumeration
      this.numPaging = Math.ceil(this.numPage / this.pagingTake);
      const resultList: any[] = [];
      // Validate page
      if (this.pagingPage < 1) {
        this.PagingPage = 1;
        // il cambio della proprietà pubblica farà si che la funzione verrà richiamata autonomamente
        return;
      }
      if (this.pagingPage > this.numPaging) {
        this.PagingPage = this.numPaging;
        // il cambio della proprietà pubblica farà si che la funzione verrà richiamata autonomamente
        return;
      }

      for (
        let i = (this.pagingPage - 1) * this.pagingTake;
        i < this.pagingPage * this.pagingTake && i < totalPages.length;
        i++
      ) {
        resultList.push(totalPages[i]);
      }
      this.availablePages = resultList;
    } else {
      this.availablePages = totalPages;
    }
    // verifico pagina corrente
    if (this.page > this.numPage) {
      this.page = this.availablePages[this.availablePages.length - 1];
    }
  }
}
