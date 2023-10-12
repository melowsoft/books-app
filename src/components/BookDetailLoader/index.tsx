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

const BookDetailLoader = () => {
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
    setIsMounted(true);

    
    if (isMounted) {
      (async () => {
        const volumeInfo = await Helpers.getId(id);
        setState((prevState) => ({
          ...prevState,
          volumeInfo,
        }));
      })();
    }

    return () => {
      setIsMounted(false);
    };
  }, [id, isMounted]);

  return (
    <Container>
      <DetailContainer>
        <ShowArea>
          <Link to="/">
            <div style={{ display: "flex", alignItems: "center", fontWeight: "bold" }}>
              {" "}
              <BsArrowLeft style={{ fontSize: 20, marginRight: 5 }} />
             Go Back to Search Results
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

export default BookDetailLoader;
