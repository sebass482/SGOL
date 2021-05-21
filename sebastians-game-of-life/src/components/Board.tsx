import React, { useCallback, useState, useRef } from 'react';
import { styled } from '@stitches/react';
import produce from 'immer';


function Board(props: any) {

    const numRows = 25;
    const numCols = 25;
    const operations = [
        [0, 1],
        [0, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0]
    ];


    const StyledGame = styled('div', {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })


    const StyledGrid = styled('div', {
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols},20px)`,
        padding: '20px',
        placeItems: 'center',
        backgroundColor: 'dodgerblue',
    })

    const StyledCell = styled('div', {
        width: '20px',
        height: '20px',
        border: 'solid 2px black',
        margin: '1px',
        '&.dead': {
            backgroundColor: 'white',
        },
        '&.alive': {
            backgroundColor: 'black',
        }
    })
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0))
        }
        return rows
    })


    const [running, setRunning] = useState(false)

    const runRef = useRef(running);
    runRef.current = running

    const runSim = useCallback(() => {
        if (!runRef.current) {
            return
        }
        
        setGrid(g => {
            return produce(g, gridCopy => {
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        let neighbours = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x
                            const newJ = j + y
                            if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                                neighbours += g[newI][newJ]
                            }
                        })

                            if (neighbours < 2 || neighbours > 3) {
                                gridCopy[i][j] = 0
                            } else if (g[i][j] === 0 && neighbours === 3) {
                                gridCopy[i][j] = 1;
                            }
                        }
                    }
                })
            })
        
        setTimeout(runSim, 100)
    }, [])


    return (
        <StyledGame>
            <button onClick={() => {
                setRunning(!running)
                if (!running) {
                    runRef.current = true
                    runSim()
                }
            }}

            >
                {running ? 'stop' : 'start'}
            </button>
            <StyledGrid>
                {
                    grid.map((x, i) => (
                        x.map((y, j) =>
                        (
                            <StyledCell
                                onClick={() => {
                                    const newGrid = produce(grid, gridCopy => {
                                        gridCopy[i][j] = grid[i][j] ? 0 : 1;
                                    })
                                    setGrid((newGrid))
                                }}
                                key={`${i}-${j}`}
                                className={y === 0 ? 'dead' : 'alive'} />
                        )
                        )
                    ))
                }
            </StyledGrid>
        </StyledGame>
    );
}

export default Board