const NewsPostType = `
  type NewsPost {
    id: ID
    title: String
    description: String
    content: String
    collabId: ID
    collab: Collab
    eventId: ID
    event: Event
    imageId: ID
    image: Image
    userId: ID
    user: User
    createdAt: Date
    updatedAt: Date
  }
`

const NewsPostQueries = `
  newsPosts: [NewsPost]
  newsPost(id: ID!): NewsPost
`

const NewsPostMutations = `
  updateNewsPost(
    id: ID,
    title: String,
    description: String,
    content: String,
    eventId: ID,
    imageId: ID,
    spaceId: ID,
    userId: ID,
    createdAt: Date,
    updatedAt: Date
  ): NewsPost!
`

export default {
  NewsPostType, NewsPostQueries, NewsPostMutations
}
