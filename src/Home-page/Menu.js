import React from 'react';
import {ButtonGroup, ToggleButton} from 'react-bootstrap';

 class Menu extends React.Component {

    render() {

        return (
            <div className="d-flex flex-column">
            <ButtonGroup toggle className="mt-3">
                <ToggleButton variant="info" type="radio" name="radio" defaultChecked value="1">
                Photo
                </ToggleButton>
                <ToggleButton variant="info" type="radio" name="radio" value="2">
                Document
                </ToggleButton>
                <ToggleButton variant="info" type="radio" name="radio" value="3">
                Text
                </ToggleButton>
            </ButtonGroup>
            </div>
        )
    }

 }

 export default Menu;