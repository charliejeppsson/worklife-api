const ImageAssociations = {}

const ImageQueries = {
  images: (parent, args, { db }, info) => db.Image.findAll(),
  image: (parent, { id }, { db }, info) => db.Image.findByPk(id)
}

const ImageMutations = {
  createImage: (parent, { url, info }, { db }) => db.Image.create({
    url, info
  }),

  updateImage: (parent, { id, url, info }, { db }) => (
    db.Image.update({ url, info }, { where: { id: id } })
  )
}

export default {
  ImageAssociations, ImageQueries, ImageMutations
}
