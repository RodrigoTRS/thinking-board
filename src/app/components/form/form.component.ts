import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtServiceService } from '../thought-service.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  thought: Thought = {
    id: uuid(),
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  constructor(
    private service: ThoughtServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  handleCreateNewThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/thoughts-list'])
    })
  }

  handleCancelNewThought() {
    this.router.navigate(['/thoughts-list'])
  }
}
