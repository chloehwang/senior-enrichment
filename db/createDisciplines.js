var db = require('./index.js')

const createDisciplines = function(instance) {
  let createDiscPromises = instance.specialties.map(spec =>
    db.model('discipline').findOrCreate({where: {name: spec}}));

  return Promise.all(createDiscPromises)
    .then(createdDiscs => {
      let discs = createdDiscs.map(([disc, _]) => disc);
      return [instance.addDisciplines(discs), discs]
    })
};

const updateDisciplines = function(instance, model) {
return (
  createDisciplines(instance)
    .then(([_, added]) => {
      let findAssociated = db.model(`discipline_${model}`).findAll({where: {[`${model}Id`]: instance.id}});
      return Promise.all([added, findAssociated]);
    })
    .then(([addedDiscs, assocDiscs]) => {
      let added =  addedDiscs.map(disc => disc.id);
      let associated = assocDiscs.map(disc => disc.disciplineId);
      let toBeDestroyed = associated.filter(assoc => added.indexOf(assoc) === -1);

      return db.model(`discipline_${model}`).destroy({
        where: {
          disciplineId: toBeDestroyed,
          [`${model}Id`]: instance.id
        }})
    })
    .catch(console.error)
)
}

module.exports = {createDisciplines, updateDisciplines}
