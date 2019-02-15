import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Trackers } from '../../../shared/trackers';
import { UserService } from '../../../shared/user.service';
import { Ticket } from '../../../shared/ticket.model';
import { TicketService } from '../../../shared/ticket.service';
import { Tracker } from '../../../shared/tracker.model';
import { TrackerService } from '../../../shared/tracker.service';

@Component({
  selector: 'app-employee-ticket-details',
  templateUrl: './employee-ticket-details.component.html',
  styleUrls: ['./employee-ticket-details.component.css']
})
export class EmployeeTicketDetailsComponent implements OnInit {
  tickets: Ticket;
  ticketId;
  tracker: Tracker;
  trackerDetails= new Tracker();
  userID = this.userService.getLoginId();

  trackers: Tracker[];

  formatsDate: string[] = [
    'dd-MM-yyyy',
    ];
    
  constructor(private userService: UserService, private trackerService: TrackerService, private route: ActivatedRoute, private router: Router, private ticketService: TicketService) { 
    this.route.params.subscribe(params => {
      this.ticketId = params['id'];

//       console.log('this.ticketId');
// console.log(this.ticketId);


    });

  }
  ngOnInit() {

    const ticketSub = this.ticketService.getTicket(this.ticketId).subscribe(tickets => {
      this.tickets = tickets;
      // console.log('tickets');
      // console.log(this.tickets);

      const trackerSub = this.trackerService.getCustomerTracker(this.tickets._id).subscribe(trackers => {
        this.trackers = trackers;
        // console.log('trackers');
        // console.log(this.tickets._id);

        trackerSub.unsubscribe();
      });


      ticketSub.unsubscribe();
    });

  //   userSub.unsubscribe();
  // })





  
    //   const ticketSub = this.ticketService.getTicket(this.ticketId).subscribe(tickets => {
    //     this.tickets = tickets;
    //     console.log('tickets');
    //     console.log(tickets);

    //     ticketSub.unsubscribe();
    //   });

    // //   userSub.unsubscribe();
    // // })
  }

  onSubmit() {
    this.insertUserID(this.trackerDetails);
    this.insertTicketID(this.trackerDetails);

    // this.trackerUpdate();

    // this.ticketService.updateTicket(this.ticket._id, this.ticket).subscribe(res => {
    //   console.log(res)
    this.trackerService.addTracker(this.trackerDetails).subscribe(res => {
      console.log(res)
  
      location.reload();
      
      // this.router.navigateByUrl('customer/ticket');
  
    },
      err => {
        console.log(err);
      }
    );
}
  
insertUserID(trackerDetails){
  trackerDetails.user = this.userID
}
insertTicketID(trackerDetails){
  trackerDetails.ticket = this.tickets._id
}
}