import React, { useEffect } from "react";
import { format } from "date-fns";
import {
  BigThumbnail,
  Container,
  DetailContainer,
  DetailsBox,
  ImagePlaceholder,
  InfoText,
  ShowArea,
} from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Helpers from "../../api/helpers";
import BookDetailLoader from "../../components/BookDetailLoader";

const BookDetail = () => {
  interface RouteParams {
    id: string;
  }

  interface State {
    volumeInfo: any;
  }

  const { id } = useParams<RouteParams>();
    const [state, setState] = React.useState<State>({ volumeInfo: null });
    const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    let isMounted = true;
  
      (async () => {
       setIsLoading(true); 
      const volumeInfo = await Helpers.getId(id);
      if (isMounted) {
        setState((prevState) => ({
          ...prevState,
          volumeInfo,
        }));
        setIsLoading(false);  
      }
    })();
  
    return () => {
      isMounted = false;
    };
  }, [id]);

   if (isLoading) {
        return <BookDetailLoader />
    }

  return (
    <Container>
      <DetailContainer>
        <ShowArea>
          <Link to="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              <BsArrowLeft style={{ fontSize: 20, marginRight: 5 }} />
              Go Back to Search Results
            </div>
                  </Link>
                  {
                      state.volumeInfo?.imageLinks?.large ? ( <BigThumbnail
                        src={state.volumeInfo?.imageLinks?.large}
                        alt="big thumbnail"
                      />) : <ImagePlaceholder>No Image Thumbnail</ImagePlaceholder>
                  }
         
          <DetailsBox>
            <h3>{state?.volumeInfo?.title}</h3>
            <h4>
              <span>Authors: </span>
              {state?.volumeInfo?.authors?.join(",")}
            </h4>

            <InfoText>
              {" "}
              Published:{" "}
              <strong>
                {state?.volumeInfo?.publishedDate &&
                  format(new Date(state?.volumeInfo?.publishedDate), "yyyy")}
              </strong>
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
