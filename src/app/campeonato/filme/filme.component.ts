import { Component, OnInit, Input, Output } from '@angular/core';
import { Filme } from './filme';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  @Input() filme : Filme
  @Output() addId = new EventEmitter();
  @Output() removerId = new EventEmitter();
  checkboxValue: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(this.checkboxValue){
      this.addId.emit(this.filme.id);
    } else{
      this.removerId.emit(this.filme.id);
    }
  }

}
