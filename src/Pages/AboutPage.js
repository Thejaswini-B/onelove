import React from "react";
import { ReactComponent as Brushing } from "../Components/SvgImage/Brushing.svg";
import { ReactComponent as Bathing } from "../Components/SvgImage/Bathing.svg";
import { ReactComponent as HairTrimming } from "../Components/SvgImage/HairTrimming.svg";
import { ReactComponent as NailClipping } from "../Components/SvgImage/NailClipping.svg";

import { ReactComponent as InHomeSitting } from "../Components/SvgImage/InHomeSitting.svg";
import { ReactComponent as DaywiseBoarding } from "../Components/SvgImage/DaywiseBoarding.svg";
import { ReactComponent as OvernightCare } from "../Components/SvgImage/OvernightCare.svg";

import { ReactComponent as Obedience } from "../Components/SvgImage/Obedience.svg";
import { ReactComponent as Playtime } from "../Components/SvgImage/Playtime.svg";
import { ReactComponent as EventsTraining } from "../Components/SvgImage/EventsTraining.svg";
import { ReactComponent as PetWalking } from "../Components/SvgImage/PetWalking.svg";

const AboutPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row first-container">
          {" "}
          <div className="left-container col-xs-12 col-md-6">
            <h1 className="head">
              Show Your Affection through Gentle Pet Grooming
            </h1>
            <p className="para">
              "Essential Pet Grooming: Brushing, nail care, ear cleaning, and
              dental care ensure your pet's well-being. Tailored baths promote
              healthy skin and control odors. Grooming fosters a strong bond for
              a happy, healthy, and vibrant pet appearance."
            </p>
          </div>
          <div className="right-container  col-xs-12 col-md-6">
            <div className="d-flex flex-row  pet-row ">
              <Brushing className="image-1" />
              <Bathing className="image-1" />
            </div>
            <div className="d-flex flex-row pet-row">
              <HairTrimming className="image-1" />
              <NailClipping className="image-1" />
            </div>
          </div>
        </div>
        <div className="main-line"></div>
        <div className="row d-flex flex-row second-cont">
          <div className=" col-xs-12 col-md-6 images-3 ">
            <center className="con">
              <InHomeSitting className="image-1 image-2" />
              <DaywiseBoarding className="image-1 image-2" />
              <OvernightCare className="image-1 image-2" />
            </center>
          </div>
          <div className="cont-2 col-xs-12 col-md-6">
            <h1 className="head">
              Where Love Meets Care: Dedicated Pet Boarding and Sitting
            </h1>
            <p className="para">
              "Enjoy dedicated pet care with tailored attention, cozy
              accommodations, and genuine companionship. Choose us for a
              heartfelt experience ensuring your furry friend stays happy,
              healthy, and cherished."
            </p>
          </div>
        </div>
        <div className="main-line"></div>
        <div className="row third-container">
          {" "}
          <div className="left-container col-xs-12 col-md-6">
            <h1 className="head">
              Pawsitive Playtime: Enriching Pet Training and Play Sessions
            </h1>
            <p className="para">
              "Pawsitive Playtime: Elevate your pet's well-being with dedicated
              care, personalized attention, and enriching training sessions.
              Choose a haven where love meets genuine companionship, ensuring
              your furry friend stays happy, healthy, and cherished."
            </p>
          </div>
          <div className="right-container  col-xs-12 col-md-6">
            <div className="d-flex flex-row  pet-row ">
              <Obedience className="image-1" />
              <Playtime className="image-1" />
            </div>
            <div className="d-flex flex-row pet-row">
              <EventsTraining className="image-1" />
              <PetWalking className="image-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-line"></div>
    </div>
  );
};

export default AboutPage;
