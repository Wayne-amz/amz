/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";
import { Fragment } from "react";
import Image from "../image";
import StyledLink from "../link/styledLink";
import { createMarkup } from "../../utils/functions";

const ProductGallery = ({ products, title }) => {
  return (
    <Fragment>
      <Styled.h2 sx={{ mt: [6], mb: 4, textAlign: "center" }}>
        {title}
      </Styled.h2>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          px: 4,
          a:{
            mb:[6, "0px"],
          }
        }}
      >
        {products.map((product) => {
          return (
            <div
              key={product.id}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                div: {
                  width: ["180px", "90px", "120px"],
                  alignSelf: "center",
                },
              }}
            >
              <Image
                image={product.productImage.fluid}
                alt={product.productImage.alt}
              />

              <Styled.h3 sx={{ mt: 3 }}>{product.productTitle}</Styled.h3>
              <div
                sx={{ p: { mb: 3 } }}
                dangerouslySetInnerHTML={createMarkup(
                  product.productDescrriptionNode.childMarkdownRemark.html
                )}
              />
              <StyledLink href="/services" color="#111111" hovercolor="white">
                View
              </StyledLink>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductGallery;

ProductGallery.propTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
