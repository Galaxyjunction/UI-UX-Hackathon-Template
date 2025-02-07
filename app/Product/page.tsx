import React , {useEffect, useState} from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity =sanityClient({
    projectId : "",
    dataset: "production",
    apiVersion : "2025-1-31",
    useCdn: true,
});
interface Product {
    _id: string;
    tags: string;
    name: string;
    price: number;
    image: {
        asset: {
            url:string
        };
    };
    description: string
    quantity: number
    dimensions: string
    category: string
    slug : string
}
const 

