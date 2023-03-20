import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "m5zdy5bl",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skYDZAFTb41iaBlszi2TL6JjO2sDbjyQt9OiblSq4qrPp4VVXevrCxvNeb5HcIUGmPSg7ZSGA5usYeQQdMm1WSYBSGkriuZrnGuf4tuQKBmhqc09hiHvdL5y3qiraWnmxODSWVN9dqUx1SdXZ1760nUzaUmEVrlNgPYbexIDsRPlbb3ouK7k",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
