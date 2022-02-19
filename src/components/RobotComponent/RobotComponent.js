const Robot = (name, speed, resistance, date) => {
  return (
    <>
      <li>
        <h2>Name: {name}</h2>
        <img src="" alt={`Robot ${name}`} />
        <ul>
          <li>Speed: {speed};</li>
          <li>Resistance: {resistance};</li>
          <li>Creation date: {date};</li>
        </ul>
      </li>
    </>
  );
};

export default Robot;
