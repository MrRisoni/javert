import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-proc-info',
  templateUrl: './proc-info.component.html',
  styleUrls: ['./proc-info.component.css']
})
export class ProcInfoComponent implements OnInit {


  @Input() procs: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
