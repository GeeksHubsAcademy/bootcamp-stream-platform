export let initialState = {
  bootcamps: [],
  user: null,
  allUsers: []
};

const sampleState = {
  bootcamps: [
    {
      _id: 1234,
      title: 'FSD VLC MAY19',
      description: '',
      startsAt: new Date(),
      weeksDuration: 12,
      users: [
        {
          _id: 10,
          name: 'juan',
        },
        {
          _id: 25,
          name: 'pepe',
        },
        {
          _id: 34,
          name: 'paco',
        },
      ],
      posts: [
        {
          postType: 'text',
          authorId: 1,
          content: {
            title: 'Recursos sobre react',
            body: `# Bootcamp Stream
Una plataforma de comunicación entre alumnos

## Tech MERN

- API REST
  - express
  - mongo
- FRONTEND
  - react
  - redux
  - axios
`,
          },
        },
        {
          postType: 'code',
          authorId: 2,
          content: {
            title: 'Recursos sobre react',
            code: 'export default 42',
            format: 'js',
          },
        },
        {
          postType: 'video',
          authorId: 2,
          content: {
            title: 'redux',
            url: 'https://accounts.eyeson.team/meetings/5cbec9076071c6000eebda78/recordings/5cbee1c928136e000e98d15f',
          },
        },
        {
          postType: 'activity',
          authorId: 2,
          content: {
            title: 'react activity',
            body: 'lorem ipsum',
            url: 'https://github.com/GeeksHubsAcademy/learn-react-app',
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
        bootcamps: action.bootcamps,
      };
    case 'USERS_LOADED':
      return {
        ...state,
        allUsers: action.users,
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
