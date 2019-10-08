const BenefitAssociations = {
  image: (parent, args, { dataLoaders }, info) => {
    if (parent.imageId) { return dataLoaders.imageLoader.load(parent.imageId) }
  }
}

const BenefitQueries = {
  benefits: (parent, args, { db }, info) => db.Benefit.findAll({
    order: [ ['id', 'DESC'] ]
  }),
  benefit: (parent, { id }, { db }, info) => db.Benefit.findByPk(id)
}

const BenefitMutations = {
  updateBenefit: (parent, {
    id, title, description, company, imageId
  }, { db }, info) => (
    db.Benefit.update(
      { title, description, company, imageId },
      { where: { id: id } }
    )
  ),
}

export default {
  BenefitAssociations, BenefitQueries, BenefitMutations
}
