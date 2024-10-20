import { data } from "../../constants";
import { images } from "../../constants";
import { Headings } from "../../components";
import React, { useEffect } from "react";
import "./Process.css";

const Process = () => {
  useEffect(() => {
    // This ensures Facebook SDK parses the page plugin
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
  return (
    <div>
      <Headings title="Photo Gallery "  />

      <figure className="figure">
        <img
          src={images.galleryimg1}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">National Nutrition Month (Poshan Maah) 1st to 30th September 2024

Bharatiya Open Volunteer Association (OVA) committed to social service and community development, actively participated in the National Nutrition Month (Poshan Maah) celebrations at various Anganwadi centers in the Rajendranagar slum area, Kolhapur on 23rd September 2024 with a range of activities aimed at promoting awareness about nutrition, health, and hygiene, especially for pregnant women, lactating mothers, and children. The theme for this year was centered on “Nutritious Diets for Everyone,” reflecting the government's focus on improving the nutritional status of women and children under the Poshan Abhiyan (National Nutrition Mission).</figcaption>
        <img
          src={images.galleryimg2}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">National Nutrition Month (Poshan Maah) September 2024
        Bharatiya Open Volunteer Association (OVA) committed to social service and community development, actively participated in the National Nutrition Month (Poshan Maah) celebrations at various Anganwadi centers in the Rajendranagar slum area, Kolhapur on 23rd September 2024 with a range of activities aimed at promoting awareness about nutrition, health, and hygiene, especially for pregnant women, lactating mothers, and children. The theme for this year was centered on “Nutritious Diets for Everyone,” reflecting the government's focus on improving the nutritional status of women and children under the Poshan Abhiyan (National Nutrition Mission).</figcaption>
        <img
          src={images.galleryimg3}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">National Nutrition Month (Poshan Maah) September 2024
        Bharatiya Open Volunteer Association (OVA) committed to social service and community development, actively participated in the National Nutrition Month (Poshan Maah) celebrations at various Anganwadi centers in the Rajendranagar slum area, Kolhapur on 23rd September 2024 with a range of activities aimed at promoting awareness about nutrition, health, and hygiene, especially for pregnant women, lactating mothers, and children. The theme for this year was centered on “Nutritious Diets for Everyone,” reflecting the government's focus on improving the nutritional status of women and children under the Poshan Abhiyan (National Nutrition Mission).</figcaption>
        <img
          src={images.galleryimg4}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">National Nutrition Month (Poshan Maah) September 2024
        Bharatiya Open Volunteer Association (OVA) committed to social service and community development, actively participated in the National Nutrition Month (Poshan Maah) celebrations at various Anganwadi centers in the Rajendranagar slum area, Kolhapur on 23rd September 2024 with a range of activities aimed at promoting awareness about nutrition, health, and hygiene, especially for pregnant women, lactating mothers, and children. The theme for this year was centered on “Nutritious Diets for Everyone,” reflecting the government's focus on improving the nutritional status of women and children under the Poshan Abhiyan (National Nutrition Mission).</figcaption>
        <img
          src={images.galleryimg5}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">National Nutrition Month (Poshan Maah) September 2024
        Bharatiya Open Volunteer Association (OVA) committed to social service and community development, actively participated in the National Nutrition Month (Poshan Maah) celebrations at various Anganwadi centers in the Rajendranagar slum area, Kolhapur on 23rd September 2024 with a range of activities aimed at promoting awareness about nutrition, health, and hygiene, especially for pregnant women, lactating mothers, and children. The theme for this year was centered on “Nutritious Diets for Everyone,” reflecting the government's focus on improving the nutritional status of women and children under the Poshan Abhiyan (National Nutrition Mission).</figcaption>
        <img
          src={images.galleryimg6}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">National Nutrition Month (Poshan Maah) September 2024
        Bharatiya Open Volunteer Association (OVA) committed to social service and community development, actively participated in the National Nutrition Month (Poshan Maah) celebrations at various Anganwadi centers in the Rajendranagar slum area, Kolhapur on 23rd September 2024 with a range of activities aimed at promoting awareness about nutrition, health, and hygiene, especially for pregnant women, lactating mothers, and children. The theme for this year was centered on “Nutritious Diets for Everyone,” reflecting the government's focus on improving the nutritional status of women and children under the Poshan Abhiyan (National Nutrition Mission).</figcaption>
      </figure>
    </div>
  );
};

export default Process;
