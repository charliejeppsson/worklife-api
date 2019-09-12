// ! means the field is required, i.e. no null values

export default `
  scalar Date

  type Attendance {
    id: ID!
    userId: ID!
    user: User!
    eventId: ID!
    event: Event!
  }

  type Collab {
    id: ID!
    title: String!
    description: String!
    duration: Int!
    compensation: Int!
    userId: ID!
    user: User!
    imageId: ID!
    image: Image!
    createdAt: Date!
    updatedAt: Date!
    participations: [Participation]
  }

  type Event {
    id: ID!
    title: String!
    description: String!
    startTime: Date!
    endTime: Date!
    imageId: ID!
    image: Image!
    spaceId: ID
    space: Space
    userId: ID!
    user: User!
    createdAt: Date!
    updatedAt: Date!
    attendances: [Attendance]
  }
  
  type Image {
    id: ID!
    url: String!
    info: String
  }
  
  type NewsPost {
    id: ID!
    title: String!
    description: String!
    content: String!
    collabId: ID
    collab: Collab
    eventId: ID
    event: Event
    imageId: ID!
    image: Image!
    userId: ID!
    user: User!
    createdAt: Date!
    updatedAt: Date!
  }

  type Participation {
    id: ID!
    userId: ID!
    user: User!
    collabId: ID!
    collab: Collab!
  }

  type Space {
    id: ID!
    name: String!
    city: String!
    address: String!
    type: String!
    imageId: ID!
    image: Image!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
    title: String
    avatar: String
    newsPosts: [NewsPost]
  }

 
  type Query {
    attendances: [Attendance]
    attendance: Attendance
    newsPosts: [NewsPost!]
    newsPost(id: ID!): NewsPost
    users: [User!]
    user(id: ID!): User
    events: [Event!]
    event(id: ID!): Event
    participations: [Participation]
    participation: Participation
    spaces: [Space!]
    space(id: ID!): Space
  }


  type Mutation {
    createUser(
      firstName: String!,
      lastName: String!,
      passWord: String!,
      email: String!,
      title: String,
      avatar: String
    ): User!
    
    createNewsPost(
      title: String!,
      description: String!,
      content: String!,
      userId: ID!
    ): NewsPost!
  }
`
