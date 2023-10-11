import "./index.css";

function HelloReact(props) {
  const { data } = props
  console.log(props);
  function handleClick() {
    alert('You clicked me!');
  }
  function handleClickDelItem() {
    alert('del me!');
  }

  const listItems = data.map(item => {
    return (<li key={item.id}
      style={{
        color: item.isFruit ? 'magenta' : 'darkgreen'
      }} onClick={handleClick}>{item.title} <button onClick={handleClickDelItem}>删除</button></li>)
  })
  return (
    <ul>{listItems}</ul>
  );
}

export default HelloReact;