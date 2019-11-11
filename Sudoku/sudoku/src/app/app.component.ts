import { Component } from '@angular/core';
import {SudokuService} from './sudoku.service';
import {rows} from './Rows';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   constructor(private sudokuService: SudokuService) {
    this.custom=rows;
    this.inputSudoku=rows;
    }
    title = 'sudoku';
  custom:number[][];
  inputSudoku:number [][];
    solveSudoku(): void
    {
      //console.log(rows[0][0]);
      this.sudokuService.solveSudoku(rows).subscribe(
        (data:number[][] )=> { console.log(data) // Data which is returned by call
          this.custom=data;
        },
        error => { console.log(error); // Error if any
        },
        );
      
      //console.log(this.custom);
    }

    clear():void{
      this.custom=[];
    }

    customSudoku():void{
      this.sudokuService.readFromJson().subscribe(
        data => {
          this.custom = data as number[][];
           console.log(data);
        },
        (err) => {
          console.log (err.message);
        }
      );
      
    }
}
