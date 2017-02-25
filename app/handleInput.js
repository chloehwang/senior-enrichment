export default function(e) {  //can't use arrow fn because will lose ability to bind fn
  e.preventDefault()
  const type = this.props.type;
  const name = e.target.name.value;
  const specialties = e.target.specialties.value;
  const city = e.target.city.value;
  const planet = e.target.planet.value;
  const descript = e.target.descript.value;
  const email = e.target.email;
  const campus = e.target.campus;
  const body = {name, city, planet, descript, specialties};
  let invalid = false;

  if (!name || !specialties) {
    if (!name) this.setState({invalidName: "error"})
    if (!specialties) this.setState({invalidSpecs: "error"})
    invalid = true;
  }

  if (email && !email.value) {
    this.setState({invalidEmail: "error"});
    invalid = true;
  }

  if (type === "campus" && !invalid) this.props.handleSubmit(body, type)
  else if (type === "student" && !invalid) {
    this.props.handleSubmit(Object.assign(body, {email: email.value, campusId: campus.value}), type)
  }
}

