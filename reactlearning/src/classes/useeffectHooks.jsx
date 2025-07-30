const UseEffectHooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(() => {
        console.log("useEffect called");
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <>
        <h1>UseEffect Hooks Example</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <br />
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
        />
        <p>Name: {name}</p>
        </>
    );
    }
export default UseEffectHooks;