import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatFactService } from '../../services/cat-fact.service';
import {FactModel} from "../fact-entry/fact-entry.component";

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.css']
})
export class TagViewComponent implements OnInit {

  public tag: string = '';

  public facts: FactModel[] = [];

  constructor(private route: ActivatedRoute,
    private catFactService: CatFactService) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tag = params.get('tag') || '';
      this.loadFacts();
    });
  }

  private loadFacts(): void {
    this.catFactService.getFactsByTag(this.tag).subscribe(facts => {
      this.facts = facts;
    });
  }
}
