import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-zfs',
  templateUrl: './zfs.component.html',
  styleUrls: ['./zfs.component.css']
})
export class ZFSComponent implements OnInit {

  @Output() zfslist: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
