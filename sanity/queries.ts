import groq from "groq";
import { client } from "./lib/client";
export async function getProfile() {
    return client.fetch(
      groq`*[_type == "profile"]{
        _id,
        fullName,
        headline,
        profileImage {
          alt, 
          "image": asset->url
        },
        shortBio,
        location,
        fullBio,
        email,
        "resumeURL": resumeURL.asset->url,
        socialLinks,
        skills
      }`
    );
  }