import React from 'react';
import SGOLbeehive from '../assets/SGOLbeehive.png'
import SGOLblock from '../assets/SGOLblock.png'
import SGOLboat from '../assets/SGOLboat.png'
import SGOLloaf from '../assets/SGOLloaf.png'
import SGOLtub from '../assets/SGOLtub.png'
import SGOLblinker from '../assets/SGOLblinker.gif'
import SGOLtoad from '../assets/SGOLtoad.gif'
import SGOLbeacon from '../assets/SGOLbeacon.gif'
import SGOLpulsar from '../assets/SGOLpulsar.gif'
import SGOLpenta from '../assets/SGOLpenta.gif'
import SGOLglider from '../assets/SGOLglider.gif'
import SGOLlwss from '../assets/SGOLlwss.gif'
import SGOLmwss from '../assets/SGOLmwss.gif'
import SGOLhwss from '../assets/SGOLhwss.gif'




import { styled } from '@stitches/react';


function Combinations(){

    const StyledConfigs = styled('div',{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:'1%',
    })

    const StyledImg = styled('img', {
        width:'100px',
        height:'100px',
    })


    return (
        <>
            <h1>Basic Configurations</h1>
                <h2>Static</h2> 
             <StyledConfigs> 
             <StyledImg src ={SGOLbeehive}/> 
             <StyledImg src = {SGOLboat}/> 
             <StyledImg src = {SGOLloaf}/> 
             <StyledImg src = {SGOLtub}/> 
             <StyledImg src = {SGOLblock}/>
             </StyledConfigs>

             <h2>Spaceships</h2>
             <StyledConfigs> 
             <StyledImg src ={SGOLglider}/> 
             <StyledImg src = {SGOLlwss}/> 
             <StyledImg src = {SGOLmwss}/> 
             <StyledImg src = {SGOLhwss}/> 
             </StyledConfigs>

                 <h2>Oscillators</h2>
             <StyledConfigs> 
             <StyledImg src ={SGOLblinker}/> 
             <StyledImg src = {SGOLtoad}/> 
             <StyledImg src = {SGOLbeacon}/> 
             <StyledImg src = {SGOLpulsar}/> 
             <StyledImg src = {SGOLpenta}/>
             </StyledConfigs>

        </>
    ) }

export default Combinations