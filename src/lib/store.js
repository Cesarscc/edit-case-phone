import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  currentRotation1: [0],
  currentRotation2: [0],
  currentZoom1: [100],
  currentZoom2: [100],
  currentBlur1: [0],
  currentBlur2: [0],
  currentBrightness1: [100],
  currentBrightness2: [100],
  currentContrast1: [100],
  currentContrast2: [100],
  currentGrayScale1: [0],
  currentGrayScale2: [0],
  currentSaturate1: [100],
  currentSaturate2: [100],
  currentSepia1: [0],
  currentSepia2: [0],
};

export const store = configureStore({
  reducer: (state = initialState, action) => {
    // Manejamos las acciones para actualizar el estado
    switch (action.type) {
      case "UPDATE_ROTATION_1":
        return {
          ...state,
          currentRotation1: action.payload,
        };
      case "UPDATE_ROTATION_2":
        return {
          ...state,
          currentRotation2: action.payload,
        };
      case "UPDATE_ZOOM_1":
        return {
          ...state,
          currentZoom1: action.payload,
        };
      case "UPDATE_ZOOM_2":
        return {
          ...state,
          currentZoom2: action.payload,
        };
      case "UPDATE_BLUR_1":
        return {
          ...state,
          currentBlur1: action.payload,
        };
      case "UPDATE_BLUR_2":
        return {
          ...state,
          currentBlur2: action.payload,
        };
      case "UPDATE_BRIGHTNESS_1":
        return {
          ...state,
          currentBrightness1: action.payload,
        };
      case "UPDATE_BRIGHTNESS_2":
        return {
          ...state,
          currentBrightness2: action.payload,
        };
      case "UPDATE_CONTRAST_1":
        return {
          ...state,
          currentContrast1: action.payload,
        };
      case "UPDATE_CONTRAST_2":
        return {
          ...state,
          currentContrast2: action.payload,
        };
      case "UPDATE_GRAYSCALE_1":
        return {
          ...state,
          currentGrayScale1: action.payload,
        };
      case "UPDATE_GRAYSCALE_2":
        return {
          ...state,
          currentGrayScale2: action.payload,
        };
      case "UPDATE_SATURATE_1":
        return {
          ...state,
          currentSaturate1: action.payload,
        };
      case "UPDATE_SATURATE_2":
        return {
          ...state,
          currentSaturate2: action.payload,
        };
      case "UPDATE_SEPIA_1":
        return {
          ...state,
          currentSepia1: action.payload,
        };
      case "UPDATE_SEPIA_2":
        return {
          ...state,
          currentSepia2: action.payload,
        };
      default:
        return state;
    }
  },
});
