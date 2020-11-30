import PropTypes from "prop-types";

export default {
  photos: {
    image: PropTypes.string,
    photographer: PropTypes.string,
    currentPhoto: PropTypes.string,
    downloadUrl: PropTypes.string,
    colorStar: PropTypes.string,
  },
  videos: {
    id: PropTypes.string,
    photographer: PropTypes.string,
    currentPhoto: PropTypes.string,
    downloadUrl: PropTypes.string,
    colorStar: PropTypes.string,
  },
};
