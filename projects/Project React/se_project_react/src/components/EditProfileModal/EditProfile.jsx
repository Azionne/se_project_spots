import React from "react";
import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import PropTypes from "prop-types";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfileModal({
  onClose,
  activeModal,
  onEditProfile,
  isSaving,
}) {
  const [name, setName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (activeModal === "edit-profile" && currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [activeModal, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("EditProfile form submitted:", { name, avatar }); // Debug log

    // Basic validation
    if (!name.trim() || name.length < 2 || name.length > 20) {
      console.error("Invalid name length");
      return;
    }

    if (!avatar.trim()) {
      console.error("Avatar URL is required");
      return;
    }

    onEditProfile({ name: name.trim(), avatar: avatar.trim() });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText={isSaving ? "Saving..." : "Save changes"}
      isOpen={activeModal === "edit-profile"}
      onClose={onClose}
      onSubmit={handleSubmit}
      contentClassName="edit-profile-modal"
    >
      <label className="modal__label edit-profile-modal__label">
        Name *
        <input
          type="text"
          className="modal__input edit-profile-modal__input"
          id="edit-profile-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          minLength={2}
          maxLength={20}
        />
      </label>
      <label className="modal__label edit-profile-modal__label">
        Avatar *
        <input
          type="url"
          className="modal__input edit-profile-modal__input"
          id="edit-profile-avatar"
          value={avatar}
          onChange={(e) => {
            setAvatar(e.target.value);
          }}
          required
        />
      </label>
      <button
        type="submit"
        className="edit-profile-modal__save-btn"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save changes"}
      </button>
    </ModalWithForm>
  );
}
EditProfileModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  activeModal: PropTypes.string.isRequired,
  onEditProfile: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
};
