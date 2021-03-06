import { Component, OnInit } from '@angular/core';
import { DesktopService } from '../desktop.service';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-computer',
  providers: [ 
    LaptopService,
    { provide: DesktopService, useExisting: LaptopService }
  ],     
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.sass']
})
export class ComputerComponent implements OnInit {

  computerName: string;
  constructor(private computerService: DesktopService) { }
  
	ngOnInit() {
		this.computerName = this.computerService.getComputerName();
	}


}
