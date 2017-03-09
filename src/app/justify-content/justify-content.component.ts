import { Component, OnInit } from '@angular/core';

    const HEROES: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'Rubber Man Man Man' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
@Component({
  selector: 'app-justify-content',
  templateUrl: './justify-content.component.html',
  styleUrls: ['./justify-content.component.scss']
})
export class JustifyContentComponent implements OnInit {
  heroes = HEROES;
  
  constructor() { 


  }

  ngOnInit() {
    
    
  }


}

export class Hero {
  id: number;
  name: string;
}
