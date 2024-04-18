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
import Iphone13mini from "/public/images/iphone13mini.png";
import Iphone13 from "/public/images/iphone13.png";
import Iphone13pro from "/public/images/iphone13pro.png";
import Iphone13proMax from "/public/images/iphone13proMax.png";
import ProgressRotation from "../components/ProgressRotation";
import ProgressZoom from "@/components/ProgressZoom";
import ProgressBlur from "@/components/ProgressBlur";
import ProgressBrightness from "@/components/ProgressBrightness";
import ProgressContrast from "@/components/ProgressContrast";
import ProgressGrayScale from "@/components/ProgressGrayScale";
import ProgressSaturate from "@/components/ProgressSaturate";
import ProgressSepia from "@/components/ProgressSepia";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";

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
  const currentRotation1 = useAppSelector((state) => state.currentRotation1);
  const currentRotation2 = useAppSelector((state) => state.currentRotation2);

  const rotations = [currentRotation1, currentRotation2];

  const currentZoom1 = useAppSelector((state) => state.currentZoom1);
  const currentZoom2 = useAppSelector((state) => state.currentZoom2);

  const zooms = [currentZoom1, currentZoom2];

  const currentBlur1 = useAppSelector((state) => state.currentBlur1);
  const currentBlur2 = useAppSelector((state) => state.currentBlur2);

  const valueBlur = [currentBlur1, currentBlur2];

  const currentBrightness1 = useAppSelector(
    (state) => state.currentBrightness1
  );
  const currentBrightness2 = useAppSelector(
    (state) => state.currentBrightness2
  );

  const valueBrightness = [currentBrightness1, currentBrightness2];

  const currentContrast1 = useAppSelector((state) => state.currentContrast1);

  const currentContrast2 = useAppSelector((state) => state.currentContrast2);

  const valueContrast = [currentContrast1, currentContrast2];

  const currentGrayScale1 = useAppSelector((state) => state.currentGrayScale1);

  const currentGrayScale2 = useAppSelector((state) => state.currentGrayScale2);

  const valueGrayScale = [currentGrayScale1, currentGrayScale2];

  const currentSaturate1 = useAppSelector((state) => state.currentSaturate1);

  const currentSaturate2 = useAppSelector((state) => state.currentSaturate2);

  const valueSaturate = [currentSaturate1, currentSaturate2];

  const currentSepia1 = useAppSelector((state) => state.currentSepia1);

  const currentSepia2 = useAppSelector((state) => state.currentSepia2);

  const valueSepia = [currentSepia1, currentSepia2];

  const dispatch = useAppDispatch();

  const updateRotation1 = (newValue) => {
    dispatch({ type: "UPDATE_ROTATION_1", payload: newValue });
  };

  const updateRotation2 = (newValue) => {
    dispatch({ type: "UPDATE_ROTATION_2", payload: newValue });
  };

  const updateZoom1 = (newValue) => {
    dispatch({ type: "UPDATE_ZOOM_1", payload: newValue });
  };

  const updateZoom2 = (newValue) => {
    dispatch({ type: "UPDATE_ZOOM_2", payload: newValue });
  };

  const updateBlur1 = (newValue) => {
    dispatch({ type: "UPDATE_BLUR_1", payload: newValue });
  };

  const updateBlur2 = (newValue) => {
    dispatch({ type: "UPDATE_BLUR_2", payload: newValue });
  };

  const updateBrightness1 = (newValue) => {
    dispatch({ type: "UPDATE_BRIGHTNESS_1", payload: newValue });
  };
  const updateBrightness2 = (newValue) => {
    dispatch({ type: "UPDATE_BRIGHTNESS_2", payload: newValue });
  };
  const updateContrast1 = (newValue) => {
    dispatch({ type: "UPDATE_CONTRAST_1", payload: newValue });
  };
  const updateContrast2 = (newValue) => {
    dispatch({ type: "UPDATE_CONTRAST_2", payload: newValue });
  };
  const updateGrayScale1 = (newValue) => {
    dispatch({ type: "UPDATE_GRAYSCALE_1", payload: newValue });
  };
  const updateGrayScale2 = (newValue) => {
    dispatch({ type: "UPDATE_GRAYSCALE_2", payload: newValue });
  };

  const updateSaturate1 = (newValue) => {
    dispatch({ type: "UPDATE_SATURATE_1", payload: newValue });
  };
  const updateSaturate2 = (newValue) => {
    dispatch({ type: "UPDATE_SATURATE_2", payload: newValue });
  };

  const updateSepia1 = (newValue) => {
    dispatch({ type: "UPDATE_SEPIA_1", payload: newValue });
  };
  const updateSepia2 = (newValue) => {
    dispatch({ type: "UPDATE_SEPIA_2", payload: newValue });
  };

  const [selectedImage, setSelectedImage] = useState("1");
  const [valueX, setValueX] = useState([0, 0]);
  const [valueY, setValueY] = useState([0, 0]);

  const [color, setColor] = useColor("#561ecb");
  const [resetValues, setResetValues] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

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
        : valueModel == "13mini"
        ? Iphone13mini
        : valueModel == "13pro"
        ? Iphone13pro
        : valueModel == "13proMax"
        ? Iphone13proMax
        : IphoneXS;
    setWidthImage(src.width / 4);
    setHeightImage(src.height / 4);
  }, [valueModel]);

  useEffect(() => {
    setValueX([0, 0]);
    setValueY([0, 0]);
  }, [value]);

  const handleInputChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const handleXRigth = (selectedImage) => {
    if (selectedImage == 1) {
      setValueX([valueX[0] + 1, valueX[1]]);
    } else {
      setValueX([valueX[0], valueX[1] + 1]);
    }
  };

  const handleXLeft = (selectedImage) => {
    if (selectedImage == 1) {
      setValueX([valueX[0] - 1, valueX[1]]);
    } else {
      setValueX([valueX[0], valueX[1] - 1]);
    }
  };

  const handleYUp = (selectedImage) => {
    if (selectedImage == 1) {
      setValueY([valueY[0] - 1, valueY[1]]);
    } else {
      setValueY([valueY[0], valueY[1] - 1]);
    }
  };

  const handleYDown = (selectedImage) => {
    if (selectedImage == 1) {
      setValueY([valueY[0] + 1, valueY[1]]);
    } else {
      setValueY([valueY[0], valueY[1] + 1]);
    }
  };

  const handleResetRotation = () => {
    setResetValues([
      !resetValues[0],
      ...resetValues.slice(1, resetValues.length),
    ]);
  };

  const handleResetZoom = () => {
    setResetValues([
      resetValues[0],
      !resetValues[1],
      ...resetValues.slice(2, resetValues.length),
    ]);
  };

  const handleResetBlur = () => {
    setResetValues([
      ...resetValues.slice(0, 2),
      !resetValues[2],
      ...resetValues.slice(3, resetValues.length),
    ]);
  };

  const handleResetBrightness = () => {
    setResetValues([
      ...resetValues.slice(0, 3),
      !resetValues[3],
      ...resetValues.slice(4, resetValues.length),
    ]);
  };

  const handleResetContrast = () => {
    setResetValues([
      ...resetValues.slice(0, 4),
      !resetValues[4],
      ...resetValues.slice(5, resetValues.length),
    ]);
  };

  const handleResetGrayScale = () => {
    setResetValues([
      ...resetValues.slice(0, 5),
      !resetValues[5],
      ...resetValues.slice(6, resetValues.length),
    ]);
  };

  const handleResetSaturate = () => {
    setResetValues([
      ...resetValues.slice(0, 6),
      !resetValues[6],
      ...resetValues.slice(7, resetValues.length),
    ]);
  };

  const handleResetSepia = () => {
    setResetValues([...resetValues.slice(0, 7), !resetValues[7]]);
  };

  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center bg-[#fefec7]">
        <div className="flex flex-row sm:flex-col justify-center items-center md:space-y-5 mt-2 sm:mt-0">
          <h2 className="font-extrabold font-mono text-center text-sm sm:text-lg md:text-2xl text-black">
            Elige la cantidad de imágenes
          </h2>
          <select
            onChange={handleChange}
            className="appearance-none text-center bg-[#f5bb0b] text-white font-semibold select select-warning w-1/3 sm:w-full max-w-xs ml-3 sm:ml-0"
          >
            <option value={""} defaultValue disabled>
              Seleccionar Cantidad
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
        <div className="flex flex-row sm:flex-col justify-center items-center md:space-y-5 mt-4 md:mt-5 lg:mt-0">
          <h2 className="font-extrabold font-mono text-center text-sm sm:text-lg md:text-2xl text-black">
            Elige el Modelo de Celular
          </h2>
          <select
            onChange={handleChangeModel}
            className="appearance-none text-center bg-[#f5bb0b] text-white font-semibold select select-warning w-1/3 sm:w-full max-w-xs ml-3 sm:ml-0 text-xs md:text-base"
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
            <option value={"13mini"}>iPhone 13 mini</option>
            <option value={"13"}>iPhone 13</option>
            <option value={"13pro"}>iPhone 13 pro</option>
            <option value={"13proMax"}>iPhone 13 pro Max</option>
          </select>
        </div>
        <div className="w-full">
          <ImageUpload
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
            setShowImages={setShowImages}
            showImages={showImages}
            cantidad={value}
          />
        </div>
      </div>
      <section className="flex flex-col md:flex-row justify-center items-center py-5 md:py-10">
        <div
          style={{ backgroundColor: `${color.hex}` }}
          className={`relative z-10 h-full order-2 md:order-1 mt-10 md:mt-0 ${
            valueModel === "X" || valueModel === "XR"
              ? "rounded-t-[35px] rounded-b-[35px]"
              : valueModel === "XSMax"
              ? "rounded-t-[30px] rounded-b-[30px]"
              : valueModel === "13"
              ? "rounded-t-[50px] rounded-b-[50px]"
              : valueModel === "13pro"
              ? "rounded-t-[46px] rounded-b-[46px]"
              : valueModel === "13proMax"
              ? "rounded-t-[49px] rounded-b-[49px]"
              : "rounded-t-[40px] rounded-b-[40px]"
          }`}
        >
          {valueModel === "X" ? (
            <Image
              className="object-cover "
              priority
              src={IphoneX}
              alt="iPhone X"
              width={IphoneX.width / 4}
              height={IphoneX.height / 4}
              quality={100}
            />
          ) : valueModel === "XR" ? (
            <Image
              className="object-cover "
              priority
              src={IphoneXR}
              alt="iPhone XR"
              width={IphoneXR.width / 4}
              height={IphoneXR.height / 4}
              quality={100}
            />
          ) : valueModel === "XSMax" ? (
            <Image
              className="object-cover "
              priority
              src={IphoneXSMax}
              alt="iPhone XS MAX"
              width={IphoneXSMax.width / 4}
              height={IphoneXSMax.height / 4}
              quality={100}
            />
          ) : valueModel === "11" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone11}
              alt="iPhone 11"
              width={Iphone11.width / 1.7}
              height={Iphone11.height / 1.7}
              quality={100}
            />
          ) : valueModel === "11pro" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone11pro}
              alt="iPhone 11 pro"
              width={Iphone11pro.width / 1.45}
              height={Iphone11pro.height / 1.45}
              quality={100}
            />
          ) : valueModel === "11proMax" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone11proMax}
              alt="iPhone 11 pro Max"
              width={Iphone11proMax.width / 2}
              height={Iphone11proMax.height / 2}
              quality={100}
            />
          ) : valueModel === "SE2da" ? (
            <Image
              className="object-cover "
              priority
              src={IphoneSEda}
              alt="iPhone SE (2da generación)"
              width={IphoneSEda.width / 1.3}
              height={IphoneSEda.height / 1.3}
              quality={100}
            />
          ) : valueModel === "12mini" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone12mini}
              alt="iPhone 12 mini"
              width={Iphone12mini.width}
              height={Iphone12mini.height}
              quality={100}
            />
          ) : valueModel === "12" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone12}
              alt="iPhone 12"
              width={Iphone12.width / 1.9}
              height={Iphone12.height / 1.9}
              quality={100}
            />
          ) : valueModel === "12pro" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone12pro}
              alt="iPhone 12 pro"
              width={Iphone12pro.width / 1.9}
              height={Iphone12pro.height / 1.9}
              quality={100}
            />
          ) : valueModel === "12proMax" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone12proMax}
              alt="iPhone 12 pro Max"
              width={Iphone12proMax.width / 1.5}
              height={Iphone12proMax.height / 1.5}
              quality={100}
            />
          ) : valueModel === "13mini" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone13mini}
              alt="iPhone 13 mini"
              width={Iphone13mini.width * 1.4}
              height={Iphone13mini.height * 1.4}
              quality={100}
            />
          ) : valueModel === "13" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone13}
              alt="iPhone 13"
              width={Iphone13.width}
              height={Iphone13.height}
              quality={100}
            />
          ) : valueModel === "13pro" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone13pro}
              alt="iPhone 13 pro"
              width={Iphone13pro.width}
              height={Iphone13pro.height}
              quality={100}
            />
          ) : valueModel === "13proMax" ? (
            <Image
              className="object-cover "
              priority
              src={Iphone13proMax}
              alt="iPhone 13 pro Max"
              width={Iphone13proMax.width / 1.3}
              height={Iphone13proMax.height / 1.3}
              quality={100}
            />
          ) : (
            <Image
              className="object-cover "
              priority
              src={IphoneXS}
              alt="iPhone XS"
              width={IphoneXS.width / 4}
              height={IphoneXS.height / 4}
              quality={100}
            />
          )}

          <div
            className={`absolute -z-30 top-0 ${
              valueModel === "X" || valueModel === "XR"
                ? "rounded-t-[35px] rounded-b-[35px]"
                : valueModel === "XSMax"
                ? "rounded-t-[30px] rounded-b-[30px]"
                : valueModel === "13"
                ? "rounded-t-[50px] rounded-b-[50px]"
                : valueModel === "13pro"
                ? "rounded-t-[46px] rounded-b-[46px]"
                : valueModel === "13proMax"
                ? "rounded-t-[49px] rounded-b-[49px]"
                : "rounded-t-[40px] rounded-b-[40px]"
            } overflow-hidden h-full w-full `}
          >
            {showImages &&
              imageUrls.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  style={{
                    color: "transparent",
                    top: `${index * 50}%`,
                    rotate: `${rotations[index]}deg`,
                    transform: `translate(${valueX[index]}%, ${
                      valueY[index]
                    }%) scale(${zooms[index] / 100})`,
                    transition: "transform 0.1s ease",
                    zIndex: `${
                      (index + parseInt(selectedImage)) * (-1) ** selectedImage
                    }`,
                    filter: `blur(${valueBlur[index]}px) brightness(${valueBrightness[index]}%) contrast(${valueContrast[index]}%) grayscale(${valueGrayScale[index]}%) saturate(${valueSaturate[index]}%) sepia(${valueSepia[index]}%)`,
                  }}
                  alt={`Uploaded Image ${index + 1}`}
                  className={`absolute cursor-pointer object-cover w-full ${
                    value === 1 ? "h-full" : "h-[50%]"
                  }`}
                  width={widthImage}
                  height={heightImage}
                />
              ))}
          </div>
        </div>
        <div className="w-full md:w-[65%] md:mx-5 lg:mx-0 lg:pl-24 order-1 md:order-2">
          <div className="flex justify-center">
            <fieldset className="border-4 pl-5 md:p-5 mb-4 md:mb-10 w-3/4 sm:w-1/2">
              <legend className="text-sm md:text-base">
                Seleccione la imagen
              </legend>
              <div>
                <input
                  type="radio"
                  id="imagen1"
                  name="drone"
                  value="1"
                  checked={selectedImage === "1"}
                  onChange={handleInputChange}
                />
                <label className="text-xs md:text-base" htmlFor="imagen1">
                  {" "}
                  Imagen 1
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="imagen2"
                  name="drone"
                  value="2"
                  checked={selectedImage === "2"}
                  onChange={handleInputChange}
                />
                <label className="text-xs md:text-base" htmlFor="imagen2">
                  {" "}
                  Imagen 2
                </label>
              </div>
              <p className="text-xs md:text-base">
                Imagen seleccionada: {selectedImage}
              </p>
            </fieldset>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 place-items-center md:place-items-stretch gap-2 sm:gap-4 lg:gap-10 mx-1 sm:mx-2">
            <div className="flex flex-col items-center justify-center border-[1px] border-black pb-5 sm:pb-10 w-full sm:w-[85%] md:w-auto">
              <div className="flex justify-evenly w-full">
                <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black">
                  Rotation
                </p>
                <p
                  className="text-xl cursor-pointer"
                  onClick={handleResetRotation}
                >
                  ↺
                </p>
              </div>
              <ProgressRotation
                resetValue={resetValues[0]}
                currentRotation={
                  selectedImage == "1" ? currentRotation1 : currentRotation2
                }
                updateRotation={
                  selectedImage == "1" ? updateRotation1 : updateRotation2
                }
              />
            </div>
            <div className="flex flex-col items-center justify-center border-[1px] border-black pb-5 sm:pb-10 w-full sm:w-[85%] md:w-auto ">
              <div className="flex justify-evenly w-full">
                <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black">
                  Zoom
                </p>
                <p className="text-xl cursor-pointer" onClick={handleResetZoom}>
                  ↺
                </p>
              </div>
              <ProgressZoom
                resetValue={resetValues[1]}
                currentZoom={selectedImage == "1" ? currentZoom1 : currentZoom2}
                updateZoom={selectedImage == "1" ? updateZoom1 : updateZoom2}
              />
            </div>
            <div className="flex flex-col items-center justify-center border-[1px] border-black pb-5 w-full sm:w-[85%] md:w-auto h-fit">
              <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black">
                Move
              </p>
              <div className="flex justify-center gap-3 lg:gap-5 w-full pt-1 md:pt-5">
                <button
                  className="flex justify-center items-center w-5 xl:w-8 2xl:w-10 h-5 xl:h-8 2xl:h-10 bg-slate-400 rounded-full text-white text-lg lg:text-2xl 2xl:text-3xl hover:bg-slate-300 hover:text-black hover:transition-all hover:delay-[90ms]"
                  onClick={() => handleYUp(selectedImage)}
                >
                  ↑
                </button>
                <button
                  className="flex justify-center items-center w-5 xl:w-8 2xl:w-10 h-5 xl:h-8 2xl:h-10 bg-slate-400 rounded-full text-white text-lg lg:text-2xl 2xl:text-3xl hover:bg-slate-300 hover:text-black hover:transition-all hover:delay-[90ms]"
                  onClick={() => handleYDown(selectedImage)}
                >
                  ↓
                </button>
                <button
                  className="flex justify-center items-center w-5 xl:w-8 2xl:w-10 h-5 xl:h-8 2xl:h-10 bg-slate-400 rounded-full text-white text-lg lg:text-2xl 2xl:text-3xl hover:bg-slate-300 hover:text-black hover:transition-all hover:delay-[90ms]"
                  onClick={() => handleXRigth(selectedImage)}
                >
                  →
                </button>
                <button
                  className="flex justify-center items-center w-5 xl:w-8 2xl:w-10 h-5 xl:h-8 2xl:h-10 bg-slate-400 rounded-full text-white text-lg lg:text-2xl 2xl:text-3xl hover:bg-slate-300 hover:text-black hover:transition-all hover:delay-[90ms]"
                  onClick={() => handleXLeft(selectedImage)}
                >
                  ←
                </button>
                <button
                  className="w-14 h-5 sm:w-14 sm:h-7 lg:w-16 xl:w-20 xl:h-8 2xl:w-24 2xl:h-10 bg-slate-400 rounded-xl text-white text-sm lg:text-base xl:text-lg 2xl:text-2xl hover:bg-slate-300 hover:text-black hover:transition-all hover:delay-[90ms] font-semibold"
                  onClick={() => {
                    setValueX([0, 0]);
                    setValueY([0, 0]);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="w-full">
              <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black text-center">
                Background Color
              </p>
              <ColorPicker height={60} color={color} onChange={setColor} />
            </div>
            <div className="w-full flex flex-col items-center md:items-stretch">
              <div className="flex flex-col items-center justify-center border-[1px] border-black w-full sm:w-[85%] md:w-auto ">
                <div className="flex justify-evenly w-full">
                  <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black">
                    Blur
                  </p>
                  <p
                    className="text-xl cursor-pointer"
                    onClick={handleResetBlur}
                  >
                    ↺
                  </p>
                </div>
                <ProgressBlur
                  resetValue={resetValues[2]}
                  currentBlur={
                    selectedImage == "1" ? currentBlur1 : currentBlur2
                  }
                  updateBlur={selectedImage == "1" ? updateBlur1 : updateBlur2}
                />
              </div>
              <div className="flex flex-col items-center justify-center border-[1px] border-black w-full sm:w-[85%] md:w-auto ">
                <div className="flex justify-evenly w-full">
                  <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black">
                    Brightness
                  </p>
                  <p
                    className="text-xl cursor-pointer"
                    onClick={handleResetBrightness}
                  >
                    ↺
                  </p>
                </div>
                <ProgressBrightness
                  resetValue={resetValues[3]}
                  currentBrightness={
                    selectedImage == "1"
                      ? currentBrightness1
                      : currentBrightness2
                  }
                  updateBrightness={
                    selectedImage == "1" ? updateBrightness1 : updateBrightness2
                  }
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center md:items-stretch">
              <div className="flex flex-col items-center justify-center border-[1px] border-black w-full sm:w-[85%] md:w-auto ">
                <div className="flex justify-evenly w-full">
                  <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black">
                    Contrast
                  </p>
                  <p
                    className="text-xl cursor-pointer"
                    onClick={handleResetContrast}
                  >
                    ↺
                  </p>
                </div>
                <ProgressContrast
                  resetValue={resetValues[4]}
                  currentContrast={
                    selectedImage == "1" ? currentContrast1 : currentContrast2
                  }
                  updateContrast={
                    selectedImage == "1" ? updateContrast1 : updateContrast2
                  }
                />
              </div>
              <div className="flex flex-col items-center justify-center border-[1px] border-black w-full sm:w-[85%] md:w-auto ">
                <div className="flex justify-evenly w-full">
                  <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black">
                    Gray Scale
                  </p>
                  <p
                    className="text-xl cursor-pointer"
                    onClick={handleResetGrayScale}
                  >
                    ↺
                  </p>
                </div>
                <ProgressGrayScale
                  resetValue={resetValues[5]}
                  currentGrayScale={
                    selectedImage == "1" ? currentGrayScale1 : currentGrayScale2
                  }
                  updateGrayScale={
                    selectedImage == "1" ? updateGrayScale1 : updateGrayScale2
                  }
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center md:items-stretch">
              <div className="flex flex-col items-center justify-center border-[1px] border-black w-full sm:w-[85%] md:w-auto ">
                <div className="flex justify-evenly w-full">
                  <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black">
                    Saturate
                  </p>
                  <p
                    className="text-xl cursor-pointer"
                    onClick={handleResetSaturate}
                  >
                    ↺
                  </p>
                </div>
                <ProgressSaturate
                  resetValue={resetValues[6]}
                  currentSaturate={
                    selectedImage == "1" ? currentSaturate1 : currentSaturate2
                  }
                  updateSaturate={
                    selectedImage == "1" ? updateSaturate1 : updateSaturate2
                  }
                />
              </div>
              <div className="flex flex-col items-center justify-center border-[1px] border-black w-full sm:w-[85%] md:w-auto ">
                <div className="flex justify-evenly w-full">
                  <p className="font-semibold text-lg sm:text-2xl tracking-wider text-black">
                    Sepia
                  </p>
                  <p
                    className="text-xl cursor-pointer"
                    onClick={handleResetSepia}
                  >
                    ↺
                  </p>
                </div>
                <ProgressSepia
                  resetValue={resetValues[7]}
                  currentSepia={
                    selectedImage == "1" ? currentSepia1 : currentSepia2
                  }
                  updateSepia={
                    selectedImage == "1" ? updateSepia1 : updateSepia2
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
