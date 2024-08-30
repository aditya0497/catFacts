import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {FactModel} from "../components/fact-entry/fact-entry.component";

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  private facts: FactModel[] = [];

  private tags: string[] = [];

  private currentId = 0;

  constructor(private http: HttpClient) {}

  public getCatFact(): Observable<{ fact: string }> {
    return this.http.get<{ fact: string }>('https://catfact.ninja/fact');
  }

  public addFact(factText: string, notes: string, tags: string[]): void {
    this.facts.push({ id: ++this.currentId, text: factText, notes, tags });
  }

  public getFacts(): Observable<{ id: number, text: string, notes: string, tags: string[] }[]> {
    return of(this.facts);
  }

  public getFactsByTag(tag: string): Observable<{ id: number, text: string, notes: string, tags: string[] }[]> {
    return of(this.facts.filter(fact => fact.tags.includes(tag)));
  }

  public getTags(): Observable<string[]> {
    return of(this.tags);
  }

  public addTag(tag: string): void {
    if (!this.tags.includes(tag)) {
      this.tags.push(tag);
    }
  }
}
