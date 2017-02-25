import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

export default function(props) {
  const inputCheck = props.state;

  return (
    <div>
      <form onSubmit={props.handleInput}>

        <FormGroup validationState={inputCheck.invalidName}>
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" placeholder="Zenon Kar" name="name" />
          { inputCheck.invalidName && <HelpBlock>Name cannot be blank.</HelpBlock> }
        </FormGroup>

        { props.type === "student" && (
        <div>
          <FormGroup validationState={inputCheck.invalidEmail}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" placeholder="stargazer@school.edu" name="email" />
            { inputCheck.invalidEmail && <HelpBlock>Must be a valid email.</HelpBlock> }
          </FormGroup>

          <FormGroup>
            <ControlLabel>Campus</ControlLabel>
            <FormControl componentClass="select" placeholder="Select a School" name="campus">
              { props.campuses && props.campuses.map(campus =>
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              ) }
            </FormControl>
          </FormGroup>
        </div>
        )}

        <FormGroup>
          <ControlLabel>City Precinct</ControlLabel>
          <FormControl type="text" placeholder="#" name="city"/>
        </FormGroup>

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Planet</ControlLabel>
          <FormControl componentClass="select" placeholder="select" name="planet">
            <option>Mercury</option>
            <option>Venus</option>
            <option>Earth</option>
            <option>Moon</option>
            <option>Mars</option>
            <option>Asteroids</option>
            <option>Jupiter</option>
            <option>Saturn</option>
            <option>Uranus</option>
            <option>Neptune</option>
            <option>Pluto</option>
          </FormControl>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Description</ControlLabel>
          <FormControl componentClass="textarea" name="descript"/>
        </FormGroup>

        <FormGroup validationState={inputCheck.invalidSpecialties}>
          <ControlLabel>Specialties</ControlLabel>
          <FormControl type="text" placeholder="Javascript, frontend, intergalactic networks, etc." name="specialties"/>
          { inputCheck.invalidSpecialties && <HelpBlock>Specialties cannot be blank.</HelpBlock> }
        </FormGroup>

        <Button type="submit">
          Submit
        </Button>

      </form>
  </div>
)}


