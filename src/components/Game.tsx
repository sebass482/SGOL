import React, { useState } from 'react';
import Board from './Board';
import Rules from './Rules';
import { styled } from '@stitches/react';
import Header from './Header';
import Combinations from './Combinations'


function Game(props: any) {

    const StyledBackground = styled('div', {
        backgroundColor: '#222b45'
    })

    const StyledRules = styled('div', {
        backgroundColor: '#fca311',
        padding: '2%',
    })



    return (
        <>
            <Header />
            <StyledBackground>
            <Board />
            </StyledBackground>
            {/* <Combinations/>
            <StyledRules>
                <Rules />
            </StyledRules> */}
        </>
    )
}

export default Game