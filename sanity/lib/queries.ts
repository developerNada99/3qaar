const PROPERTY_FIELDS = `
  _id,
  title,
  number,
  location,
  plan,
  price,
  priceNote,
  status,
  description,
  twitterLink,
  whatsappLink,
  order,
  media[]{
    type,
    image{
      asset->{url}
    },
    video{
      asset->{url}
    }
  },
  details[]{
    label,
    value
  }
`;

export const LAND_ONE_QUERY = `*[_type == "property" && category == "landone"] | order(order asc){ ${PROPERTY_FIELDS} }`;
export const AMAAR_QUERY = `*[_type == "property" && category == "amaar"] | order(order asc){ ${PROPERTY_FIELDS} }`;
export const APARTMENT_QUERY = `*[_type == "property" && category == "apartment"] | order(order asc){ ${PROPERTY_FIELDS} }`;
export const FARM_QUERY = `*[_type == "property" && category == "farm"] | order(order asc){ ${PROPERTY_FIELDS} }`;
export const LAND_TWO_QUERY = `*[_type == "property" && category == "landtwo"] | order(order asc){ ${PROPERTY_FIELDS} }`;
export const INVESTMENT_QUERY = `*[_type == "property" && category == "investment"] | order(order asc){ ${PROPERTY_FIELDS} }`;