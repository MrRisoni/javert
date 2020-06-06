import {Component, OnInit, Output} from '@angular/core';
import { environment } from '../../environments/environment';
import {IaverisService} from "../iaveris.service";

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


  constructor(private javertSrvc: IaverisService) {
    }


  ngOnInit(): void {
    this.fileSys = 'zfs';
  console.log(environment.api_url);
  this.javertSrvc.getHostInfo().subscribe(data => {

      this.hostData = data;
      this.hostzfslist = data.zfslist['items'];
      this.zpool = data.zpool['disks'];
      this.sysprocs = data.sysproc['processes'];

      console.log('INVOJED');
    });
  }

}
