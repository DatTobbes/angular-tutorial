import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipe = new Recipe('Dummy', 'dummy', 'http://guides.global/images/guides/global/dummy_web_page.jpg' )
  constructor() { }

  ngOnInit() {
  }

}
