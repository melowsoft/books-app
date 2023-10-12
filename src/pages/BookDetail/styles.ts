import styled from "styled-components";

export const Container = styled.div`
padding: 40px;
padding-top: 80px;
width: 100%;
`

export const DetailContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;

`

export const ShowArea = styled.div`
max-width: 700px;
border-left: 1px solid #302f2f;
padding-left: 40px;

    a {
        text-decoration: none;
        color: #0c0b22;
    }
`

export const BigThumbnail = styled.img`
    width: 250px;
    margin-top: 30px;
`

export const DetailsBox = styled.div`

    h3 {
        font-size: 38px;
        margin-top: 15px;
        margin-bottom: 5px;
        color: #02537a;
        max-width: 500px;
    }

    h4 {
      
        color: #fd671d;
        max-width: 500px;

        span {
            color: #0c0b22;
        }
    }

    p {
        margin-top: 15px;
    }
` 
export const InfoText = styled.div`
font-size: 12px;
margin-top: 10px;

`
export const ImagePlaceholder = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    margin-top: 30px;
`
