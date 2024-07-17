import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ErrorHandlerService implements ErrorHandler{

  constructor(private snackBar:MatSnackBar) { }

  handleError(error: any): void {
    this.snackBar.open(error.message,undefined,{duration:5000});
  }
}
