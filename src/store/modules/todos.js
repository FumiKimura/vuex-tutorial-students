import axios from 'axios';

const state = {
  //define your state properties here
  todos:[]
};

const getters ={
 //getter methods here
 allTodos: () => state.todos
};

const actions ={
 //define your actions here
  fetchTodos: async ({ commit }) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos', response.data);
  },
  postTodos: async ({ commit }, title) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false});
    commit('addTodo', response.data);
  }
};

const mutations ={
 //definite your mutations here
 setTodos: (state, todos) => {
  state.todos = todos;
 },
 addTodo:(state, newTodo) => {
  state.todos.unshift(newTodo);
 }
};


//We export these objects out so that we can use them in our components
export default {
  state,
  getters,
  actions,
  mutations
}