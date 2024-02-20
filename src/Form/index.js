import "./style.css";

const Form = () => (
    <form className="form__form">
        <input className="form__formInput" autofocus placeholder="Co jest do zrobienia?" />
        <button className="form__formButton">Dodaj zadanie</button>
    </form>
);


export default Form;