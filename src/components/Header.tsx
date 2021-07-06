import React from 'react';
import { styled } from '@stitches/react';


function Header(){
    const StyledHeader = styled('div',{
        backgroundColor: '#1a2137',
        // padding:'1%',
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
    })


    return (
        <>
        <StyledHeader>
            <h3>Sebastian's Game of Life</h3>
        </StyledHeader>
        </>
    )
}

export default Header