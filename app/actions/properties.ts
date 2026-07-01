import { client } from "@/sanity/lib/client";
import {
  LAND_ONE_QUERY, AMAAR_QUERY, APARTMENT_QUERY,
  FARM_QUERY, LAND_TWO_QUERY, INVESTMENT_QUERY,
} from "@/sanity/lib/queries";

export type MediaItem = {
  type: "image" | "video";
  image?: { asset: { url: string } };
  video?: { asset: { url: string } };
};

export type Property = {
  _id: string;
  title?: string;
  number?: string;
  location?: string;
  plan?: string;
  price?: string;
  priceNote?: string;
  status?: string;
  description?: string;
  twitterLink?: string;
  whatsappLink?: string;
  order?: number;
  media?: MediaItem[];
  details?: { label: string; value: string }[];
};

const fetchOptions = { next: { revalidate: 60 } };

export async function getLandOne(): Promise<Property[]> {
  return await client.fetch(LAND_ONE_QUERY, {}, fetchOptions);
}
export async function getAmaar(): Promise<Property[]> {
  return await client.fetch(AMAAR_QUERY, {}, fetchOptions);
}
export async function getApartment(): Promise<Property[]> {
  return await client.fetch(APARTMENT_QUERY, {}, fetchOptions);
}
export async function getFarm(): Promise<Property[]> {
  return await client.fetch(FARM_QUERY, {}, fetchOptions);
}
export async function getLandTwo(): Promise<Property[]> {
  return await client.fetch(LAND_TWO_QUERY, {}, fetchOptions);
}
export async function getInvestment(): Promise<Property[]> {
  return await client.fetch(INVESTMENT_QUERY, {}, fetchOptions);
}