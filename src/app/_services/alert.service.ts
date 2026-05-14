import { Injectable } from "@angular/core";
import { from, Observable, Subject } from "rxjs";
import { filter } from "rxjs/operators";

import { Alert, AlertOptions, AlertType } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';

    onAlert(id = this.defaultId): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.id === id));
    }

    success(message: string, options?: AlertOptions) {
        this.onAlert(new Alert({ ...options, type: AlertType.Success, message }));
    }

    error(message: string, options?: AlertOptions) {
        this.onAlert(new Alert({ ...options, type: AlertType.Error, message }));
    }

    
}