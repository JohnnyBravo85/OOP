import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mammal',
  templateUrl: './mammal.component.html',
  styleUrls: ['./mammal.component.css']
})
export class MammalComponent implements OnInit {

  name: string;
  legs: number;
  eyes: string;
  tail: boolean;
  wool: boolean;
  claws: string;
  horns: number;
  hooves: boolean;
  woolColor: string
  isCanSwim: boolean;
  say: string;

  constructor(name, tail, wool, claws, horns, hooves) {
    this.name = name;
    this.tail = tail;
    this.wool = wool;
    this.claws = claws;
    this.horns = horns;
    this.hooves = hooves;
  }

  wayToWalk(legs: number): number {
    return this.legs = legs;
  }

  colorOfWool(woolColor: string): string | void {
    if (this.wool) {
      return this.woolColor = woolColor;
    }
  }

  isSwim(flag: boolean): boolean | void {
    if (flag) {
      return this.isCanSwim = flag;
    }
  }

  eyeColor(color: string): string {
    return this.eyes = color;
  }

  isSay(say) {
    this.say = say;
  }

  ngOnInit() {
  }

}
