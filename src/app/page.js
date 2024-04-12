"use client";
import ImageUpload from "@/components/ImageUpload";
import { useEffect, useState } from "react";
import Image from "next/image";
import IphoneX from "/public/images/iphoneX.png";
import IphoneXR from "/public/images/iphoneXR.png";

export default function Home() {
  const [value, setValue] = useState(1);
  const [valueModel, setValueModel] = useState("X");
  const [imageUrls, setImageUrls] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const [widthImage, setWidthImage] = useState(IphoneX.width / 4);
  const [heightImage, setHeightImage] = useState(IphoneX.height / 4);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeModel = (e) => {
    setValueModel(e.target.value);
  };

  useEffect(() => {
    const src = valueModel == "X" ? IphoneX : IphoneXR;
    setWidthImage(src.width / 4);
    setHeightImage(src.height / 4);
  }, [valueModel]);

  console.log(heightImage);

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
      <section className="flex justify-center my-10">
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
          ) : (
            <Image
              className="object-cover"
              priority
              src={IphoneXR}
              alt="iphone XR"
              width={IphoneXR.width / 4}
              height={IphoneXR.height / 4}
              quality={100}
            />
          )}

          <div
            className={`absolute -z-10 top-0 ${
              valueModel === "X"
                ? "rounded-t-[50px] rounded-b-[50px]"
                : "rounded-t-[40px] rounded-b-[40px]"
            } overflow-hidden h-full`}
          >
            {showImages &&
              imageUrls.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={`Uploaded Image ${index + 1}`}
                  className={`object-cover ${
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
