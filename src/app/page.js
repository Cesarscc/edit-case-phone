"use client";
import ImageUpload from "@/components/ImageUpload";
import { useEffect, useState } from "react";
import Image from "next/image";
import IphoneX from "/public/images/iphoneX.png";
import IphoneXR from "/public/images/iphoneXR.png";
import IphoneXS from "/public/images/iphoneXS.png";
import IphoneXSMax from "/public/images/iphoneXSMax.png";
import Iphone11 from "/public/images/iphone11.png";
import Iphone11pro from "/public/images/iphone11pro.png";
import Iphone11proMax from "/public/images/iphone11proMax.png";
import IphoneSEda from "/public/images/iphoneSEda.png";
import Iphone12mini from "/public/images/iphone12mini.png";
import Iphone12 from "/public/images/iphone12.png";
import Iphone12pro from "/public/images/iphone12pro.png";
import Iphone12proMax from "/public/images/iphone12proMax.png";

export default function Home() {
  const [value, setValue] = useState(1);
  const [valueModel, setValueModel] = useState("X");
  const [imageUrls, setImageUrls] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const [widthImage, setWidthImage] = useState(IphoneX.width / 4);
  const [heightImage, setHeightImage] = useState(IphoneX.height / 4);

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const handleChangeModel = (e) => {
    setValueModel(e.target.value);
  };

  useEffect(() => {
    const src =
      valueModel == "X"
        ? IphoneX
        : valueModel == "XR"
        ? IphoneXR
        : valueModel == "XSMax"
        ? IphoneXSMax
        : valueModel == "11"
        ? Iphone11
        : valueModel == "11pro"
        ? Iphone11pro
        : valueModel == "11proMax"
        ? Iphone11proMax
        : valueModel == "SE2da"
        ? IphoneSEda
        : valueModel == "12mini"
        ? Iphone12mini
        : valueModel == "12"
        ? Iphone12
        : valueModel == "12pro"
        ? Iphone12pro
        : valueModel == "12proMax"
        ? Iphone12proMax
        : IphoneXS;
    setWidthImage(src.width / 4);
    setHeightImage(src.height / 4);
  }, [valueModel]);

  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center bg-[#fefec7]">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h2 className="font-extrabold font-mono text-center text-lg md:text-2xl">
            Elige la cantidad de imágenes
          </h2>
          <select
            onChange={handleChange}
            className="appearance-none text-center bg-[#f5cd0b] text-white font-semibold"
          >
            <option value={""} defaultValue disabled>
              Seleccionar Cantidad
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 mt-10 lg:mt-0">
          <h2 className="font-extrabold font-mono text-center text-lg md:text-2xl">
            Elige el Modelo de Celular
          </h2>
          <select
            onChange={handleChangeModel}
            className="appearance-none text-center bg-[#f5cd0b] text-white font-semibold"
          >
            <option value={""} defaultValue disabled>
              Seleccionar Modelo
            </option>
            <option value={"X"}>iPhone X</option>
            <option value={"XR"}>iPhone XR</option>
            <option value={"XS"}>iPhone XS</option>
            <option value={"XSMax"}>iPhone XS Max</option>
            <option value={"11"}>iPhone 11</option>
            <option value={"11pro"}>iPhone 11 pro</option>
            <option value={"11proMax"}>iPhone 11 pro Max</option>
            <option value={"SE2da"}>iPhone SE (2da generación)</option>
            <option value={"12mini"}>iPhone 12 mini</option>
            <option value={"12"}>iPhone 12</option>
            <option value={"12pro"}>iPhone 12 pro</option>
            <option value={"12proMax"}>iPhone 12 pro Max</option>
          </select>
        </div>
        <div className="w-full">
          <ImageUpload
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
            setShowImages={setShowImages}
            showImages={showImages}
            cantidad={value}
            valueModel={valueModel}
          />
        </div>
      </div>
      <section className="flex justify-center py-11">
        <div className="relative">
          {valueModel === "X" ? (
            <Image
              className="object-cover"
              priority
              src={IphoneX}
              alt="iPhone X"
              width={IphoneX.width / 4}
              height={IphoneX.height / 4}
              quality={100}
            />
          ) : valueModel === "XR" ? (
            <Image
              className="object-cover"
              priority
              src={IphoneXR}
              alt="iPhone XR"
              width={IphoneXR.width / 4}
              height={IphoneXR.height / 4}
              quality={100}
            />
          ) : valueModel === "XSMax" ? (
            <Image
              className="object-cover"
              priority
              src={IphoneXSMax}
              alt="iPhone XS MAX"
              width={IphoneXSMax.width / 4}
              height={IphoneXSMax.height / 4}
              quality={100}
            />
          ) : valueModel === "11" ? (
            <Image
              className="object-cover"
              priority
              src={Iphone11}
              alt="iPhone 11"
              width={Iphone11.width / 1.7}
              height={Iphone11.height / 1.7}
              quality={100}
            />
          ) : valueModel === "11pro" ? (
            <Image
              className="object-cover"
              priority
              src={Iphone11pro}
              alt="iPhone 11 pro"
              width={Iphone11pro.width / 1.45}
              height={Iphone11pro.height / 1.45}
              quality={100}
            />
          ) : valueModel === "11proMax" ? (
            <Image
              className="object-cover"
              priority
              src={Iphone11proMax}
              alt="iPhone 11 pro Max"
              width={Iphone11proMax.width / 2}
              height={Iphone11proMax.height / 2}
              quality={100}
            />
          ) : valueModel === "SE2da" ? (
            <Image
              className="object-cover"
              priority
              src={IphoneSEda}
              alt="iPhone SE (2da generación)"
              width={IphoneSEda.width / 1.3}
              height={IphoneSEda.height / 1.3}
              quality={100}
            />
          ) : valueModel === "12mini" ? (
            <Image
              className="object-cover"
              priority
              src={Iphone12mini}
              alt="iPhone 12 mini"
              width={Iphone12mini.width}
              height={Iphone12mini.height}
              quality={100}
            />
          ) : valueModel === "12" ? (
            <Image
              className="object-cover"
              priority
              src={Iphone12}
              alt="iPhone 12"
              width={Iphone12.width / 1.9}
              height={Iphone12.height / 1.9}
              quality={100}
            />
          ) : valueModel === "12pro" ? (
            <Image
              className="object-cover"
              priority
              src={Iphone12pro}
              alt="iPhone 12 pro"
              width={Iphone12pro.width / 1.9}
              height={Iphone12pro.height / 1.9}
              quality={100}
            />
          ) : valueModel === "12proMax" ? (
            <Image
              className="object-cover"
              priority
              src={Iphone12proMax}
              alt="iPhone 12 pro Max"
              width={Iphone12proMax.width / 1.5}
              height={Iphone12proMax.height / 1.5}
              quality={100}
            />
          ) : (
            <Image
              className="object-cover"
              priority
              src={IphoneXS}
              alt="iPhone XS"
              width={IphoneXS.width / 4}
              height={IphoneXS.height / 4}
              quality={100}
            />
          )}

          <div
            className={`absolute -z-10 top-0 ${
              valueModel === "X" || valueModel === "XR"
                ? "rounded-t-[35px] rounded-b-[35px]"
                : valueModel === "XSMax"
                ? "rounded-t-[30px] rounded-b-[30px]"
                : "rounded-t-[40px] rounded-b-[40px]"
            } overflow-hidden h-full w-full`}
          >
            {showImages &&
              imageUrls.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={`Uploaded Image ${index + 1}`}
                  className={`object-cover w-full ${
                    value === 1 ? "h-full" : `h-[50%]`
                  }`}
                  width={widthImage}
                  height={heightImage}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
