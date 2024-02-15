import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtServiceService } from '../thought-service.service';
import { Thought } from '../thought';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclude-modal',
  templateUrl: './exclude-modal.component.html',
  styleUrls: ['./exclude-modal.component.css']
})
export class ExcludeModalComponent implements OnInit {

  thought: Thought = {
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

  handleExcludeThought() {
    this.service.delete(this.thought.id).subscribe(() => {
      this.router.navigate(['/thoughts-list'])
    })
  }

  handleCancelExcludeThought() {
    this.router.navigate(['/thoughts-list'])
  }
}
