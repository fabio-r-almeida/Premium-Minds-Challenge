const prompt = require('prompt');
prompt.start();

async function infinite_grid(path) {
  //this block of codes cound each how many times each direction occours
  let count_N = (path.match(/N/g) || []).length; //max lenght to the north
  let count_S = (path.match(/S/g) || []).length; //max lenght to the north
  let count_E = (path.match(/E/g) || []).length; //max lenght to the north
  let count_O = (path.match(/O/g) || []).length; //max lenght to the north

  //here we set the width and height of the grid using a conservative approximation, using the 
  //biggest value between two directions and multiplying it by 2 (+1 for the starting point), returning always an odd size
  let row_Max = count_N > count_S ? count_N * 2 + 1 : count_S * 2 + 1
  let col_Max = count_E > count_O ? count_E * 2 + 1: count_O * 2 + 1

  //if we decide we only one to go North, we have to create a 1D array 
  if(col_Max == 0) col_Max = 1;
  if(row_Max == 0) row_Max = 1;

  //this finds the middle of the grid by getting the odd value calculated before on row_Max and col_Max
  let yy = row_Max/2-0.5
  let xx = col_Max/2-0.5

  let grid = [];
  //create the col_Max x row_Max grid
  for (let i = 0; i < col_Max; i++) {
    grid[i] = [];
    for (let j = 0; j < row_Max; j++) 
      grid[i][j] = "x"; //fills the grid with pokemon
    
  }

  return [grid,xx,yy];
}

prompt.get(['path'], async function (err, result) {
  //if not a valid answer, show error
  if (err) { return console.log(err); }
  let pokemon_catched = await pokemon(result.path)
  console.log(pokemon_catched)
});



async function pokemon (path){
    let [grid,xx,yy] = await infinite_grid(path);
    //splits 'NOSEEEOS' to [  'N', 'O', 'S',  'E', 'E', 'E',  'O', 'S']
    path = path.split('');
    //initializes pokemon counter as zero
    let pokemon = 0;
    //catches the first spawn pokemon
    [grid,pokemon] = catch_pokemon(grid,xx,yy,pokemon)
       
    //for each element in "path", it will get the value and evaluate it accordingly. Ignores rubish (other than N, E, O, S)
    path.forEach(element => {

        switch(element){
            case 'N':  yy--; break;
            case 'E':  xx++; break;
            case 'O':  xx--; break;
            case 'S':  yy++; break;
            default: /*ignores all other chars*/ break;    
        }
        
       

        [grid,pokemon] = catch_pokemon(grid,xx,yy,pokemon)


      });

    return pokemon;
}
    


// receives as input (grid = pokemon world), current xx and yy coordinates and the current number os pokemon
//already caught and return the new sum of pokemon.
function catch_pokemon(grid, xx ,yy ,pokemon){
    if(grid[xx][yy] === 'x'){
        //removes the pokemon after catching it.
        grid[xx][yy] = ' '
        pokemon++;
    }
    return [grid,pokemon]
}

//for testing purposes
exports.pokemon = pokemon;



/* 
to install all dependencies:
  npm install

to perform the tests:
  npm test

to manually test the code:
  node index.js 
*/

