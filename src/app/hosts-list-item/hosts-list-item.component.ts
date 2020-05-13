import {Component, Input, OnInit} from '@angular/core';
import {HostMdl} from "../../models/HostMdl";

@Component({
  selector: 'app-hosts-list-item',
  templateUrl: './hosts-list-item.component.html',
  styleUrls: ['./hosts-list-item.component.css']
})
export class HostsListItemComponent implements OnInit {

  @Input() hostObj: HostMdl;

  constructor() { }

  ngOnInit(): void {
  }

}
