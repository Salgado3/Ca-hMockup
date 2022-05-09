export default function CashInfoCards(props) {
  return (
    <div className="card_Container">
      <img src={props.media} alt={props.alt} className="card_Media" />
      <section className="card_Text_Section">
        <h2>{props.header}</h2>
        <p>{props.description}</p>
      </section>
    </div>
  );
}
