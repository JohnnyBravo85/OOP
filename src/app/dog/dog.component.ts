import { Component, OnInit } from '@angular/core';
import {MammalComponent} from '../mammal/mammal.component';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  Dog = new MammalComponent('Dog', true, true, true, 0, true);

  constructor() { }

  ngOnInit() {
  }

}
