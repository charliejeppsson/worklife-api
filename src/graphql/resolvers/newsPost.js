const NewsPostAssociations = {
  collab: (parent, args, { dataLoaders }, info) => {
    if (parent.collabId) { return dataLoaders.collabLoader.load(parent.collabId) }
  },
  event: (parent, args, { dataLoaders }, info) => {
    if (parent.eventId) { return dataLoaders.eventLoader.load(parent.eventId) }
  },
  image: (parent, args, { dataLoaders }, info) => {
    if (parent.imageId) { return dataLoaders.imageLoader.load(parent.imageId) }
  },
  user: (parent, args, { dataLoaders }, info) => {
    if (parent.userId) { return dataLoaders.userLoader.load(parent.userId) }
  }
}

const NewsPostQueries = {
  newsPosts: (parent, args, { db }, info) => db.NewsPost.findAll(),
  newsPost: (parent, { id }, { db }, info) => db.NewsPost.findByPk(id)
}

const NewsPostMutations = {
  updateNewsPost: (parent, {
    id,
    title,
    description,
    content,
    eventId,
    imageId,
    spaceId,
    userId
  }, { db }, info) => (
    db.NewsPost.update(
      {
        title,
        description,
        content,
        eventId,
        imageId,
        spaceId,
        userId
      },
      {
        where: {
          id: id
        }
      }
    )
  )
}

export default {
  NewsPostAssociations, NewsPostQueries, NewsPostMutations
}
