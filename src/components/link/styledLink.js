/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const StyledLink = ({ children, href, color, hovercolor }) => {
  return (
    <AnchorLink
      to={href}
      aria-label={`Link to ${href}`}
      stripHash
      sx={{
        display: "inline-block",
        maxWidth: "170px",
        position: "relative",
        textDecoration: "none",
        fontFamily: "body",
        fontWeight: "body",
        fontSize: 1,
        color: color,
        textTransform: "capitalize",
        paddingX: "10px",
        textAlign: "center",
        zIndex: 2,
        "::after": {
          content: '" "',
          position: "absolute",
          zIndex: -1,
          display: "block",
          width: "100%",
          height: "2px",
          backgroundColor: color,
          transition: "0.2s",
          ml: "-10px",
          marginTop: "5px",
        },
        ":hover": {
          color: hovercolor,
          "::after": {
            height: "40px",
            mt: "-33px",
          },
        },
      }}
    >
      {children}
    </AnchorLink>
  );
};

StyledLink.defaultProps = {
  open: false,
};

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  hovercolor: PropTypes.string.isRequired,
};

export default StyledLink;
