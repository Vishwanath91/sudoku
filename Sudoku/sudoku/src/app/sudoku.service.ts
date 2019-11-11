import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {rows} from './Rows';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {
  public api = 'https://localhost:44379/api/sudoku';
  data:number[][];
  constructor(private http: HttpClient) { }

  solveSudoku(sudoku:number [][])
  {  
    
     return this.http.post(this.api,sudoku);
      
  }

  readFromJson()
  {
   
    return this.http.get('./assets/input.json');
    
  }
}
