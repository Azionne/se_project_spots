import "../pages/index.css";
import {
  enableValidation,
  settings,
  resetValidation,
  disableButton,
} from "../scripts/validation.js";

import Api from "../utils/Api.js";

import { setButtonText, setDeleteButtonText } from "../utils/helpers.js";

const profileAvatar = document.querySelector(".profile__avatar");
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "b153d9fc-c51e-4857-889a-c4e4f22bc733",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([cards, userInfo]) => {
    document.querySelector(".profile__avatar").src = userInfo.avatar;
    profileName.textContent = userInfo.name;
    profileDescription.textContent = userInfo.about;
    console.log("userInfo:", userInfo);

    cards.forEach((item) => {
      const cardElement = getCardElement(item);
      cardsList.append(cardElement);
    });
  })
  .catch(console.error);

// Profile elements
const profileEditBtn = document.querySelector(".profile__edit-btn");
const cardModalBtn = document.querySelector(".profile__add-btn");
const avatarAddBtn = document.querySelector(".profile__avatar-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Avatar modal/form elements
const avatarModal = document.querySelector("#avatar-modal");
const avatarForm = avatarModal.querySelector(".modal__form-avatar");
const avatarModalSubmitButton = avatarModal.querySelector(".modal__submit-btn");
const avatarModalClosedBtn = avatarModal.querySelector(".modal__close-btn");

const avatarLinkInput = avatarModal.querySelector("#profile-avatar-input");

// Modal elements
const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__form");
const closeModalBtn = editModal.querySelector(".modal__close-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

// Delete Card modal elements
const deleteModal = document.querySelector("#delete-modal");
const deleteModalForm = document.querySelector("#delete-form");
const deleteCloseBtn = document.querySelector(".modal__close-btn-delete");
const cancelBtn = document.querySelector(".modal__cancel-button");

let selectedCard = null;
let selectedCardId = null;

// Add Card modal elements
const cardModal = document.querySelector("#add-card-modal");
const cardForm = cardModal.querySelector(".modal__form");
const cardSubmitButton = cardModal.querySelector(".modal__submit-btn");
const cardModalClosedBtn = cardModal.querySelector(".modal__close-btn");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
const previewModalCloseBtn = previewModal.querySelector(
  ".modal__close-btn_type_preview"
);

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

// Card template function
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");

  // Check if the card is liked and set the active class
  if (data.isLiked) {
    cardLikeBtn.classList.add("card__like-btn_liked");
  }

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  cardLikeBtn.addEventListener("click", (evt) => handleLike(evt, data._id));
  cardDeleteBtn.addEventListener("click", () => {
    console.log("data", data);
    handleDeleteCard(cardElement, data._id);
    selectedCardId = data._id;
  });
  cardImageEl.addEventListener("click", () => handleImageClick(data));

  return cardElement;
}

// Open and close edit modal functions
function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalEsc);
  modal.addEventListener("mousedown", closeModalOverlay);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalEsc);
  modal.removeEventListener("mousedown", closeModalOverlay);
}

function closeModalOverlay(evt) {
  if (evt.target.classList.contains("modal")) {
    closeModal(evt.target);
  }
}

function closeModalEsc(evt) {
  if (evt.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closeModal(modal);
  }
}

// Open and close delete modal functions
function handleDeleteCard(cardElement, cardId) {
  selectedCard = cardElement;
  selectedCardId = cardId;
  openModal(deleteModal);
}

function handleLike(evt, id) {
  const isLiked = evt.target.classList.contains("card__like-btn_liked");

  //Like status api

  api
    .changeLikeStatus(id, !isLiked)
    .then((data) => {
      evt.target.classList.toggle("card__like-btn_liked", data.isLiked);
    })
    .catch(console.error);
}

function handleImageClick(data) {
  openModal(previewModal);
  previewModalImageEl.src = data.link;
  previewModalImageEl.alt = data.name;
  previewModalCaptionEl.textContent = data.name;
  openModal(previewModal);
}

// Form submit event
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  const cardSubmitButton = evt.submitter;
  setButtonText(cardSubmitButton, true, "Save", "Saving...");
  api
    .editUserInfo({
      name: editModalNameInput.value,
      about: editModalDescriptionInput.value,
    })
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(editModal);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(cardSubmitButton, false, "Save", "Saving...");
    });
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };
  const cardModalSubmitButton = evt.submitter;
  setButtonText(cardModalSubmitButton, true, "Save", "Saving...");
  api
    .postCard(inputValues)
    .then((card) => {
      const cardEl = getCardElement(card);
      cardsList.prepend(cardEl);
      disableButton(cardModalSubmitButton, settings);
      closeModal(cardModal);
      cardForm.reset();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(cardModalSubmitButton, false, "Save", "Saving...");
    });
}

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  const avatarSubmitButton = evt.submitter;
  setButtonText(avatarModalSubmitButton, true, "Save", "Saving...");
  api
    .editAvatarInfo(avatarLinkInput.value)
    .then((data) => {
      profileAvatar.src = data.avatar;
      closeModal(avatarModal);
      avatarForm.reset();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(avatarModalSubmitButton, false, "Save", "Saving...");
    });
}

function handleDeleteSubmit(evt) {
  evt.preventDefault();
  const deleteButton = evt.submitter;
  setDeleteButtonText(deleteButton, true, "Delete", "Deleting...");
  console.log("Deleting card ID:", selectedCardId);
  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteModal);
    })
    .catch(console.error)
    .finally(() => {
      setDeleteButtonText(deleteButton, false, "Delete", "Deleting...");
    });
}

// Event listeners for delete modal buttons
deleteCloseBtn.addEventListener("click", () => {
  closeModal(deleteModal);
});

cancelBtn.addEventListener("click", () => {
  closeModal(deleteModal);
});

// Modal eventlisteners
profileEditBtn.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(editFormElement, [
    editModalNameInput,
    editModalDescriptionInput,
  ]);
  openModal(editModal);
});

closeModalBtn.addEventListener("click", () => {
  closeModal(editModal);
});

cardModalBtn.addEventListener("click", () => {
  openModal(cardModal);
});

cardModalClosedBtn.addEventListener("click", () => {
  closeModal(cardModal);
});

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

avatarAddBtn.addEventListener("click", () => {
  openModal(avatarModal);
});

avatarModalClosedBtn.addEventListener("click", () => {
  closeModal(avatarModal);
});

avatarForm.addEventListener("submit", handleAvatarSubmit);

editFormElement.addEventListener("submit", handleEditFormSubmit);
cardForm.addEventListener("submit", handleAddCardSubmit);
deleteModalForm.addEventListener("submit", handleDeleteSubmit);

enableValidation(settings);
