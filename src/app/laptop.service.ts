import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  getComputerName() {
    return 'LAPTOP';
 }
}
