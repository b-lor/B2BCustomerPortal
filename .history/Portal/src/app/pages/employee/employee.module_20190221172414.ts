import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdashboardComponent } from './edashboard/edashboard.component';
import { EticketComponent } from './eticket/eticket.component';
import { EaddTicketComponent } from './eticket/eadd-ticket/eadd-ticket.component';

@NgModule({
  declarations: [EdashboardComponent, EticketComponent, EaddTicketComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
