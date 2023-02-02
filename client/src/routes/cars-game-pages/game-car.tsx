const GameCar = () => {
  return (
    <>
      <div className="game">
        <div className="word"></div>
        <div className="car"></div>
      </div>
      <div className="footer">
        <p className="counter">
          Счёт: <span>0</span>
        </p>
        <p className="time">
          Время: <span>0:0</span>
        </p>
        <p className="errors">
          Жизни: <span>3</span>
        </p>
        <p className="level">
          Счёт: <span>0</span>
        </p>
      </div>
    </>
  );
};

export { GameCar };
