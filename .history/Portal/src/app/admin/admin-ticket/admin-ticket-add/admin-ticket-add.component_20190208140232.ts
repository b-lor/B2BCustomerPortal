import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-admin-ticket-add',
  templateUrl: './admin-ticket-add.component.html',
  styleUrls: ['./admin-ticket-add.component.css']
})
export class AdminTicketAddComponent implements OnInit {
ticket = new Ticket();
userID = this.userService.getLoginId();

showSuccessMessage: boolean;
serverErrorMessages: string;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    this.insertID(this.ticket);

    this.ticketService.addTicket(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Something went wrong. Please contact the Admin.';
        }
      }
    );

// this.insertID(this.ticket);
//     this.ticketService.addTicket(this.ticket).subscribe(res => {
//       console.log(res);

//       this.router.navigateByUrl('admin/ticket');

//     },
//       err => {
//         console.log(err);
//       }
//     );
}

resetForm(form: NgForm) {
  this.ticket = {
    _id: '',
    user: '',
    ticketId: '',
    issue: '',
    description: '',
    submittedBy: '',
    resolution: '',
    priority: '',
    status: '',
    text: '',
    dateSubmitted: null,
    dateUpdate: null
  };
  form.resetForm();
  this.serverErrorMessages = '';
}

insertID(ticket) {
  ticket.user = this.userID;
}
}
