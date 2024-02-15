import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thoughts-card',
  templateUrl: './thoughts-card.component.html',
  styleUrls: ['./thoughts-card.component.css']
})

export class ThoughtsCardComponent implements OnInit {

  @Input() thought: Thought = {
    id: "",
    content: "Test",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  constructor() { }

  ngOnInit(): void {
  }
}
