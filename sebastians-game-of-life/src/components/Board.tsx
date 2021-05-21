import React, { useState } from 'react';
import { styled } from '@stitches/react';
import produce from 'immer';


function Board(props:any){

    const numRows = 6;
    const numCols = 6;


    const StyledContainer = styled('div', {
        width: 'cover',
        display: 'flex',
        flexWrap: 'wrap',
        color: 'green',
    })

    const StyledDiv = styled('div', {
        display: 'flex',
        flexDirection:'row',
        width: '1rem',
        height: '1rem',
        padding: '3rem',
        border: '2px solid black',
        margin: '1px',
        '&.dead': {
            backgroundColor: 'white',
        },
        '&.alive': {
            backgroundColor: 'black',
        }
    })
    const [grid,setGrid] = useState(() => {
        const rows = [];
        for(let i = 0; i<numRows; i++){
            rows.push(Array.from(Array(numCols),() => 0 ))
        }
        return rows
    })


    return (
        <StyledContainer>
          {
                    grid.map((x,i) => (
                        x.map((y,j) =>
                        (
                            <StyledDiv
                            onClick={() =>{
                                const newGrid = produce(grid, gridCopy => {
                                    gridCopy[i][j] = grid[i][j] ? 0 : 1 ;
                                })
                                setGrid((newGrid))
                            }} 
                            key={`${x}-${y}`}
                            className={y === 0 ? 'dead' : 'alive'} />
                        )
                        )
                    ))
                }
        </StyledContainer>
      );
}

export default Board