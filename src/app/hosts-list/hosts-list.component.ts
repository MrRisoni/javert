import {Component, Input, OnInit, Output} from '@angular/core';
import {HostMdl} from '../../models/HostMdl';

@Component({
  selector: 'app-hosts-list',
  templateUrl: './hosts-list.component.html',
  styleUrls: ['./hosts-list.component.css']
})
export class HostsListComponent implements OnInit {

  @Output() hostsArr: HostMdl[];

  constructor() {

    var gentoo = new HostMdl();
    gentoo.name = 'Gentoo';

    var fedora = new HostMdl();
    fedora.name = 'Fedora';

    var Debian = new HostMdl();
    Debian.name = 'Debian';

    this.hostsArr = [gentoo, fedora,Debian];
  }


  ngOnInit(): void {
  }

}
