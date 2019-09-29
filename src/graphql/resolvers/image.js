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
    db.Image.update({ url, info }, { returning: true, where: { id } })
      .then(([ rowsUpdate, [ updatedImage ]]) => {
        const res = updatedImage.dataValues
        return { id: res.id, url: res.url, info: res.info }
      })
      .catch(err => console.log(err))
  )
}

export default {
  ImageAssociations, ImageQueries, ImageMutations
}
