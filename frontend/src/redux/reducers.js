export let initialState = {
  bootcamps: [],
  user: null,
};

const sampleState = {
  bootcamps: [{
      _id: 123,
      title: 'FSD VLC FEB19',
      description: null,
      startsAt: new Date(),
      weeksDuration: 12,
      users: [{
          _id: 1,
          name: 'juan',
        },
        {
          _id: 2,
          name: 'pepe',
        },
        {
          _id: 3,
          name: 'paco',
        },
      ],
      posts: [{
          postType: 'text',
          authorId: 1,
          content: {
            text: {
              title: 'Recursos sobre react',
              body: 'lorem ipsum asd sahdsahjaslk hg hhj lkjhj ',
            },
          },
        },
        {
          postType: 'code',
          authorId: 2,
          content: {
            code: {
              title: 'Recursos sobre react',
              code: 'export default 42',
              format: 'js',
            },
          },
        },
        {
          postType: 'video',
          authorId: 2,
          content: {
            video: {
              title: 'redux',
              url: 'https://accounts.eyeson.team/meetings/5cbec9076071c6000eebda78/recordings/5cbee1c928136e000e98d15f',
            },
          },
        },
        {
          postType: 'activity',
          authorId: 2,
          content: {
            activity: {
              title: 'react activity',
              body: 'lorem ipsum',
              repo: 'https://github.com/GeeksHubsAcademy/learn-react-app',
            },
          },
        },
      ],
    },
    {
      _id: 1234,
      title: 'FSD VLC MAY19',
      description: null,
      startsAt: new Date(),
      weeksDuration: 12,
      users: [{
          _id: 1,
          name: 'juan',
        },
        {
          _id: 2,
          name: 'pepe',
        },
        {
          _id: 3,
          name: 'paco',
        },
      ],
      posts: [{
          postType: 'text',
          authorId: 1,
          content: {
            text: {
              title: 'Recursos sobre react',
              body: 'lorem ipsum asd sahdsahjaslk hg hhj lkjhj ',
            },
          },
        },
        {
          postType: 'code',
          authorId: 2,
          content: {
            code: {
              title: 'Recursos sobre react',
              code: 'export default 42',
              format: 'js',
            },
          },
        },
        {
          postType: 'video',
          authorId: 2,
          content: {
            video: {
              title: 'redux',
              url: 'https://accounts.eyeson.team/meetings/5cbec9076071c6000eebda78/recordings/5cbee1c928136e000e98d15f',
            },
          },
        },
        {
          postType: 'activity',
          authorId: 2,
          content: {
            activity: {
              title: 'react activity',
              body: 'lorem ipsum',
              repo: 'https://github.com/GeeksHubsAcademy/learn-react-app',
            },
          },
        },
      ],
    },
    {
      _id: 12345,
      title: 'FSD VLC JUL19',
      description: null,
      startsAt: new Date(),
      weeksDuration: 12,
      users: [{
          _id: 1,
          name: 'juan',
        },
        {
          _id: 2,
          name: 'pepe',
        },
        {
          _id: 3,
          name: 'paco',
        },
      ],
      posts: [{
          postType: 'text',
          authorId: 1,
          content: {
            text: {
              title: 'Recursos sobre react',
              body: 'lorem ipsum asd sahdsahjaslk hg hhj lkjhj ',
            },
          },
        },
        {
          postType: 'code',
          authorId: 2,
          content: {
            code: {
              title: 'Recursos sobre react',
              code: 'export default 42',
              format: 'js',
            },
          },
        },
        {
          postType: 'video',
          authorId: 2,
          content: {
            video: {
              title: 'redux',
              url: 'https://accounts.eyeson.team/meetings/5cbec9076071c6000eebda78/recordings/5cbee1c928136e000e98d15f',
            },
          },
        },
        {
          postType: 'activity',
          authorId: 2,
          content: {
            activity: {
              title: 'react activity',
              body: 'lorem ipsum',
              repo: 'https://github.com/GeeksHubsAcademy/learn-react-app',
            },
          },
        },
      ],
    },
  ],
  user: {
    _id: 123,
    name: 'Juan',
    lastname: 'Garnica',
    role: 'admin',
    email: 'juan@geekhubs.com',
    imagePath: null,
    token: 'AASFDSDFQ298723ÑLKJWD98723HJDW76D2YBD623YB326D',
  },
  allUsers: [

    {
      _id: 1,
      name: 'pepe',
      lastname: 'Garnica',
      role: 'student',
      email: 'juan@geekhubs.com',
      imagePath: null,

    },
    {
      _id: 2,
      name: 'Juan',
      lastname: 'Garnica',
      role: 'admin',
      email: 'juan@geekhubs.com',
      imagePath: null,

    },
    {
      _id: 3,
      name: 'paco',
      lastname: 'Garnica',
      role: 'student',
      email: 'juan@geekhubs.com',
      imagePath: null,

    },
  ],
};
initialState = sampleState;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        user: action.user,
      };
    case 'LOGGED_OUT':
      return {
        ...state,
        user: null,
      };
    case 'BOOTCAMPS_LOADED':
      return {
        ...state,
        bootcamps: action.bootcamps
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;