import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <p>!!!</p>
      404
    </div>
  );
}
