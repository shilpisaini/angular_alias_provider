import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesktopService {
   getComputerName() {
		return 'DESKTOP';
	 }

}
