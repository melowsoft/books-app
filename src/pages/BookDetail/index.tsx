import React, { useEffect } from "react";
import {
  BigThumbnail,
  Container,
  DetailContainer,
  DetailsBox,
  InfoText,
  ShowArea,
} from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Helpers from "../../api/helpers";

const BookDetail = () => {
  interface RouteParams {
    id: string;
  }

  interface State {
    volumeInfo: any;
  }

  const { id } = useParams<RouteParams>();
  const [isMounted, setIsMounted] = React.useState(false);
  const [state, setState] = React.useState<State>({ volumeInfo: null });

  useEffect(() => {
    setIsMounted(true); // Set the component as mounted when the effect runs

    // Your code here...
    if (isMounted) {
      // Your code here...
      (async () => {
        const volumeInfo = await Helpers.getId(id);
        setState((prevState) => ({
          ...prevState,
          volumeInfo,
        }));
      })();
    }

    return () => {
      // This cleanup function runs when the component unmounts
      setIsMounted(false); // Set the component as unmounted
    };
  }, [id, isMounted]);

  return (
    <Container>
      <DetailContainer>
        <ShowArea>
          <Link to="/">
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <BsArrowLeft style={{ fontSize: 20, marginRight: 5 }} />
              Back
            </div>
          </Link>
          <BigThumbnail
            src={state.volumeInfo?.imageLinks?.large}
            alt="big thumbnail"
          />
          <DetailsBox>
            <h3>{state?.volumeInfo?.title}</h3>
            <h4>
              <span>Authors: </span>
              {state?.volumeInfo?.authors?.join(",")}
            </h4>

            <InfoText>
              {" "}
              Published: <strong>2005</strong>
            </InfoText>
            <InfoText>
              {" "}
              Publisher: <strong>{state?.volumeInfo?.publisher}</strong>
            </InfoText>
            <InfoText>
              {" "}
              Pages: <strong>{state?.volumeInfo?.pageCount}</strong>
            </InfoText>

            <p>{state?.volumeInfo?.description}</p>
          </DetailsBox>
        </ShowArea>
      </DetailContainer>
    </Container>
  );
};

export default BookDetail;
