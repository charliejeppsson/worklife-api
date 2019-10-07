const BenefitType = `
  type Benefit {
    id: ID
    title: String
    company: String
    description: String
    imageId: ID
    image: Image
    createdAt: Date
    updatedAt: Date
  }
`

const BenefitQueries = `
  benefits: [Benefit]
  benefit(id: ID!): Benefit
`

const BenefitMutations = `
  updateBenefit(
    id: ID,
    title: String,
    description: String,
    company: String
    imageId: ID
  ): Event!
`

export default {
  BenefitType, BenefitQueries, BenefitMutations
}
