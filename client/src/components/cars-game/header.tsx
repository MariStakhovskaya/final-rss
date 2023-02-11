import Button from '../custom/button/Button';
type HeaderCarsGameType = {
  classButton: string;
  isStop: boolean;
  isPause: boolean;
  callbackPause: () => void;
  callbackStop: () => void;
};

const HeaderCarsGame = (props: HeaderCarsGameType) => {
  return (
    <div className={props.classButton}>
      <Button
        name={props.isPause ? 'Play' : 'Pause'}
        callback={props.callbackPause}
      />
      <Button
        name={props.isStop ? 'Play' : 'Stop'}
        callback={props.callbackStop}
      />
    </div>
  );
};
export { HeaderCarsGame };
