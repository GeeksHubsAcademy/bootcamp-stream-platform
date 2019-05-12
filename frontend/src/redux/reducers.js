export let initialState = {
  bootcamps: [],
  user: null,
  allUsers: []
};

const sampleState = {
  bootcamps: [
    {
      _id: '5cd323aefcabfb2c89b48733',
      userIds: [
        '5cd32e61e8dba3376e859d69'
      ],
      postIds: [
        '5cd323bffcabfb2c89b48734',
        '5cd323cbfcabfb2c89b48735',
        '5cd323d6fcabfb2c89b48736',
        '5cd3242efcabfb2c89b48737',
        '5cd471eb09c085218b0dd3b0',
        '5cd57daf5af5570f16aa80d2',
        '5cd588435af5570f16aa80d3',
        '5cd58e0f5af5570f16aa80d4',
        '5cd58ed05af5570f16aa80d5',
        '5cd590435af5570f16aa80d6',
        '5cd595f2e43a5636e36f3cd8',
        '5cd5a69cce8a721350731680',
        '5cd5c1bace8a721350731682',
        '5cd5c235ce8a721350731683',
        '5cd5c6d7ce8a721350731684',
        '5cd5c75cce8a721350731685',
        '5cd5c77ece8a721350731686',
        '5cd5c917ce8a721350731687',
        '5cd5ca2d651d4c49c1583bb2',
        '5cd5ccda0cd90a4cd283b2e9',
        '5cd5cce40cd90a4cd283b2ea',
        '5cd5cced0cd90a4cd283b2eb',
        '5cd5ce630cd90a4cd283b2ec',
        '5cd5ce6e0cd90a4cd283b2ed'
      ],
      title: 'FSD VLC FEB 2019',
      description: 'sa',
      startsAt: '2019-05-30T22:00:00.000Z',
      weeksDuration: 13,
      createdAt: '2019-05-08T18:45:02.851Z',
      updatedAt: '2019-05-10T19:18:07.004Z',
      __v: 0,
      users: [
        {
          _id: '5cd32e61e8dba3376e859d69',
          role: 'student',
          name: 'Juan Pérez Garnica',
          lastname: 'ga',
          email: 'jupegarnica+2@gmail.com',
          createdAt: '2019-05-08T19:30:41.793Z',
          updatedAt: '2019-05-09T18:47:50.692Z'
        }
      ],
      posts: [
        {
          _id: '5cd323bffcabfb2c89b48734',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'code',
          content: {
            body: 'sasa',
            title: 'sasasa'
          },
          authorId: '5cd32367fcabfb2c89b48730',
          createdAt: '2019-05-08T18:45:19.190Z',
          updatedAt: '2019-05-08T18:45:19.190Z'
        },
        {
          _id: '5cd323cbfcabfb2c89b48735',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'text',
          content: {
            body: '# sasa',
            title: 'sasasa'
          },
          authorId: '5cd32367fcabfb2c89b48730',
          createdAt: '2019-05-08T18:45:31.162Z',
          updatedAt: '2019-05-08T18:45:31.162Z'
        },
        {
          _id: '5cd323d6fcabfb2c89b48736',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'text',
          content: {
            body: '# lkhsalkjhlksahj',
            title: 'sasasa'
          },
          authorId: '5cd32367fcabfb2c89b48730',
          createdAt: '2019-05-08T18:45:42.655Z',
          updatedAt: '2019-05-08T18:45:42.655Z'
        },
        {
          _id: '5cd3242efcabfb2c89b48737',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'code',
          content: {
            body: 'asassasasa',
            title: 'sa'
          },
          authorId: '5cd32367fcabfb2c89b48730',
          createdAt: '2019-05-08T18:47:10.405Z',
          updatedAt: '2019-05-08T18:47:10.405Z'
        },
        {
          _id: '5cd471eb09c085218b0dd3b0',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'code',
          content: {
            body: 'asdsa',
            title: 'asdasd'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-09T18:31:07.771Z',
          updatedAt: '2019-05-09T18:31:07.771Z'
        },
        {
          _id: '5cd57daf5af5570f16aa80d2',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'text',
          content: {
            body: '# hola\nesto es una prueba\nyeeep\nasd\nasd\nasd\nasd\nasd\n- [ ] to do 1\n- [x] todo 2',
            title: 'borrame'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T13:33:35.407Z',
          updatedAt: '2019-05-10T13:33:35.407Z'
        },
        {
          _id: '5cd588435af5570f16aa80d3',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'video',
          content: {
            body: 'https://www.youtube.com/watch?v=AKtr6hL5vDk',
            title: 'PropWash'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T14:18:43.433Z',
          updatedAt: '2019-05-10T14:18:43.433Z'
        },
        {
          _id: '5cd58e0f5af5570f16aa80d4',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'video',
          content: {
            body: 'https://accounts.eyeson.team/meetings/5cd435d635a064000f0ed3cd/recordings/5cd437f43133ee000f69af71',
            title: 'Live coding'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T14:43:27.891Z',
          updatedAt: '2019-05-10T14:43:27.891Z'
        },
        {
          _id: '5cd58ed05af5570f16aa80d5',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'text',
          content: {
            body: '# Bootcamp Stream\n\nUna plataforma de comunicación entre alumnos\n\n## Tech MERN\n\n- API REST\n  - express\n  - mongo\n- FRONTEND\n  - react\n  - redux\n  - axios\n\n## Views\n\nPUBLIC\n\n- /login\n- /register\n\nPRIVATE\n\n- /admin ->  creación bootcamp y gestión usuarios\n- /profile  -> edit user info\n- /profile/mis-bootcamps\n- /bootcamp/:id\n\n\n## Roles\n\nalumno -> /profile, /bootcamp/:id\nadmin ->  alumno + /admin\n\n## main view: /bootcamp/:id\n\n###  title\ndescription\n\nPOST TIPO TEXTO\n\nPOST TIPO VIDEO\n\nPOST TIPO ACTIVIDADES\n\nCREACIÓN DE POST\n        3 tabs: texto, video, actividad\n\n## Features\n\n- [x] backend en express\n\n\n##  vendor code\n\n- https://jpuri.github.io/react-draft-wysiwyg/#/\n- https://github.com/kkfor/for-editor\n- https://github.com/thlorenz/brace\n- https://github.com/securingsincity/react-ace\n- https://github.com/CookPete/react-player      ',
            title: 'Readme'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T14:46:40.859Z',
          updatedAt: '2019-05-10T14:46:40.859Z'
        },
        {
          _id: '5cd590435af5570f16aa80d6',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'text',
          content: {
            body: 'GeeksHubs Academy\nFSD VLC FEB 2019\n13 Semanas\nsasasa\nsasa\nsasasa\nsasa\nsasasa\nlkhsalkjhlksahj\nsa\nasassasasa\nasdasd\nasdsa\nborrame\nhola\nesto es una prueba\nyeeep\nasd\nasd\nasd\nasd\nasd\n-  to do 1\n-  todo 2\n\nPropWash\n\nLive coding\nReadme\nBootcamp Stream\nUna plataforma de comunicación entre alumnos\n\nTech MERN\nAPI REST\nexpress\nmongo\nFRONTEND\nreact\nredux\naxios\nViews\nPUBLIC\n\n/login\n/register\nPRIVATE\n\n/admin ->  creación bootcamp y gestión usuarios\n/profile  -> edit user info\n/profile/mis-bootcamps\n/bootcamp/:id\nRoles\nalumno -> /profile, /bootcamp/:id\nadmin ->  alumno + /admin\n\nmain view: /bootcamp/:id\ntitle\ndescription\n\nPOST TIPO TEXTO\n\nPOST TIPO VIDEO\n\nPOST TIPO ACTIVIDADES\n\nCREACIÓN DE POST\n        3 tabs: texto, video, actividad\n\nFeatures\n backend en express\nvendor code\nhttps://jpuri.github.io/react-draft-wysiwyg/#/\nhttps://github.com/kkfor/for-editor\nhttps://github.com/thlorenz/brace\nhttps://github.com/securingsincity/react-ace\nhttps://github.com/CookPete/react-player\nBuscar\nGeeksHubs Academy\n"If at first you don\'t succeed, try and try again.\n\nAll Content © GeeksHubs. VLC FSD class of 2019. All Rights Reserved\n\nFollow us\nTerms and Conditions\nPrivacy\nCookies policy',
            title: 'Readme2'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T14:52:51.770Z',
          updatedAt: '2019-05-10T14:52:51.770Z'
        },
        {
          _id: '5cd595f2e43a5636e36f3cd8',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'activity',
          content: {
            body: 'https://material-ui.com/api/text-field/',
            title: 'ulr preview'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T15:17:06.153Z',
          updatedAt: '2019-05-10T15:17:06.153Z'
        },
        {
          _id: '5cd5a69cce8a721350731680',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'activity',
          content: {
            body: 'https://codeburst.io/decorate-your-code-with-typescript-decorators-5be4a4ffecb4',
            title: 'typescript'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T16:28:12.080Z',
          updatedAt: '2019-05-10T16:28:12.080Z'
        },
        {
          _id: '5cd5c1bace8a721350731682',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'activity',
          content: {
            body: 'https://github.com/GeeksHubsAcademy/bootcamp-stream-platform',
            title: 'stream platform!'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T18:23:54.180Z',
          updatedAt: '2019-05-10T18:23:54.180Z'
        },
        {
          _id: '5cd5c235ce8a721350731683',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'activity',
          content: {
            body: 'https://www.youtube.com/watch?time_continue=3&v=uISOBbmiqK0',
            title: 'youtube link'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T18:25:57.688Z',
          updatedAt: '2019-05-10T18:25:57.688Z'
        },
        {
          _id: '5cd5c6d7ce8a721350731684',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'activity',
          content: {
            body: 'https://www.youtube.com/watch?v=uISOBbmiqK0',
            title: 'fpv!'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T18:45:43.877Z',
          updatedAt: '2019-05-10T18:45:43.877Z'
        },
        {
          _id: '5cd5c75cce8a721350731685',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'activity',
          content: {
            body: 'https://www.npmjs.com/package/react-player',
            title: 'react-player'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T18:47:56.105Z',
          updatedAt: '2019-05-10T18:47:56.105Z'
        },
        {
          _id: '5cd5c77ece8a721350731686',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'activity',
          content: {
            body: 'https://github.com/GeeksHubsAcademy/bootcamp-stream-platform/blob/master/readme.md',
            title: 'readme.md'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T18:48:30.978Z',
          updatedAt: '2019-05-10T18:48:30.978Z'
        },
        {
          _id: '5cd5c917ce8a721350731687',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'activity',
          content: {
            body: 'http://winhtaikaung.github.io/react-tiny-link/',
            title: 'url previewer'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T18:55:19.198Z',
          updatedAt: '2019-05-10T18:55:19.198Z'
        },
        {
          _id: '5cd5ca2d651d4c49c1583bb2',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          postType: 'link',
          content: {
            body: 'https://www.youtube.com/watch?time_continue=3&v=uISOBbmiqK0',
            title: 'link demo'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T18:59:57.628Z',
          updatedAt: '2019-05-10T18:59:57.628Z'
        },
        {
          _id: '5cd5ccda0cd90a4cd283b2e9',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          keywords: [
            '#video'
          ],
          postType: 'video',
          content: {
            body: 'asdasd',
            title: 'asdas'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T19:11:22.321Z',
          updatedAt: '2019-05-10T19:11:22.321Z'
        },
        {
          _id: '5cd5cce40cd90a4cd283b2ea',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          keywords: [
            '#link'
          ],
          postType: 'link',
          content: {
            body: 'asd',
            title: 'ascd'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T19:11:32.208Z',
          updatedAt: '2019-05-10T19:11:32.208Z'
        },
        {
          _id: '5cd5cced0cd90a4cd283b2eb',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          keywords: [
            '#activity'
          ],
          postType: 'activity',
          content: {
            body: 'sadf',
            title: 'wgrw'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T19:11:41.393Z',
          updatedAt: '2019-05-10T19:11:41.393Z'
        },
        {
          _id: '5cd5ce630cd90a4cd283b2ec',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          keywords: [
            '#activity'
          ],
          postType: 'activity',
          content: {
            body: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            title: 'MP4 VIDEO'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T19:17:55.118Z',
          updatedAt: '2019-05-10T19:17:55.118Z'
        },
        {
          _id: '5cd5ce6e0cd90a4cd283b2ed',
          reactions: {
            Likes: [],
            Loves: [],
            Hahas: [],
            Wow: []
          },
          keywords: [
            '#video'
          ],
          postType: 'video',
          content: {
            body: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            title: 'mp4'
          },
          authorId: '5cd33289982b493f0c870656',
          createdAt: '2019-05-10T19:18:07.001Z',
          updatedAt: '2019-05-10T19:18:07.001Z'
        }
      ]
    }
  ],
  user: {
    _id: '5cd33289982b493f0c870656',
    name: 'Juan Pérez Garnica',
    lastname: 'aSDASD',
    email: 'juan@geekshubs.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2QzMzI4OTk4MmI0OTNmMGM4NzA2NTYiLCJpYXQiOjE1NTc0OTQ5NjUuOTk3LCJleHAiOjE1NTgwOTk3NjUuOTk3fQ.xybvkkMM2DPSbh4xqDVwbNQHQBVHOfJri__NdeUVdRo',
    role: 'admin'
  },
  allUsers: [
    {
      _id: '5cd32e61e8dba3376e859d69',
      name: 'Juan Pérez Garnica',
      lastname: 'ga',
      email: 'jupegarnica+2@gmail.com',
      role: 'student'
    },
    {
      _id: '5cd33289982b493f0c870656',
      name: 'Juan Pérez Garnica',
      lastname: 'aSDASD',
      email: 'juan@geekshubs.com',
      role: 'admin'
    },
    {
      _id: '5cd333dae9e4433f7bbe9c1c',
      name: 'Juan Pérez Garnica',
      lastname: 'asd',
      email: 'jupegarnica@gmail.com',
      role: 'student'
    },
    {
      _id: '5cd33603e9e4433f7bbe9c20',
      name: 'juan',
      lastname: 'jaskjh',
      email: 'juan3@geekshubs.com',
      role: 'student'
    },
    {
      _id: '5cd33792dba3654580434bc4',
      name: 'Juan Pérez Garnica',
      lastname: 'aSDASD',
      email: 'jupegarnica2@gmail.com',
      role: 'student'
    }
  ]
}
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
    case 'DELETE_USER':
      return {
        ...state,
        user: action.user,
      };
      case 'UNSUSCRIBE_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
