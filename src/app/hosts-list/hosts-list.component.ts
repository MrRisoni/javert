import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IaverisService} from "../iaveris.service";


@Component({
  selector: 'app-hosts-list',
  templateUrl: './hosts-list.component.html',
  styleUrls: ['./hosts-list.component.css']
})
export class HostsListComponent implements OnInit {

  @Output() hostsArr: HostMdl[];

  constructor(private javertSrvc: IaverisService) {
    }

  ngOnInit() {
    this.javertSrvc.getHosts().subscribe(data => {


      this.hostsArr = data;
     });
  }

}
