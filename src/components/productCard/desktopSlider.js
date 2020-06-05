/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";
import Image from "../image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { createMarkup } from "../../utils/functions";
import ExternalLink from "../link/externalLink";

const DesktopSlider = ({
  imageGallery,
  price,
  heading,
  descriptionNode,
  specificationTitle,
  specificationListNode,
  externalButtonText,
  externalButtonLink,
  id,
}) => {
  const [focusImage, setFocusImage] = useState();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      imageGallery.length > 5
        ? 6
        : imageGallery.length > 4
        ? 5
        : imageGallery.length > 3
        ? 4
        : imageGallery.length > 2
        ? 3
        : imageGallery.length > 1
        ? 2
        : 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    focusOnSelect: true,
  };
  return (
    <article
      id={id}
      sx={{
        display: ["none", "flex", "flex"],
        flexDirection: ["column-reverse", "row-reverse"],
        mb: 8,
      }}
    >
      <div sx={{ flex: "1" }}>
        <div sx={{ px: 3, ml: [2, null, 6] }}>
          <Styled.h2>{heading}</Styled.h2>
          <p
            sx={{
              fontWeight: "heading",
              my: 3,
            }}
          >
            {price}
          </p>
          <div sx={{ my: 3 }}>
            <div
              dangerouslySetInnerHTML={createMarkup(
                descriptionNode.childMarkdownRemark.html
              )}
            />
          </div>
          <p
            sx={{
              fontWeight: "heading",
              textTransform: "uppercase",
              my: 3,
            }}
          >
            {specificationTitle}
          </p>

          <div
            sx={{
              ul: {
                variant: "markdownText.ul",
              },
            }}
            dangerouslySetInnerHTML={createMarkup(
              specificationListNode.childMarkdownRemark.html
            )}
          />
          <div sx={{ py: 3 }}>
            {externalButtonLink && (
              <ExternalLink
                text={externalButtonText}
                href={externalButtonLink}
                hovercolor="white"
                color="#111111"
              />
            )}
          </div>
        </div>
      </div>
      <div sx={{ flex: "1" }}>
        <Image
          alt={imageGallery[0].alt}
          image={focusImage ? focusImage : imageGallery[0].fluid}
        />
        {imageGallery.length >= 2 ? (
          <div
            sx={{
              width:
                imageGallery.length > 5
                  ? "calc(85px * 6)"
                  : imageGallery.length > 4
                  ? "calc(85px * 5)"
                  : imageGallery.length > 3
                  ? "calc(85px * 4)"
                  : imageGallery.length > 2
                  ? "calc(85px * 3)"
                  : "calc(85px * 2)",
              display: ["none", "block"],
              mx: "auto",
            }}
          >
            <Slider {...settings}>
              {imageGallery.map(({ fluid, alt }, index) => (
                <div
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    mt: 4,
                    padding: 1,
                  }}
                  onClick={() => setFocusImage(fluid)}
                >
                  <Image alt={alt} image={fluid} />
                </div>
              ))}
            </Slider>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default DesktopSlider;

DesktopSlider.propTypes = {
  imageGallery: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  descriptionNode: PropTypes.object.isRequired,
  specificationTitle: PropTypes.string.isRequired,
  specificationListNode: PropTypes.object.isRequired,
  externalButtonText: PropTypes.string.isRequired,
  externalButtonLink: PropTypes.string.isRequired,
};
