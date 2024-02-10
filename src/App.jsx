import "./App.css"
import Counter from "./Counter"
import LikedButton from "./LikedButton";
import Lottery from "./Lottery";
import LotteryGame from "./LotteryGame";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
function App() {
  function winCondition(arr) {
    return arr[0] === 2;
  }
  return (
    <>
      {/* <Counter />
      < LikedButton /> */}
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}

      {/* <LotteryGame /> */}
      <Lottery n={4} winCondition={winCondition} />
    </>
  )
}

export default App
