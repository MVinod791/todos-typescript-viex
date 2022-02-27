import { createStore } from "vuex";
import todos from './modules/todos';


export default createStore({
  modules: {
    todos
  }
});

// export const store=createStore<State>({
//   modules: {
//     todos
//   },
//   state,
// });

// export function useStore(){
//   return state as State
// }