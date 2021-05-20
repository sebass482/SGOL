import React from 'react';
import { styled } from '@stitches/react';
import CGOLGIF from '../assets/CGOL.gif';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';


function LandingPage() {
    const history = useHistory()
    const StyledImg = styled('img', {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
    })

    const StyledText = styled('div', {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%);',
        color: 'white',
        fontSize: '1rem'
    })

    const pushToGame = (event: React.MouseEvent) => {
        event?.preventDefault();
        history.push('/game')
    }

    return (
        <>
            <StyledImg src={CGOLGIF} />
            <StyledText>
                Welcome to Sebastian's Game of Life!
                <br></br>
                <button onClick={pushToGame}> Play!</button>
            </StyledText>
        </>
    )
}
export default LandingPage