import React from 'react';

/**
    *Functional react component for congratulatory message
    * @function
    * @param {object} props - React props
    * @returns {JSX.Element}
*/

export default (props) =>{
        if(props.success){
            return(
            <div data-test="component-congrats"> 
                <span data-test="congrats-message">
                    Congratulations! you guessed the word.
                </span>
            </div>
            );
        } else {
        return (
            <div data-test="component-congrats"/>
        );
        }
}