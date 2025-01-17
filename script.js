/** Vue アプリの生成 **/
function createApp() {
  new Vue({
    el: "#wrapper",
    data: {
      filter: "inbox",
      todos: [
        {
          id: 1, // 識別用の ID
          text: "みかんを買う", // テキスト
          createdAt: 1567940003455, // 登録日の Unix タイムスタンプ（ミリ秒）
          done: false, // タスクが完了したかどうか
          isEditing: false // 編集中かどうか
        },
        {
          id: 2,
          text: "郵便物を出す",
          createdAt: 1567940003455,
          done: false,
          isEditing: false // 編集中かどうか
        },
        {
          id: 3,
          text: "2km 走る",
          createdAt: 1567940003455,
          done: true,
          isEditing: false // 編集中かどうか
        }
      ],
      text: ""
    },
    computed: {
      todosLength: function() {
        return this.todos.length
      },
      filteredTodos: function() {
        const filter = this.filter
        return this.todos.filter(function(todo) {
          return filter === "completed" ? todo.done : !todo.done
        })
      },
      disabled: function() {
        return this.text === ""
      }
    },
    methods: {
      formatDate: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        return year + "." + month + "." + day
      },
      setFilter: function(filter) {
        this.filter = filter
      },
      handleSubmit: function() {
        this.addTodo(this.text)
        this.text = ""
      },
      addTodo: function(text) {
        this.todos.push({
          id: this.todosLength + 1,
          text: text,
          createdAt: Date.now(),
          done: false,
          isEditing: false
        })
      },
      editTodo: function(id) {
        this.todos = this.todos.map(function(todo) {
          if (todo.id === id) {
            todo.isEditing = true
          }
          return todo
        })
      },
      saveTodo: function(id) {
        this.todos = this.todos.map(function(todo) {
          if (todo.id === id) {
            todo.isEditing = false
          }
          return todo
        })
      }
    }
  })
}

/** 初期化 **/
function initialize() {
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
