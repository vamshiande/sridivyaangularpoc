import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible : boolean ;
  visible1 : boolean ;
  constructor() { 
    this.visible=false;
    this.visible = false;
  }

  show(){
    this.visible = true;
    
  }
  hide(){this.visible = false};
}
