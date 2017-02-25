import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

export default function(props) {
  return (
    <div>
      <form onSubmit={props.handleInput}>

        <FormGroup validationState={props.invalidName}>
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" placeholder="Zenon Kar" name="name" />
          { props.invalidName && <HelpBlock>Name cannot be blank.</HelpBlock> }
          <FormControl.Feedback />
        </FormGroup>

        { props.type === "student" && (
        <div>
          <FormGroup validationState={props.invalidEmail}>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" placeholder="stargazer@school.edu" name="email" />
            { props.invalidEmail && <HelpBlock>Must be a valid email.</HelpBlock> }
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Campus</ControlLabel>
            <FormControl componentClass="select" placeholder="Select a School" name="campus" >
            { props.campuses && props.campuses.map(campus =>
              <option key={campus.id} value={campus.id}>{campus.name}</option>
            ) }
            </FormControl>
            <FormControl.Feedback />
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

        <FormGroup validationState={props.invalidSpecs}>
          <ControlLabel>Specialties</ControlLabel>
          <FormControl type="text" placeholder="Javascript, frontend, intergalactic networks, etc." name="specialties" />
          { props.invalidSpecs && <HelpBlock>Specialties cannot be blank.</HelpBlock> }
          <FormControl.Feedback />
        </FormGroup>

        <Button bsStyle="primary" type="submit">
          Submit
        </Button>

      </form>
  </div>
)}


