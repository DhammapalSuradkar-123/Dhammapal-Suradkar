import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  slogans = [
    ["Microsoft", "Be What's Next."],
    ["TCS", "Building On Belief"],
    ["Capgemini", "Get The Future You Want"],
    ["IBM", "THINK"],
    ["Infosys", "Navigate Your Next"],
    ["Virtusa", "Sparking Innovation, One Sprint At a Time"],
    ["Apple", "Think Different"],
    ["Atos", "Leading Action Toward Net-Zero"],
    ["Oracle", "Unbreakable"],
    ["Cognizant", "Seek Data, Build Knowledge"],
    ["Wipro", "Applying Thought"],
    ["HCL", "Employee First"],
    ["Mphasis", "Unleash The Next"],
    ["Dell", "Innovation that stops at nothing"],
    ["Netflix", "See What's Next"],
  ]

}
