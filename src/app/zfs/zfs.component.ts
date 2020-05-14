import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-zfs',
  templateUrl: './zfs.component.html',
  styleUrls: ['./zfs.component.css']
})
export class ZFSComponent implements OnInit {

  @Input() zfslist: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
