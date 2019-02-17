export class Ticket {
  _id: string;
  user: string;
  ticketId: string;
  issue: string;
  description: string;
  submittedBy: string;
  resolution: string;
  priority: string;
  status: string;
  text: string;
  dateSubmitted: Date;
  dateUpdate: Date;

  deserialize(data: any): Ticket {
    return <Ticket>Object.assign(
      {},
      {
        _id: data._id,
        user: data.user,
        ticketId: data.ticketId,
        issue: data.issue,
        description: data.description,
        submittedBy: data.submittedBy,
        resolution: data.resolution,
        priority: data.priority,
        status: data.status,
        text: data.text,
        dateSubmitted: data.dateSubmitted,
        dateUpdate: data.dateUpdate
      }
    );
  }
}
