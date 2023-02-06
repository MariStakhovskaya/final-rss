import styles from './Button.module.css';

type ButtonType = {
  name: string;
  type?: string;
  disabled?: boolean;
  callback?: () => void;
};

function Button(props: ButtonType) {
  const handleClick = () => {
    if (props.callback) props.callback();
  };

  return (
    <button
      className={styles.container}
      onClick={handleClick}
      disabled={props.disabled}
    >
      <p>{props.name}</p>
    </button>
  );
}

export default Button;
