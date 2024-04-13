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
        : IphoneXS;
    setWidthImage(src.width / 4);
    setHeightImage(src.height / 4);
  }, [valueModel]);

  return (
    <main>
      <div className="grid grid-cols-3 items-center justify-items-center bg-[#fefec7]">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h2 className="font-extrabold font-mono text-center text-2xl">
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
        <div className="flex flex-col justify-center items-center space-y-5">
          <h2 className="font-extrabold font-mono text-center text-2xl">
            Elige el Modelo de Celular
          </h2>
          <select
            onChange={handleChangeModel}
            className="appearance-none text-center bg-[#f5cd0b] text-white font-semibold"
          >
            <option value={""} defaultValue disabled>
              Seleccionar Modelo
            </option>
            <option value={"X"}>iphone X</option>
            <option value={"XR"}>iphone XR</option>
            <option value={"XS"}>iphone XS</option>
            <option value={"XSMax"}>iphone XS Max</option>
            <option value={"11"}>iphone 11</option>
            <option value={"11pro"}>iphone 11 pro</option>
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
              alt="iphone X"
              width={IphoneX.width / 4}
              height={IphoneX.height / 4}
              quality={100}
            />
          ) : valueModel === "XR" ? (
            <Image
              className="object-cover"
              priority
              src={IphoneXR}
              alt="iphone XR"
              width={IphoneXR.width / 4}
              height={IphoneXR.height / 4}
              quality={100}
            />
          ) : valueModel === "XSMax" ? (
            <Image
              className="object-cover"
              priority
              src={IphoneXSMax}
              alt="iphone XS MAX"
              width={IphoneXSMax.width / 4}
              height={IphoneXSMax.height / 4}
              quality={100}
            />
          ) : valueModel === "11" ? (
            <Image
              className="object-cover"
              priority
              src={Iphone11}
              alt="iphone 11"
              width={Iphone11.width / 1.7}
              height={Iphone11.height / 1.7}
              quality={100}
            />
          ) : valueModel === "11pro" ? (
            <Image
              className="object-cover"
              priority
              src={Iphone11pro}
              alt="iphone 11 pro"
              width={Iphone11pro.width / 1.45}
              height={Iphone11pro.height / 1.45}
              quality={100}
            />
          ) : (
            <Image
              className="object-cover"
              priority
              src={IphoneXS}
              alt="iphone XS"
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
            } overflow-hidden h-full`}
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
                  height={heightImage / 2}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
