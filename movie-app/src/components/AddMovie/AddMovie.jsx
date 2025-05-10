import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import style from "./AddMovie.module.css";

function AddMovieForm(props) {
    const { movies, setMovies } = props;

    const [formData, setFormData] = useState({
        title: "",
        date: "",
    });

    const [errors, setErrors] = useState({
        title: false,
        date: false,
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function validate() {
        const newErrors = {
            title: formData.title === "",
            date: formData.date === "",
        };

        setErrors(newErrors);
        return !newErrors.title && !newErrors.date;
    }

    function addMovie() {
        const movie = {
            id: nanoid(),
            title: formData.title,
            year: formData.date,
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };
        setMovies([...movies, movie]);

        // Reset form dan error setelah berhasil tambah
        setFormData({ title: "", date: "" });
        setErrors({ title: false, date: false });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validate()) {
            addMovie();
        }
    }

    const { title, date } = formData;

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <input
                    className={style.input_form}
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={handleChange}
                />
                {errors.title && <Alert>Title Wajib Diisi</Alert>}

                <input
                    className={style.input_form}
                    id="date"
                    name="date"
                    type="text"
                    value={date}
                    onChange={handleChange}
                />
                {errors.date && <Alert>Date Wajib Diisi</Alert>}

                <button className={style.button_form}>Add Movies</button>
            </form>
        </div>
    );
}

export default AddMovieForm;
