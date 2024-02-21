import "./style.css";

const Form = () => (
    <form className="form__form">
        <input className="form__formInput" autoFocus placeholder="Co jest do zrobienia?" />
        <button className="form__formButton">Dodaj zadanie</button>
    </form>
);


export default Form;