import "./index.css";

function TodoLIstItem(props) {
  const { data } = props
  console.log(props);
  // function handleClick(e) {
  //   alert('You clicked me!');
  // }
  function handleClickDelItem(e) {
    // e.stopPropagation()
    alert('子');
    console.log(e);
  }

  const listItems = data.map(item => {
    return (<li key={item.id}
      >{item.title} <button style={{marginLeft: '80px'}} onClick={handleClickDelItem}>删除</button></li>)
  })
  return (
    <ul>{listItems}</ul>
  );
}

export default TodoLIstItem;