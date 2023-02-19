import { useState } from "react";

const courses = [
    {
        id: 1,
        name: "React",
    },
    {
        id: 2,
        name: "JavaScript",
    },
    {
        id: 3,
        name: "HTML, CSS",
    },
];

function App() {
    const [checked, setChecked] = useState([]);
    console.log(checked);

    const handleSubmit = () => {
        console.log({ id: checked });
    };

    const handleCheck = (id) => {
        setChecked((prew) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prew, id];
            }
        });
    };

    return (
        <div className="App" style={{ padding: 32 }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
}

export default App;
