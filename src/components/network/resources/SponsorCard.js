import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExternalLink from "Common/ExternalLink"
import ReadMoreReact from "read-more-react"
import { urlToSocialIcon } from "./util"

export default function SponsorCard({
  name,
  imageUrl,
  description,
  website,
  socialMedia,
  email,
  address
}) {
  return (
    <Container>
      <ImageColumn>
        <img alt={name} src={imageUrl} />
      </ImageColumn>

      <ContentColumn>
        <h2>{name}</h2>
        <p>{address}</p>

        <Description>
          <ReadMoreReact text={description} min={200} ideal={350} max={700} readMoreText="Read more" />
        </Description>

        <List>
          {
            socialMedia.map((url) => {
              const icon = urlToSocialIcon(url)
              if (!icon) return ""

              return (
                <li key={icon}>
                  <ExternalLink href={url}>
                    <FontAwesomeIcon size="2x" icon={["fab", icon]} color="#0077B5" />
                  </ExternalLink>
                </li>
              )
            })
          }
        </List>
      </ContentColumn>

      <ActionColumn>
        <p>{email}</p>
        <ExternalLink aria-label={name} color="#248ABA" href={website}>
          Website
        </ExternalLink>
      </ActionColumn>
    </Container>
  )
}

const ImageColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0.25;

  img {
    width: 95%;
  }
`

const ContentColumn = styled.div`
  flex: 1;
`

const ActionColumn = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 0.25;
  flex-direction: column;
  justify-content: center;
`

const List = styled.ul`
  list-style: none;
  margin-left: 0;

  li {
    display: inline-block;
    margin-right: 15px;
  }
`

const Description = styled.div`
  margin: 20px 0;
  
  .read-more-button {
    color: ${props => props.theme.primaryDark};
    cursor: pointer;
    margin-top: 10px;
    width: 100px;
  }
`

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 4rem 2rem;
  width: 100%;

  > div {
    padding: 0.4rem;
  }

  @media (max-width: 990px) {
    width: 100vw;
  }

  @media(max-width: 768px) {
    padding: 2rem 3rem 2rem;
    flex-direction: column;
  }

  @media(max-width: 600px) {
    margin: 1rem 0;
  }
`
