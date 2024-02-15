import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { ThoughtServiceService } from '../thought-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  thought = {
    id: "",
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  constructor(
    private service: ThoughtServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id!).subscribe((thought) => {
      this.thought = thought
    })
  }

  handleUpdateThought() {
    const newThought = {
      id: this.thought.id,
      content: this.thought.content,
      createdAt: this.thought.createdAt,
      updatedAt: new Date(),
    }

    this.service.edit(newThought).subscribe(() => {
      this.router.navigate(['/thoughts-list'])
    })
  }

  handleCancelUpdateThought() {
    this.router.navigate(['/thoughts-list'])
  }
}
