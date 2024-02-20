import "./style.css";

const Form = () => (
    <form className="section__form">
        <input className="section__formInput" autofocus placeholder="Co jest do zrobienia?" />
        <button className="section__formButton">Dodaj zadanie</button>
    </form>
);


export default Form;