import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary-elem',
  templateUrl: './summary-elem.component.html',
  styleUrls: ['./summary-elem.component.css']
})
export class SummaryElemComponent implements OnInit {
  @Input() attribute: string;
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
