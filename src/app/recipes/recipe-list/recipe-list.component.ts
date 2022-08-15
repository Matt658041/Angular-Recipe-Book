import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test','https://www.flickr.com/photos/30478819@N08/51129079431' )
];
  constructor() { }

  ngOnInit(): void {
  }

}
