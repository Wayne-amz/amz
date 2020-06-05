/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";
import Image from "../image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { createMarkup } from "../../utils/functions";
import ExternalLink from "../link/externalLink";

const MobileSlider = ({
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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    swipeToSlide: true,
    dots: true,
    focusOnSelect: true,
  };

  return (
    <article
      id={id}
      sx={{
        display: ["flex", "none", "none"],
        flexDirection: ["column"],
        mt: 6,
        mb: 6,
      }}
    >
      <div sx={{ px: [0, 0, 3], flex: "1" }}>
        <div sx={{ mb: 4 }}>
          <Slider {...settings}>
            {imageGallery.map(({ fluid, alt }, index) => (
              <div key={index}>
                <Image alt={alt} image={fluid} />
              </div>
            ))}
          </Slider>
        </div>
        <Styled.h2>{heading}</Styled.h2>
        <p
          sx={{
            fontWeight: "heading",
            textTransform: "uppercase",
            my: 2,
          }}
        >
          {price}
        </p>
        <div sx={{ my: 2 }}>
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
            my: 2,
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
        {externalButtonLink && (
          <ExternalLink
            text={externalButtonText}
            href={externalButtonLink}
            hovercolor="white"
            color="#111111"
          />
        )}
      </div>
    </article>
  );
};

export default MobileSlider;

MobileSlider.propTypes = {
  imageGallery: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  descriptionNode: PropTypes.object.isRequired,
  specificationTitle: PropTypes.string.isRequired,
  specificationListNode: PropTypes.object.isRequired,
  externalButtonText: PropTypes.string.isRequired,
  externalButtonLink: PropTypes.string.isRequired,
};
