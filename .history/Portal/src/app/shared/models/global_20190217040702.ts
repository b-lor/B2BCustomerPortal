import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';

@Injectable()
export class Globals {
  transaction_id: string;
  selTransaction = new Transaction();
}
