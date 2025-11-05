export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  // console.log(props.Hold)
  return (
    <button onClick={props.hold} style={styles}>
      {props.value}
    </button>
  );
}
