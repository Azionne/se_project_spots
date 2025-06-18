import React, { useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    console.log("Image URL:", e.target.value);
  };
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weatherType })
      .then(() => {
        setName("");
        setWeatherType("");
        setImageUrl("");
        onClose();
      })
      .catch((err) => {
        console.error("Error adding item:", err);
      });
  };

  // Validation helpers
  const minNameLength = 4;
  const maxNameLength = 20;
  const nameTouched = name.length > 0;
  const nameInvalid =
    nameTouched && (name.length < minNameLength || name.length > maxNameLength);
  const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+[\w-]{2,}(\/\S*)?$/i;
  const imageUrlTouched = imageUrl.length > 0;
  const imageUrlInvalid = imageUrlTouched && !urlRegex.test(imageUrl);
  const weatherTypeTouched = weatherType.length > 0;

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formClassName="add-item-modal__modal-content"
      contentClassName="add-item-modal__content"
    >
      <label htmlFor="name" className="modal__label">
        Name <span style={{ color: "red" }}>*</span>
        <input
          required
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          minLength={minNameLength}
          maxLength={maxNameLength}
          onChange={handleNameChange}
          value={name}
        />
        {nameTouched && nameInvalid && (
          <span className="modal__required-message">
            Name must be {minNameLength}-{maxNameLength} characters
          </span>
        )}
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        Url <span style={{ color: "red" }}>*</span>
        <input
          required
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          minLength="1"
          onChange={handleImageUrlChange}
          value={imageUrl}
        />
        {imageUrlTouched && imageUrlInvalid && (
          <span className="modal__required-message">
            Please enter a valid URL
          </span>
        )}
      </label>
      <fieldset className="add-item-modal__radio-buttons">
        <legend className="modal__legend">
          Select the weather type: <span style={{ color: "red" }}>*</span>
        </legend>
        <label htmlFor="hot" className="modal__label model__label_type_radio">
          <input
            required
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
            value="hot"
            onChange={handleWeatherTypeChange}
            checked={weatherType === "hot"}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label model__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
            value="warm"
            onChange={handleWeatherTypeChange}
            checked={weatherType === "warm"}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label model__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="weatherType"
            value="cold"
            onChange={handleWeatherTypeChange}
            checked={weatherType === "cold"}
          />
          Cold
        </label>
      </fieldset>
      <button
        type="submit"
        className="add-item-modal__submit"
        disabled={!name || !imageUrl || !weatherType}
      >
        Add Garment
      </button>
    </ModalWithForm>
  );
}
