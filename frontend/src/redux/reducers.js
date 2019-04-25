const initialState = {
  bootcamps: [],
  user: null,
};

const sampleState = {
  bootcamps: [
    {
      _id: 1232342,
      title: 'Fullstack Valencia Febrero 2019',
      users: [123, 12321, 23534, 23534543],
      posts: [
        {
          _id: 123234,
          type: 'text' /* 'text' | 'video' | 'activity'  | 'snippet' */,
          author: { _id: 123, name: 'Juan' , photo:'765123'},
          createdAt: new Date(),
          title: 'Redux must read',
          content: {
            snippet: {
              code: 'js code..',
              format: 'js',
            },
            text: {
              description: 'asdasdasd',
            },
            video: {
              url: 'http://...',
            },
            activity: {
              repos: ['https://github.com/GeeksHubsAcademy/react-tareas', 'https://github.com/GeeksHubsAcademy/react-todos'],
            },
          },
        },
      ],
    },
  ],
  user: {
    _id: 123,
    name: 'Juan',
    email: 'juan@geekhubs.com',
    token: 'AASFDSDFQ298723ÑLKJWD98723HJDW76D2YBD623YB326D',
  },
};

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
    default:
      return state;
  }
};

export default reducer;
