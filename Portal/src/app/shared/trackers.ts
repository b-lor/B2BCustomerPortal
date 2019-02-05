import { Injectable } from '@angular/core';
import { Tracker } from './tracker.model';

@Injectable()
export class Trackers {

    tracker_id: string;
    selTracker = new Tracker();

}