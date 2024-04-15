// ImageUpload.js
"use client";
import { useEffect, useRef, useState } from "react";

export default function ImageUpload({
  imageUrls,
  setImageUrls,
  setShowImages,
  showImages,
  cantidad,
  valueModel,
}) {
  const fileInputRef1 = useRef(null); // Referencia para el primer input
  const fileInputRef2 = useRef(null); // Referencia para el segundo input
  const fileInputRef3 = useRef(null); // Referencia para el segundo input

  const [reset, setReset] = useState(false); // Para resetear los inputs y borrar las imágenes

  useEffect(() => {
    setImageUrls([]);
    setShowImages(false);
    if (fileInputRef1.current) {
      fileInputRef1.current.value = ""; // Limpiar el input de tipo file
    }
    if (fileInputRef2.current) {
      fileInputRef2.current.value = ""; // Limpiar el input de tipo file
    }
    if (fileInputRef3.current) {
      fileInputRef3.current.value = ""; // Limpiar el input de tipo file
    }
  }, [cantidad, setImageUrls, setShowImages, reset]);

  useEffect(() => {
    if (fileInputRef3.current && fileInputRef3.current.value != "") {
      setShowImages(true);
    } else if (
      fileInputRef1.current &&
      fileInputRef1.current.value != "" &&
      fileInputRef2.current &&
      fileInputRef2.current.value != ""
    ) {
      setShowImages(true);
    }
  }, [setShowImages, imageUrls]);

  const handleImageUpload = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const newImageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImageUrls((prevImageUrls) => [...prevImageUrls, ...newImageUrls]);
    }
  };

  const handleShowImages = () => {
    // Lógica para mostrar las imágenes
    setShowImages(!showImages);
  };

  return (
    <div className="flex-col py-10">
      {cantidad > 1 ? (
        <div className="flex flex-col justify-center items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 text-[12px] xl:text-[16px] file-input file-input-bordered file-input-warning w-full max-w-xs"
            multiple={false} // Esto permite seleccionar múltiples archivos
            ref={fileInputRef1}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 text-[12px] xl:text-[16px] file-input file-input-bordered file-input-warning w-full max-w-xs"
            multiple={false} // Esto permite seleccionar múltiples archivos
            ref={fileInputRef2}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 text-[12px] xl:text-[16px] file-input file-input-bordered file-input-warning w-full max-w-xs"
            multiple={false} // Esto permite seleccionar múltiples archivos
            ref={fileInputRef3}
          />
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-5 mt-8 lg:mt-0 space-y-5 lg:space-y-0">
        {/*  <button
          onClick={handleShowImages}
          disabled={imageUrls.length === 0}
          className="bg-[#784a0f] text-white w-[250px] py-1 rounded-md disabled:bg-[#f5cd0b] disabled:cursor-not-allowed font-semibold"
        >
          {!showImages ? "Ver en Case" : "Dejar de ver"}
        </button> */}
        <button
          onClick={() => {
            setReset(!reset);
          }}
          disabled={imageUrls.length === 0}
          className="bg-[#784a0f] text-white w-[250px] py-1 rounded-md disabled:bg-[#f5cd0b] disabled:cursor-not-allowed font-semibold"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
