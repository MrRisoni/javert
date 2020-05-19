import {Component, OnInit, Output} from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  @Output() fileSys: string;

  @Output() hostData: any;
  @Output() hostzfslist: any[];
  @Output() zpool: any[];
  @Output() sysprocs: any[];


  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.fileSys = 'zfs';
  console.log(environment.api_url);
    this.http.get<any>(environment.api_url + '/api/hostinfo').subscribe(data => {
      this.hostData = data;
      this.hostzfslist = data.zfslist['items'];
      this.zpool = data.zpool['disks'];
      this.sysprocs = data.sysproc['processes'];

      console.log('INVOJED');
    });
  }

}
