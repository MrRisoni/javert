import {Component, Input, OnInit, Output} from '@angular/core';
import {HostMdl} from '../../models/HostMdl';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hosts-list',
  templateUrl: './hosts-list.component.html',
  styleUrls: ['./hosts-list.component.css']
})
export class HostsListComponent implements OnInit {

  @Output() hostsArr: HostMdl[];

  constructor(private http: HttpClient) {
      }

  ngOnInit() {
     this.http.get<any>('http://localhost:3500/api/hosts').subscribe(data => {
      this.hostsArr = data;
     });
  }

}

