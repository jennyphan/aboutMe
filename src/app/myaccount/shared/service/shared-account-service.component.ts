import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedAccountService {

    private caseNumber = new Subject<string>();

    caseNumber$ = this.caseNumber.asObservable();

    publishData(data: string) {
        this.caseNumber.next(data);
    }
}