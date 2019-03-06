import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as d3 from 'd3';

import { Sales } from '../../../../shared/models';

@Component({
  selector: 'app-per-day-customer',
  templateUrl: './per-day-customer.component.html',
  styleUrls: ['./per-day-customer.component.css']
})
export class PerDayCustomerComponent implements OnInit {

  @ViewChild('chart')
  chartElement: ElementRef;

  parseDate = d3.timeParse('%d-%m-%Y');

  @Input()
  salesStatus: Sales[];

  private svgElement: HTMLElement;
  private chartProps: any;


  constructor() { }

  ngOnInit() {
    if (this.salesStatus &&  this.chartProps) {
      this.updateChart();
    } else if (this.salesStatus) {
      this.buildChart();
    }
  }

  formatDate() {
    this.salesStatus.forEach(ms => {
      if (typeof ms.shippedDate === 'string') {
        ms.shippedDate = this.parseDate(ms.shippedDate);
      }
    });
  }

  updateChart() {
    const _this = this;
    this.formatDate();

    // Scale the range of the data again
    this.chartProps.x.domain(d3.extent(this.salesStatus, function (d) {
      if (d.shippedDate instanceof Date) {
        return d.shippedDate.getTime();
      }
    }));

    this.chartProps.y.domain([0, d3.max(this.salesStatus, function (d) { return Math.max(d.total, d.total); })]);

    // Select the section we want to apply our changes to
    this.chartProps.svg.transition();

    // Make the changes to the line chart
    this.chartProps.svg.select('.line.line1') // update the line
      .attr('d', this.chartProps.valueline(this.salesStatus));

    this.chartProps.svg.select('.line.line2') // update the line
      .attr('d', this.chartProps.valueline2(this.salesStatus));

    this.chartProps.svg.select('.x.axis') // update x axis
      .call(this.chartProps.xAxis);

    this.chartProps.svg.select('.y.axis') // update y axis
      .call(this.chartProps.yAxis);
  }

  buildChart() {
    this.chartProps = {};
    this.formatDate();

    // Set the dimensions of the canvas / graph
    const margin = { top: 30, right: 20, bottom: 30, left: 50 },
     width = 600 - margin.left - margin.right,
     height = 270 - margin.top - margin.bottom;

    // Set the ranges
    this.chartProps.x = d3.scaleTime().range([0, width]);
    this.chartProps.y = d3.scaleLinear().range([height, 0]);

    // Define the axes
    const xAxis = d3.axisBottom(this.chartProps.x);
    const yAxis = d3.axisLeft(this.chartProps.y).ticks(5);

    const _this = this;

    // Define the line
    const valueline = d3.line<Sales>()
     .x(function (d) {
       if (d.shippedDate instanceof Date) {
         return _this.chartProps.x(d.shippedDate.getTime());
       }
     })
     .y(function (d) { console.log('Close market'); return _this.chartProps.y(d.total); });

    // Define the line
    const valueline2 = d3.line<Sales>()
     .x(function (d) {
       if (d.shippedDate instanceof Date) {
         return _this.chartProps.x(d.shippedDate.getTime());
       }
     })
     .y(function (d) { console.log('Open market'); return _this.chartProps.y(d.total); });

     const svg = d3.select(this.chartElement.nativeElement)
     .append('svg')
     .attr('width', width + margin.left + margin.right)
     .attr('height', height + margin.top + margin.bottom)
     .append('g')
     .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scale the range of the data
    this.chartProps.x.domain(
     d3.extent(_this.salesStatus, function (d) {
       if (d.shippedDate instanceof Date)
         return (d.shippedDate as Date).getTime();
     }));
    this.chartProps.y.domain([0, d3.max(this.salesStatus, function (d) {
     return Math.max(d.total, d.total);
    })]);

    // Add the valueline2 path.
    svg.append('path')
     .attr('class', 'line line2')
     .style('stroke', 'green')
     .style('fill', 'none')
     .attr('d', valueline2(_this.salesStatus));

    // Add the valueline path.
    svg.append('path')
     .attr('class', 'line line1')
     .style('stroke', 'black')
     .style('fill', 'none')
     .attr('d', valueline(_this.salesStatus));


    // Add the X Axis
    svg.append('g')
     .attr('class', 'x axis')
     .attr('transform', `translate(0,${height})`)
     .call(xAxis);

    // Add the Y Axis
    svg.append('g')
     .attr('class', 'y axis')
     .call(yAxis);

    // Setting the required objects in chartProps so they could be used to update the chart
    this.chartProps.svg = svg;
    this.chartProps.valueline = valueline;
    this.chartProps.valueline2 = valueline2;
    this.chartProps.xAxis = xAxis;
    this.chartProps.yAxis = yAxis;
    }

}
