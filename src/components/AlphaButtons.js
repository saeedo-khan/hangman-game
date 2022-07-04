import React, { Component } from 'react';

class AlphaButtons extends Component{


    render(){

        return(
                "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, idx) => {
                    <button
                    value={ltr}
                    onClick={this.handleGuess}
                    disabled={this.state.guessed.has(ltr)}
                    key={idx}
                    >
                        {ltr}
                    </button>
                })
        )
    }
}

export default AlphaButtons