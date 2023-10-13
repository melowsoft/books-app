import React, { useEffect, useState } from "react";
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

interface RouteParams {
    id: string;
  }
  
  interface VolumeInfo {
    title: string;
    authors: string[];
    publishedDate: string;
    publisher: string;
    pageCount: number;
    description: string;
    imageLinks: {
      large: string;
    };
  }
  

const BookDetail = () => {
    const { id } = useParams<RouteParams>();
    const [state, setState] = useState<{ volumeInfo: VolumeInfo | null }>({
      volumeInfo: null,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      let isMounted = true;
  
      (async () => {
        setIsLoading(true);
  
        try {
          const volumeInfo: VolumeInfo = await Helpers.getId(id);
  
          if (isMounted) {
            setState((prevState) => ({
              ...prevState,
              volumeInfo,
            }));
          }
        } catch (err) {
          setError(err as Error);
        } finally {
          if (isMounted) {
            setIsLoading(false);
          }
        }
      })();
  
      return () => {
        isMounted = false;
      };
    }, [id]);
  
    if (isLoading) {
      return <div>
        <div style={{position: "absolute", left: "-1000px"}}>Loading...</div>
        <BookDetailLoader />
      </div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
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
