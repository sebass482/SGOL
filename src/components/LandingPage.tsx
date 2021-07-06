import React from 'react';
import { styled } from '@stitches/react';
import CGOLGIF from '../assets/CGOL.gif';
import { useHistory } from 'react-router-dom';


function LandingPage() {
    const history = useHistory()
    const StyledImg = styled('img', {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
    })

    const StyledText = styled('div', {
        display:'flex',
        flexDirection:'column',
        opacity:'90%',
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translate(-50%, -50%);',
        color: 'white',
        fontSize: '2rem'
    })

    const StyledButton = styled('button',{
        margin:'20%',
        alignItems: 'center'
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
                <StyledButton onClick={pushToGame}> Play!</StyledButton>
            </StyledText>
        </>
    )
}
export default LandingPage