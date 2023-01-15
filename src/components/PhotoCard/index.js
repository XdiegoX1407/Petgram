import React from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen();
  const { toggleLike } = ToggleLikeMutation();

  const handleFavClick = () => {
    toggleLike({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={ref}>
      {show && (
        <React.Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </React.Fragment>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string,
  liked: PropTypes.bool,
  src: PropTypes.string,
  likes: function (props, propName) {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  },
};
