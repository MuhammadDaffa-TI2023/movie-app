import { useEffect, useState } from "react";

function Counter() {
    const [angka, setAngka] = useState(0);

    // Function to increment counter
    function addAngka() {
        setAngka(prevAngka => prevAngka + 1);
    }

    /**
     * useEffect with empty dependency array
     * - Runs only once on component mount
     * - Cleanup runs on unmount
     */
    useEffect(() => {
        console.log("Lifecycle: Component dimount");
        document.title = 'Result: ${angka}';

        return () => {
            console.log("Lifecycle: Component akan unmount");
            document.title = "React App";
        };
    }, []);

    /**
     * Additional useEffect to track state changes
     * - Runs whenever 'angka' changes
     */
    useEffect(() => {
        console.log("State updated - Current value:", angka);
    }, [angka]);

    console.log("Lifecycle: Component dirender");

    return (
        <div>
            <p>Result: {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;