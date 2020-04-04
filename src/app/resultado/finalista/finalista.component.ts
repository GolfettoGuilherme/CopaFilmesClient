import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-finalista',
  templateUrl: './finalista.component.html',
  styleUrls: ['./finalista.component.css']
})
export class FinalistaComponent implements OnInit {
  
  @Input() titulo : string;
  @Input() posicao: string;

  constructor() { }

  ngOnInit(): void {
  }

}
