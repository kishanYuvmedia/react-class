import CustomHook from "./hooks/customhook";
const Home=()=>{
    const {count, increment, decrement} = CustomHook(1);
    return(
        <div>
            <h1>{count}</h1>
            <h1>{increment}</h1>
            <h1>{decrement}</h1>
        </div>
    )
}
export default Home;