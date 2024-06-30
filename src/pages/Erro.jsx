import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div >
      <Result
        status="500"
        title="Oops!"
        subTitle={error.statusText || error.message}
        extra={
          <Button
            style={{ padding: "20px" }}
            type="primary">
            <Link style={{ fontWeight: "bold", cursor: "pointer" }} to={"/"}> Back to Home </Link>
          </Button>}
      />

    </div>
  );
}