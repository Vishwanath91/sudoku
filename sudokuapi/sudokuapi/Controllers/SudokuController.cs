using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace sudokuapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Sudoku : ControllerBase
    {
        private ISudoku _sudokuSolver;

        public Sudoku(ISudoku sudokuSolver)
        {
            this._sudokuSolver = sudokuSolver;
        }

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }


        [HttpPost]
        public ActionResult<int[,]> Post([FromBody] int[,] input)
        {
            try
            {
                _sudokuSolver.SolveSudoku(input, 0, 0);
                return input;
            }
            catch (Exception ex)
            {                
                return StatusCode(500,ex.Message);
            }
        }
    }
}

