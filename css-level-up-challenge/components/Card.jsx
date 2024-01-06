function Card() {
  return (
    <div className="card">
      <img
        className="a"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
        alt="Porygon"
      />
      <div className="b">
        <p className="name">Porygon</p>
        <p className="id">#137</p>
      </div>
      <p className="c">
        Porygon est le premier Pokémon au monde à avoir été créé à partir de
        programmes informatiques, grâce à une technologie de pointe.
      </p>
    </div>
  );
}

export default Card;
