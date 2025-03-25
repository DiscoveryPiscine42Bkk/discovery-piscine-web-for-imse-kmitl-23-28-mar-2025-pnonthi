<style>
    #ft_list {
      border: 2px solid #90e9dc;
      padding: 10px;
      width: 300px;
      min-height: 50px;}
    .todo {
      background-color: #eaabf5;
      margin: 5px 0;
      padding: 10px;
      cursor: pointer;}
    button {margin-bottom: 10px;}
</style>
<body>
  <button onclick="addTodo()">New</button>
  <div id="ft_list"></div>
  <script>
    let todos = [];
    window.onload = () => {
      const cookie = getCookie("todo_list");
      if (cookie) {
        try {
          todos = JSON.parse(cookie);
          todos.forEach(todo => {
            createTodoElement(todo);});} 
            catch (e) {
          console.error("Failed to parse cookie:", e);}}};

    const addTodo = () => {
      const todoText = prompt("Enter your new task:");
      if (todoText && todoText.trim() !== "") {
        todos.unshift(todoText.trim());
        createTodoElement(todoText.trim(), true);
        saveCookies();}};

    const createTodoElement = (text, insertAtTop = false) => {
      const div = document.createElement("div");
      div.className = "todo";
      div.innerText = text;
      div.onclick = () => {
        const confirmDelete = confirm("Do you want to delete this task?");
        if (confirmDelete) {
          div.remove();
          todos = todos.filter(item => item !== text);
          saveCookies();}};

      const ftList = document.getElementById("ft_list");
      if (insertAtTop && ftList.firstChild) {
        ftList.insertBefore(div, ftList.firstChild);} 
        else {ftList.appendChild(div);}};