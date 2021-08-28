<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form v-on:submit="submitPost">
        <input type="text" v-model="inputText" placeholder="Add new ToDo...">
        <input type="submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddTodo",
  data: () => {
    return {
      inputText:''
    }
  },
  methods: {
    ...mapActions(['postTodos']),
    submitPost(e) {
      e.preventDefault();
      this.postTodos(this.inputText); 
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background-color: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>