import "./index.css";
import { useState } from "react";

function TodoList(props) {
  let [listData, setListData] = useState([
    // { title: "商品1", isFruit: false, id: 0 },
  ]);
  let [name, setName] = useState("");
  let [id, setID] = useState("0");

  function handleAdd() {
    if(name === ''){
      return;
    }
    setID(id + 1);
    setListData([...listData, { title: name, isDone: false, id: id }]);
    // 输入后 清除原有数据
    setName("");
  }

  // 接收子组件传递的方法
  function handleDataFromChild(id) {
    console.log(id);
    // filter 需要return返回
    setListData(listData.filter((item) => {
      return item.id !== id
    }));
  }

  function handleDone(id) {
    const newData = listData.map((c, i) => {
      if (c.id === id) {
        c.isDone = true
      }
      return c;
    });
    setListData(newData)
  }

  function handleCancel(id) {
    const newData = listData.map((c, i) => {
      if (c.id === id) {
        c.isDone = false
      }
      return c;
    });
    setListData(newData)
  }

  return (
    <>
      <h3>待办事项</h3>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={handleAdd}>添加</button>
      </div>
      <TodoListItem data={listData} onData={handleDataFromChild} 
      onDone={handleDone}
      onCancel={handleCancel}></TodoListItem>
      <div>总计：{listData.length} 待完成：{listData.filter(item => !item.isDone).length}</div>
    </>
  );
}

function TodoListItem(props) {
  console.log(props);
  // 接收父组件数据
  const { data } = props;
  const listItems = data.map((item) => {
    console.log(item);
    const handleDeleteItem = () => {
      // 传递父组件方法
      props.onData(item.id);
    };

    const onDone = () => {
      // 传递父组件方法
      props.onDone(item.id);
    };

    const onCancel = () => {
      // 传递父组件方法
      props.onCancel(item.id);
    };
    return (
      <li key={item.id} style={{margin: '10px 0'}}>
        <p>{item.title} { item.isDone ? '✅': '' }
        {!item.isDone && <button onClick={onDone} style={{marginLeft: '100px'}}>完成</button>}
        {item.isDone && <button onClick={onCancel} style={{marginLeft: '100px'}}>取消</button>}
        <button onClick={handleDeleteItem} >删除</button>
        </p>
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export default TodoList;
