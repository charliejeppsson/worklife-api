const ImageType = `
  type Image {
    id: ID
    url: String
    info: String
  }
`

const ImageQueries = `
  images: [Image]
  image(id: ID!): Image
`

const ImageMutations = `
  createImage(url: String!, info: String): Image!
  updateImage(id: ID, url: String, info: String): Image
`

export default {
  ImageType, ImageQueries, ImageMutations
}
