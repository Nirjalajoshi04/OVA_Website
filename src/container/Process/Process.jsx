import React from "react";

import { data } from "../../constants";
import { images } from "../../constants";
import { Headings } from "../../components";
import "./Process.css";

const Process = () => {
  return (
    <div>
      <Headings title="Photo Gallery "  />

      <figure className="figure">
        <img
          src={images.galleryimg1}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">An event at BOVA</figcaption>
        <img
          src={images.galleryimg2}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">An event at BOVA</figcaption>
        <img
          src={images.galleryimg3}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">An event at BOVA</figcaption>
        <img
          src={images.galleryimg4}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">An event at BOVA</figcaption>
        <img
          src={images.galleryimg5}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">An event at BOVA</figcaption>
        <img
          src={images.galleryimg6}
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">An event at BOVA</figcaption>
      </figure>
    </div>
  );
};

export default Process;
