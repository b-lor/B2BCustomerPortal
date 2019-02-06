import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';
import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';
import { Tracker } from '../../../shared/tracker.model';
import { TrackerService } from '../../../shared/tracker.service';
@Component({
  selector: 'app-customer-ticket-edit',
  templateUrl: './customer-ticket-edit.component.html',
  styleUrls: ['./customer-ticket-edit.component.css']
})
export class CustomerTicketEditComponent implements OnInit {
  ticket: Ticket;
  tracker= new Tracker();
  ticketID;
  userID = this.userService.getLoginId();

    constructor(private trackerService: TrackerService, private userService: UserService, private route: ActivatedRoute, private router: Router, private ticketService: TicketService) {
      this.route.params.subscribe(params => {
        this.ticketID = params['id'];
      });
     }
  
    ngOnInit() {
          const userTicket = this.ticketService.getTicket(this.ticketID).subscribe(ticket => {
      this.ticket = ticket;

      console.log(ticket);

      userTicket.unsubscribe();
    })
    }
    onSubmit() {
      this.insertUserID(this.tracker);
      this.insertTicketID(this.tracker);

      // this.trackerUpdate();

      // this.ticketService.updateTicket(this.ticket._id, this.ticket).subscribe(res => {
      //   console.log(res)
      this.trackerService.addTracker(this.tracker).subscribe(res => {
        console.log(res)
    

        
        this.router.navigateByUrl('customer/ticket');
    
      },
        err => {
          console.log(err);
        }
      );
  }

  // trackerUpdate() {
  //   this.trackerService.addTracker(this.tracker).subscribe(res => {
  //     console.log(res)
  

      
  //     this.router.navigateByUrl('customer/ticket');
  
  //   },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  insertUserID(tracker){
    tracker.user = this.userID
  }
  insertTicketID(tracker){
    tracker.ticket = this.ticket._id
  }
  }
  

  //   onSubmit() {
  //     this.insertUserID(this.ticket);
  //     this.insertTicketID(this.tracker);
  //     this.ticketService.updateTicket(this.ticket._id, this.ticket).subscribe(res => {
  //       console.log(res)
    
  //       this.router.navigateByUrl('customer/ticket');
    
  //     },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }

  // insertUserID(tracker){
  //   tracker.user = this.userID
  // }
  // insertTicketID(tracker){
  //   tracker.ticket = this.ticket._id
  // }
  // }
  