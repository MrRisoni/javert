import {Component, OnInit, Output} from '@angular/core';
import {HostMdl} from "../../models/HostMdl";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  @Output() fileSys: string;

  @Output() hostData: any;


  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.fileSys = 'zfs';

    this.http.get<any>('http://localhost:3500/api/hostinfo').subscribe(data => {
      this.hostData = data;
    });
  }

}
