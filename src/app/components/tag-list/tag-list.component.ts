import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatFactService } from '../../services/cat-fact.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  public tags: string[] = [];

  constructor(private catFactService: CatFactService, private router: Router) {}

  public ngOnInit(): void {
    this.loadTags();
  }

  public loadTags(): void {
    this.catFactService.getTags().subscribe(tags => {
      this.tags = tags;
    });
  }

  public viewTag(tag: string): void {
    this.router.navigate(['/tag', tag]);
  }
}
