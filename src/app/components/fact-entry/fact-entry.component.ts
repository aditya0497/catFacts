import { Component, OnInit } from '@angular/core';
import { CatFactService } from '../../services/cat-fact.service';

export type FactModel = Readonly<{
  id: number;
  text: string;
  notes: string;
  tags: string[];
}>;

@Component({
  selector: 'app-fact-entry',
  templateUrl: './fact-entry.component.html',
  styleUrls: ['./fact-entry.component.css']
})
export class FactEntryComponent implements OnInit {

  public fact: string = '';

  public notes: string = '';

  public tags: string[] = [];

  public newTag: string = '';

  public allTags: string[] = [];

  public savedFacts: FactModel[] = [];

  constructor(private catFactService: CatFactService) {}

  public ngOnInit(): void {
    this.loadTags();
    this.loadFacts();
  }

  public getRandomFact(): void {
    this.catFactService.getCatFact().subscribe(response => {
      this.fact = response.fact;
    });
  }

  public addFact(): void {
    if (this.fact && this.tags.length > 0) {
      this.catFactService.addFact(this.fact, this.notes, this.tags);
      this.loadFacts(); // Refresh the list of saved facts
      this.clearFact(); // Clear the displayed fact
    }
  }

  public addTag(): void {
    if (this.newTag && !this.allTags.includes(this.newTag)) {
      this.allTags.push(this.newTag);
      this.catFactService.addTag(this.newTag); // Save new tag in the service
      this.newTag = '';
    }
  }

  public onTagChange(tag: string, isChecked: any): void {
    if (isChecked.checked) {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag);
      }
    } else {
      this.tags = this.tags.filter(t => t !== tag);
    }
  }

  private loadTags(): void {
    this.catFactService.getTags().subscribe(tags => {
      this.allTags = tags;
    });
  }

  private loadFacts(): void {
    this.catFactService.getFacts().subscribe(facts => {
      this.savedFacts = facts;
    });
  }

  private clearFact(): void {
    this.fact = '';
    this.notes = '';
    this.tags = [];
  }
}
