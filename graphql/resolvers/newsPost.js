const NewsPostAssociations = {
  collab: (parent, args, context, info) => parent.getCollab(),
  event: (parent, args, context, info) => parent.getEvent(),
  image: (parent, args, context, info) => parent.getImage(),
  user: (parent, args, context, info) => parent.getUser()
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
