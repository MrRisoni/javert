import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HostComponent } from './host/host.component';
import { ZFSComponent } from './zfs/zfs.component';
import { BtrfsComponent } from './btrfs/btrfs.component';
import { LVMComponent } from './lvm/lvm.component';
import { NetworkComponent } from './network/network.component';
import { CPUComponent } from './cpu/cpu.component';
import { ProcInfoComponent } from './proc-info/proc-info.component';
import { SummaryComponent } from './summary/summary.component';
import { DisksComponent } from './disks/disks.component';

@NgModule({
  declarations: [
    AppComponent,
    HostComponent,
    ZFSComponent,
    BtrfsComponent,
    LVMComponent,
    NetworkComponent,
    CPUComponent,
    ProcInfoComponent,
    SummaryComponent,
    DisksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
