import { useEffect, useState } from 'react'
import axios from 'axios'

// custom hooks 
// function useTodo(n){
//   const [todos, setTodos] = useState([])
//   const [loading,setloading]=useState(true);



//   useEffect(() => {
//     const value=setInterval(()=>{
//       axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setloading(false);
//       })
//     },n*1000);

//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setloading(false);
//       })

//     return ()=>{
//       clearInterval(value);
//     }
   
//   }, [n]);

 

//   return {todos,loading};
// }
// function App() {
//   const {todos,loading}=useTodo(5);
//   if(loading){
//     return <div>Loading...</div>
//   }
//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }


//isonline custom hooks
// function useIsOnline(){
//   const [isonline,setonline]=useState(window.navigator.onLine);

//   useEffect(()=>{
//     window.addEventListener("online",()=>{
//       setonline(true);
//     })
//     window.addEventListener("offline",()=>{
//       setonline(true);
//     })
//   })
//   return isonline;
// }
// function App(){
//    const isonline=useIsOnline();
//    return (
//     <>
//       {isonline?"You are online yay!":"You are not offline connect to internet"}
//     </>
//    );
// }

//mouse move custom hook

// const useMousePointer = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return position;
// };

// function App() {
//   const mousePointer = useMousePointer();

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }

// count custom hook
// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

//debounce custom hook
function useDebounce(value,delay){
  const [debouncedValue,setDebouncedValue]=useState(value);
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setDebouncedValue(value);
    },delay);

    return ()=>clearTimeout(timer);
  },[value,delay])
 return debouncedValue;
}

function App(){
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);
  return (
    <>
    Debounced value is {debouncedValue}
     <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </>
   
  );
}

export default App