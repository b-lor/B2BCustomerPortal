export class Tracker {
  _id: string;
  responseId: string;
  comment: string;
  other: string;
  dateUpdated: Date;

  deserialize(data: any): Tracker {
    return <Tracker>Object.assign(
      {},
      {
        _id: data._id,
        responseId: data.responseId,
        comment: data.comment,
        other: data.other,
        dateUpdated: data.dateUpdated
      }
    );
  }
}
