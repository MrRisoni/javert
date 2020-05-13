import {Component, OnInit, Output} from '@angular/core';
import {HostMdl} from "../../models/HostMdl";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  @Output() fileSys: string;

  constructor() { }

  ngOnInit(): void {
    this.fileSys = 'zfs';
  }

}
