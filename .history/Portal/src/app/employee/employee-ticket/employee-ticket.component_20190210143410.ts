import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model.admin';
import { TicketService } from '../../shared/ticket.service';
import { map } from 'rxjs/operators';
import { UserService } from '../../shared/user.service';
import { UserAdminService } from '../../shared/user-admin.service';


import { Ticket } from './../../shared/ticket.model';

@Component({
  selector: 'app-employee-ticket',
  templateUrl: './employee-ticket.component.html',
  styleUrls: ['./employee-ticket.component.css']
})
export class EmployeeTicketComponent implements OnInit {
  
  tickets: Ticket[];
  user: User;
  userID;
  ticketInfo: any;
department = this.userService.getDepartment();

  constructor(private userAdminService: UserAdminService, private userService: UserService, private router: Router, private ticketService: TicketService) { }

  ngOnInit() {

    const userSub = this.userAdminService.getUser(this.userService.getLoginId()).subscribe(user => {
      this.user = user;
        console.log('tickets');
        console.log(this.user.department);



//       // const ticketSub = this.ticketService.getTicketIssues().subscribe(tickets => {
//       //   this.tickets = tickets;
//       //   // console.log('tickets');
//       //   // console.log(tickets);

//       //   ticketSub.unsubscribe();
//       // });
        
  // userSub.unsubscribe();

});

      this.ticketService.getTicketIssues()
      .subscribe( res=> {

    this.ticketInfo = res;
            console.log('rescue');
        console.log(this.ticketInfo);
        }, err=> {
          console.log(err);
        }
      );
  }


}
