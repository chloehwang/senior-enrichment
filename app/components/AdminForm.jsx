import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

export default function(props) {
  const { name, email, campus, city, planet, descript, specialties } = props.inputCheck;
  const { invalidName, invalidSpecs, invalidEmail } = props.inputCheck;

  return (
  <form onSubmit={props.handleInput}>
    <FormGroup validationState={invalidName}>
      <ControlLabel>Name</ControlLabel>
      <FormControl type="text" name="name" defaultValue={name}
        />
      { invalidName && <HelpBlock>Name cannot be blank.</HelpBlock> }
      <FormControl.Feedback />
    </FormGroup>

    { props.type === "student" && (
    <div>
      <FormGroup validationState={invalidEmail}>
        <ControlLabel>Email</ControlLabel>
        <FormControl type="text" name="email" defaultValue={email} />
        { invalidEmail && <HelpBlock>Must be a valid email.</HelpBlock> }
        <FormControl.Feedback />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Campus</ControlLabel>
        <FormControl componentClass="select" name="campus" defaultValue={campus && campus.name}>
        { props.campuses && props.campuses.map(c =>
          <option key={c.id} value={c.id} defaultValue={c.id}>{c.name}</option>
        ) }
        </FormControl>
        <FormControl.Feedback />
      </FormGroup>
    </div>
    )}

    <FormGroup>
      <ControlLabel>City Precinct</ControlLabel>
      <FormControl type="text" name="city" defaultValue={city} />
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Planet</ControlLabel>
      <FormControl componentClass="select" name="planet" defaultValue={planet}>
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
      <FormControl componentClass="textarea" name="descript" defaultValue={descript}/>
    </FormGroup>

    <FormGroup validationState={invalidSpecs}>
      <ControlLabel>Specialties</ControlLabel>
      <FormControl type="text" name="specialties" defaultValue={ specialties && specialties.join(", ") } />
      { invalidSpecs && <HelpBlock>Specialties cannot be blank.</HelpBlock> }
      <FormControl.Feedback />
    </FormGroup>

    <Button bsStyle="primary" type="submit">
      Submit
    </Button>

  </form>

)}


