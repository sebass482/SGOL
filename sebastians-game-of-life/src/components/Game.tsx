import React, { useState } from 'react';
import Board from './Board';
import { styled } from '@stitches/react';



function Game(props: any) {

    const [cell, setCell] = useState()

    

    


    // const onClickHandler = ( x : boolean[], y : boolean ) => {
    //     for(let i = 0; i<grid.length; i++){
    //         for(let j = 0; j<grid.length; j++){
    //             grid[x].[j] == 
    //         }
    //     }
    // }

    return (
        <>
                <Board/>            
        </>
    )
}

export default Game