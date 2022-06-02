
function Main() {
const colorHex = [
  "#4e417e",
  "#02dc92",'#dfbaa0',
  "#d8394e",
  "#7c31d3",
  "#7fcfd2",
  "#0e5d46",
  "#d98590",
  "#7923d7",
  "#6e5eeb",
  "#2a176b",
  "#dea1d8",
  "#cbae6f",
  "#b6841d",
  "#62df7d",
  "#9e4d2c",
  "#393b73",
  "#8cface",
  "#1a4f07",
  "#045529",
  "#04e754",
  "#697980",
  "#018120",
  "#5bdcc7",
  "#7010b2",
  "#c50007",
  "#cfe583",
  "#cdb58e",
  "#298b5d",
  "#58e253",
  "#a9c3c5",
  "#66fec5",
];

const formate = colorHex.map((colorr) => (
  <li style={{ backgroundColor: colorr}} key={colorr}>
    {colorr}
  </li>
));
  return <ul>{formate}</ul>; 

}
function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.text}</h3>
    </>
  );
}
function App() {
  return <div className="App">
<Header title='30days of  React' text='Hexadecimal Colors'/>
<Main />
  </div>;
}

export default App;
