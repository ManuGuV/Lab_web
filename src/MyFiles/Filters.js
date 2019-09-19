import React from 'react';
import {ButtonGroup, Dropdown, DropdownButton} from 'react-bootstrap';

 class Filter extends React.Component {

    render() {

        return (
            <div className="d-flex flex-column">
            <ButtonGroup toggle className="mt-3">
            <DropdownButton as={ButtonGroup} title="Tipo de Archivo" id="bg-vertical-dropdown-1" style = {{marginLeft: '5px'}}>
                <Dropdown.Item eventKey="1">Photo</Dropdown.Item>
                <Dropdown.Item eventKey="2">Document</Dropdown.Item>
                <Dropdown.Item eventKey="3">Text</Dropdown.Item>
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Order by" id="bg-vertical-dropdown-2" style = {{marginLeft: '5px'}}>
                <Dropdown.Item eventKey="1">Name</Dropdown.Item>
                <Dropdown.Item eventKey="2">Date</Dropdown.Item>
            </DropdownButton>
            </ButtonGroup>
            </div>
        )
    }

 }

 export default Filter;