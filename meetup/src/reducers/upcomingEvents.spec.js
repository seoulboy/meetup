import upcomingEventsReducer from './upcomingEvents';
import * as types from '../constants/ActionTypes';


describe('upcomingEventsReducer', () => {
  it('should handle initial state', () => {
    expect(upcomingEventsReducer(undefined, {})).toEqual({
      data: { events: [{ local_date: '', local_time: '' }] },
    });
  });

  it('should handle INITIALIZATION', () => {
    expect(
      upcomingEventsReducer([], {
        type: types.INITIALIZATION,
        initData: {
          config: { timeout: 0, method: 'get' },
          data: {},
          headers: {},
          request: {},
          timeout: 0,
          status: 200,
          statusText: 'OK',
        },
      })
    ).toEqual({
      config: { timeout: 0, method: 'get' },
      data: {},
      headers: {},
      request: {},
      timeout: 0,
      status: 200,
      statusText: 'OK',
    });
  });

  it('should handle UPDATE_MEETUP_DATA', () => {
    expect(
      upcomingEventsReducer([], {
        type: types.UPDATE_MEETUP_DATA,
        newData: {
          config: { timeout: 0, method: 'get' },
          data: {},
          headers: {},
          request: {},
          timeout: 0,
          status: 200,
          statusText: 'OK',
        },
      })
    ).toEqual({
      config: { timeout: 0, method: 'get' },
      data: {},
      headers: {},
      request: {},
      timeout: 0,
      status: 200,
      statusText: 'OK',
    });
  });

  // it('should handle EDIT_TODO', () => {
  //   expect(
  //     todos(
  //       [
  //         {
  //           text: 'Run the tests',
  //           completed: false,
  //           id: 1,
  //         },
  //         {
  //           text: 'Use Redux',
  //           completed: false,
  //           id: 0,
  //         },
  //       ],
  //       {
  //         type: types.EDIT_TODO,
  //         text: 'Fix the tests',
  //         id: 1,
  //       }
  //     )
  //   ).toEqual([
  //     {
  //       text: 'Fix the tests',
  //       completed: false,
  //       id: 1,
  //     },
  //     {
  //       text: 'Use Redux',
  //       completed: false,
  //       id: 0,
  //     },
  //   ]);
  // });

  // it('should handle COMPLETE_TODO', () => {
  //   expect(
  //     todos(
  //       [
  //         {
  //           text: 'Run the tests',
  //           completed: false,
  //           id: 1,
  //         },
  //         {
  //           text: 'Use Redux',
  //           completed: false,
  //           id: 0,
  //         },
  //       ],
  //       {
  //         type: types.COMPLETE_TODO,
  //         id: 1,
  //       }
  //     )
  //   ).toEqual([
  //     {
  //       text: 'Run the tests',
  //       completed: true,
  //       id: 1,
  //     },
  //     {
  //       text: 'Use Redux',
  //       completed: false,
  //       id: 0,
  //     },
  //   ]);
  // });

  // it('should handle COMPLETE_ALL_TODOS', () => {
  //   expect(
  //     todos(
  //       [
  //         {
  //           text: 'Run the tests',
  //           completed: true,
  //           id: 1,
  //         },
  //         {
  //           text: 'Use Redux',
  //           completed: false,
  //           id: 0,
  //         },
  //       ],
  //       {
  //         type: types.COMPLETE_ALL_TODOS,
  //       }
  //     )
  //   ).toEqual([
  //     {
  //       text: 'Run the tests',
  //       completed: true,
  //       id: 1,
  //     },
  //     {
  //       text: 'Use Redux',
  //       completed: true,
  //       id: 0,
  //     },
  //   ]);

  //   // Unmark if all todos are currently completed
  //   expect(
  //     todos(
  //       [
  //         {
  //           text: 'Run the tests',
  //           completed: true,
  //           id: 1,
  //         },
  //         {
  //           text: 'Use Redux',
  //           completed: true,
  //           id: 0,
  //         },
  //       ],
  //       {
  //         type: types.COMPLETE_ALL_TODOS,
  //       }
  //     )
  //   ).toEqual([
  //     {
  //       text: 'Run the tests',
  //       completed: false,
  //       id: 1,
  //     },
  //     {
  //       text: 'Use Redux',
  //       completed: false,
  //       id: 0,
  //     },
  //   ]);
  // });

  // it('should handle CLEAR_COMPLETED', () => {
  //   expect(
  //     todos(
  //       [
  //         {
  //           text: 'Run the tests',
  //           completed: true,
  //           id: 1,
  //         },
  //         {
  //           text: 'Use Redux',
  //           completed: false,
  //           id: 0,
  //         },
  //       ],
  //       {
  //         type: types.CLEAR_COMPLETED,
  //       }
  //     )
  //   ).toEqual([
  //     {
  //       text: 'Use Redux',
  //       completed: false,
  //       id: 0,
  //     },
  //   ]);
  // });

  // it('should not generate duplicate ids after CLEAR_COMPLETED', () => {
  //   expect(
  //     [
  //       {
  //         type: types.COMPLETE_TODO,
  //         id: 0,
  //       },
  //       {
  //         type: types.CLEAR_COMPLETED,
  //       },
  //       {
  //         type: types.ADD_TODO,
  //         text: 'Write more tests',
  //       },
  //     ].reduce(todos, [
  //       {
  //         id: 0,
  //         completed: false,
  //         text: 'Use Redux',
  //       },
  //       {
  //         id: 1,
  //         completed: false,
  //         text: 'Write tests',
  //       },
  //     ])
  //   ).toEqual([
  //     {
  //       text: 'Write tests',
  //       completed: false,
  //       id: 1,
  //     },
  //     {
  //       text: 'Write more tests',
  //       completed: false,
  //       id: 2,
  //     },
  //   ]);
  // });
});
