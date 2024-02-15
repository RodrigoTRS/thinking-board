import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtServiceService } from '../thought-service.service';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent implements OnInit {

  thoughts: Thought[] = [];

  constructor(private service: ThoughtServiceService) { }

  ngOnInit(): void {
    this.service.read().subscribe((thoughts) => {
      const thoughtsList = thoughts.map((thought) => {
        const newThought = {
          id: thought.id,
          content: thought.content,
          createdAt: new Date(thought.createdAt),
          updatedAt: new Date(thought.updatedAt)
        }
        return newThought
      })
      this.thoughts = thoughtsList
    })
  }

}
