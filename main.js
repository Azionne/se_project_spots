!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-btn",inactiveButtonClass:"modal__submit-btn_disable",inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},t=(e,t,o)=>{e.querySelector(`#${t.id}-error`).textContent="",t.classList.remove(o)},o=(e,t,o)=>{(e=>e.some((e=>!e.validity.valid)))(e)?n(t,o):(t.disabled=!1,t.classList.remove(o.inactiveButtonClass))},n=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},r=e=>{document.querySelectorAll(e.formSelector).forEach((n=>{((e,n)=>{const r=Array.from(e.querySelectorAll(n.inputSelector)),a=e.querySelector(n.submitButtonSelector);o(r,a,n),r.forEach((s=>{s.addEventListener("input",(function(){((e,o,n)=>{o.validity.valid?t(e,o,n.inputErrorClass):((e,t,o,n)=>{e.querySelector(`#${t.id}-error`).textContent=o,t.classList.add(n)})(e,o,o.validationMessage,n.inputErrorClass)})(e,s,n),o(r,a,n)}))}))})(n,e)}))};r(e);const a=document.querySelector(".profile__edit-btn"),s=document.querySelector(".profile__add-btn"),c=document.querySelector(".profile__name"),l=document.querySelector(".profile__description"),i=document.querySelector("#edit-modal"),d=i.querySelector(".modal__form"),u=i.querySelector(".modal__close-btn"),m=i.querySelector("#profile-name-input"),p=i.querySelector("#profile-description-input"),_=document.querySelector("#add-card-modal"),y=_.querySelector(".modal__form"),f=_.querySelector(".modal__submit-btn"),v=_.querySelector(".modal__close-btn"),S=_.querySelector("#add-card-name-input"),g=_.querySelector("#add-card-link-input"),q=document.querySelector("#preview-modal"),b=q.querySelector(".modal__image"),w=q.querySelector(".modal__caption"),h=q.querySelector(".modal__close-btn_type_preview"),k=document.querySelector("#card-template"),E=document.querySelector(".cards__list");function L(e){const t=k.content.querySelector(".card").cloneNode(!0),o=t.querySelector(".card__title"),n=t.querySelector(".card__image"),r=t.querySelector(".card__like-btn"),a=t.querySelector(".card__delete-btn");return o.textContent=e.name,n.src=e.link,n.alt=e.name,r.addEventListener("click",(()=>{r.classList.toggle("card__like-btn_liked")})),a.addEventListener("click",(()=>{t.remove()})),n.addEventListener("click",(()=>{C(q),b.src=e.link,w.textContent=e.name,b.alt=e.name})),t}function C(e){e.classList.add("modal_opened"),document.addEventListener("keydown",j),e.addEventListener("mousedown",z)}function x(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",j),e.removeEventListener("mousedown",z)}function z(e){e.target.classList.contains("modal")&&x(e.target)}function j(e){"Escape"===e.key&&x(document.querySelector(".modal_opened"))}a.addEventListener("click",(()=>{var o;m.value=c.textContent,p.value=l.textContent,o=d,[m,p].forEach((n=>{t(o,n,e.inputErrorClass)})),C(i)})),u.addEventListener("click",(()=>{x(i)})),s.addEventListener("click",(()=>{C(_)})),v.addEventListener("click",(()=>{x(_)})),h.addEventListener("click",(()=>{x(q)})),d.addEventListener("submit",(function(e){e.preventDefault(),c.textContent=m.value,l.textContent=p.value,x(i),e.target.reset()})),y.addEventListener("submit",(function(t){t.preventDefault();const o=L({name:S.value,link:g.value});E.prepend(o),disableButton(f,e),x(_),t.target.reset()})),[{name:"Val Thorens",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},{name:"Restaurant terrace",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},{name:"An outdoor cafe",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},{name:"A very long bridge, over the forest and through the trees...",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},{name:"Tunnel with morning light",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},{name:"Mountain house",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},{name:"Golden Gate Bridge",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"}].forEach((e=>{const t=L(e);E.prepend(t)})),r(e)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cHJvamVjdF9zcG90cy8uL3NyYy9zY3JpcHRzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxyXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fc3VibWl0LWJ0blwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX3N1Ym1pdC1idG5fZGlzYWJsZVwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yXCIsXHJcbn07XHJcblxyXG5jb25zdCBzaG93SW5wdXRFcnJvciA9IChcclxuICBmb3JtRWxlbWVudCxcclxuICBpbnB1dEVsZW1lbnQsXHJcbiAgZXJyb3JNc2csXHJcbiAgaW5wdXRFcnJvckNsYXNzXHJcbikgPT4ge1xyXG4gIGNvbnN0IGVycm9yTXNnRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICApO1xyXG4gIGVycm9yTXNnRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTXNnO1xyXG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGlucHV0RXJyb3JDbGFzcyk7XHJcbn07XHJcblxyXG5jb25zdCBoaWRlSW5wdXRFcnJvciA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBpbnB1dEVycm9yQ2xhc3MpID0+IHtcclxuICBjb25zdCBlcnJvck1zZ0VsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgKTtcclxuICBlcnJvck1zZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGlucHV0RXJyb3JDbGFzcyk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVja0lucHV0VmFsaWRpdHkgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgY29uZmlnKSA9PiB7XHJcbiAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgIHNob3dJbnB1dEVycm9yKFxyXG4gICAgICBmb3JtRWxlbWVudCxcclxuICAgICAgaW5wdXRFbGVtZW50LFxyXG4gICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UsXHJcbiAgICAgIGNvbmZpZy5pbnB1dEVycm9yQ2xhc3NcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcclxuICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0KSA9PiB7XHJcbiAgICByZXR1cm4gIWlucHV0LnZhbGlkaXR5LnZhbGlkO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdG9nZ2xlQnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpID0+IHtcclxuICBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcclxuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGlzYWJsZUJ1dHRvbiA9IChidXR0b25FbGVtZW50LCBjb25maWcpID0+IHtcclxuICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0VmFsaWRhdGlvbiA9IChmb3JtRWxlbWVudCwgaW5wdXRMaXN0KSA9PiB7XHJcbiAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWxlbWVudCwgaW5wdXQsIHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9IChmb3JtRWxlbWVudCwgY29uZmlnKSA9PiB7XHJcbiAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmlucHV0U2VsZWN0b3IpXHJcbiAgKTtcclxuICBjb25zdCBidXR0b25FbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcclxuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY2hlY2tJbnB1dFZhbGlkaXR5KGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZyk7XHJcbiAgICAgIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuYWJsZVZhbGlkYXRpb24gPSAoY29uZmlnKSA9PiB7XHJcbiAgY29uc3QgZm9ybUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5mb3JtU2VsZWN0b3IpO1xyXG4gIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbGVtZW50KSA9PiB7XHJcbiAgICBzZXRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCwgY29uZmlnKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgdmFsaWRhdGlvblxyXG5lbmFibGVWYWxpZGF0aW9uKHNldHRpbmdzKTtcclxuIiwiaW1wb3J0IFwiLi4vcGFnZXMvaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgZW5hYmxlVmFsaWRhdGlvbixcclxuICBzZXR0aW5ncyxcclxuICByZXNldFZhbGlkYXRpb24sXHJcbn0gZnJvbSBcIi4uL3NjcmlwdHMvdmFsaWRhdGlvbi5qc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFsIFRob3JlbnNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8xLXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVzdGF1cmFudCB0ZXJyYWNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMi1waG90by1ieS1jZWlsaW5lLWZyb20tcGV4ZWxzLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbiBvdXRkb29yIGNhZmVcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8zLXBob3RvLWJ5LXR1YmFudXItZG9nYW4tZnJvbS1wZXhlbHMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkEgdmVyeSBsb25nIGJyaWRnZSwgb3ZlciB0aGUgZm9yZXN0IGFuZCB0aHJvdWdoIHRoZSB0cmVlcy4uLlwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzQtcGhvdG8tYnktbWF1cmljZS1sYXNjaGV0LWZyb20tcGV4ZWxzLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUdW5uZWwgd2l0aCBtb3JuaW5nIGxpZ2h0XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNS1waG90by1ieS12YW4tYW5oLW5ndXllbi1mcm9tLXBleGVscy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTW91bnRhaW4gaG91c2VcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy82LXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR29sZGVuIEdhdGUgQnJpZGdlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNy1waG90by1ieS1ncmlmZmluLXdvb2xkcmlkZ2UtZnJvbS1wZXhlbHMuanBnXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vIFByb2ZpbGUgZWxlbWVudHNcclxuY29uc3QgcHJvZmlsZUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnRuXCIpO1xyXG5jb25zdCBjYXJkTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idG5cIik7XHJcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xyXG5jb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIpO1xyXG5cclxuLy8gTW9kYWwgZWxlbWVudHNcclxuY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LW1vZGFsXCIpO1xyXG5jb25zdCBlZGl0Rm9ybUVsZW1lbnQgPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcclxuY29uc3QgY2xvc2VNb2RhbEJ0biA9IGVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idG5cIik7XHJcbmNvbnN0IGVkaXRNb2RhbE5hbWVJbnB1dCA9IGVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtbmFtZS1pbnB1dFwiKTtcclxuY29uc3QgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dCA9IGVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiI3Byb2ZpbGUtZGVzY3JpcHRpb24taW5wdXRcIlxyXG4pO1xyXG5cclxuLy8gQWRkIENhcmQgbW9kYWwgZWxlbWVudHNcclxuY29uc3QgY2FyZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1tb2RhbFwiKTtcclxuY29uc3QgY2FyZEZvcm0gPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcclxuY29uc3QgY2FyZFN1Ym1pdEJ1dHRvbiA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19zdWJtaXQtYnRuXCIpO1xyXG5jb25zdCBjYXJkTW9kYWxDbG9zZWRCdG4gPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2UtYnRuXCIpO1xyXG5jb25zdCBjYXJkTmFtZUlucHV0ID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbmFtZS1pbnB1dFwiKTtcclxuY29uc3QgY2FyZExpbmtJbnB1dCA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWxpbmstaW5wdXRcIik7XHJcblxyXG5jb25zdCBwcmV2aWV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctbW9kYWxcIik7XHJcbmNvbnN0IHByZXZpZXdNb2RhbEltYWdlRWwgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XHJcbmNvbnN0IHByZXZpZXdNb2RhbENhcHRpb25FbCA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xyXG5jb25zdCBwcmV2aWV3TW9kYWxDbG9zZUJ0biA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLm1vZGFsX19jbG9zZS1idG5fdHlwZV9wcmV2aWV3XCJcclxuKTtcclxuXHJcbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKTtcclxuY29uc3QgY2FyZHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcclxuXHJcbi8vIENhcmQgRnVuY3Rpb25zXHJcbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRUZW1wbGF0ZS5jb250ZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXHJcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICBjb25zdCBjYXJkTmFtZUVsID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcclxuICBjb25zdCBjYXJkSW1hZ2UgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG4gIGNvbnN0IGNhcmRMaWtlZEJ0biA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idG5cIik7XHJcbiAgY29uc3QgY2FyZERlbGV0ZUJ0biA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ0blwiKTtcclxuXHJcbiAgY2FyZE5hbWVFbC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICBjYXJkSW1hZ2Uuc3JjID0gZGF0YS5saW5rO1xyXG4gIGNhcmRJbWFnZS5hbHQgPSBkYXRhLm5hbWU7XHJcblxyXG4gIGNhcmRMaWtlZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY2FyZExpa2VkQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ0bl9saWtlZFwiKTtcclxuICB9KTtcclxuXHJcbiAgY2FyZERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY2FyZEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgb3Blbk1vZGFsKHByZXZpZXdNb2RhbCk7XHJcbiAgICBwcmV2aWV3TW9kYWxJbWFnZUVsLnNyYyA9IGRhdGEubGluaztcclxuICAgIHByZXZpZXdNb2RhbENhcHRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuYWx0ID0gZGF0YS5uYW1lO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbn1cclxuXHJcbi8vIE9wZW4gYW5kIGNsb3NlIGVkaXQgbW9kYWwgZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNb2RhbEVzYyk7XHJcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjbG9zZU1vZGFsT3ZlcmxheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xyXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTW9kYWxFc2MpO1xyXG4gIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2xvc2VNb2RhbE92ZXJsYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsT3ZlcmxheShldnQpIHtcclxuICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSkge1xyXG4gICAgY2xvc2VNb2RhbChldnQudGFyZ2V0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWxFc2MoZXZ0KSB7XHJcbiAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIik7XHJcbiAgICBjbG9zZU1vZGFsKG1vZGFsKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZvcm0gc3VibWl0IGV2ZW50XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFZGl0Rm9ybVN1Ym1pdChldnQpIHtcclxuICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZTtcclxuICBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gIGNsb3NlTW9kYWwoZWRpdE1vZGFsKTtcclxuICBldnQudGFyZ2V0LnJlc2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUFkZENhcmRTdWJtaXQoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7IG5hbWU6IGNhcmROYW1lSW5wdXQudmFsdWUsIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUgfTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGlucHV0VmFsdWVzKTtcclxuICBjYXJkc0xpc3QucHJlcGVuZChjYXJkRWxlbWVudCk7XHJcbiAgZGlzYWJsZUJ1dHRvbihjYXJkU3VibWl0QnV0dG9uLCBzZXR0aW5ncyk7XHJcbiAgY2xvc2VNb2RhbChjYXJkTW9kYWwpO1xyXG4gIGV2dC50YXJnZXQucmVzZXQoKTtcclxufVxyXG5cclxuLy8gTW9kYWwgZXZlbnRzXHJcblxyXG5wcm9maWxlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVOYW1lLnRleHRDb250ZW50O1xyXG4gIGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgcmVzZXRWYWxpZGF0aW9uKGVkaXRGb3JtRWxlbWVudCwgW1xyXG4gICAgZWRpdE1vZGFsTmFtZUlucHV0LFxyXG4gICAgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dCxcclxuICBdKTtcclxuICBvcGVuTW9kYWwoZWRpdE1vZGFsKTtcclxufSk7XHJcblxyXG5jbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xvc2VNb2RhbChlZGl0TW9kYWwpO1xyXG59KTtcclxuXHJcbmNhcmRNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG9wZW5Nb2RhbChjYXJkTW9kYWwpO1xyXG59KTtcclxuXHJcbmNhcmRNb2RhbENsb3NlZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsb3NlTW9kYWwoY2FyZE1vZGFsKTtcclxufSk7XHJcblxyXG5wcmV2aWV3TW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsb3NlTW9kYWwocHJldmlld01vZGFsKTtcclxufSk7XHJcblxyXG5lZGl0Rm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVFZGl0Rm9ybVN1Ym1pdCk7XHJcbmNhcmRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQWRkQ2FyZFN1Ym1pdCk7XHJcblxyXG5pbml0aWFsQ2FyZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gZ2V0Q2FyZEVsZW1lbnQoaXRlbSk7XHJcbiAgY2FyZHNMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xyXG59KTtcclxuXHJcbmVuYWJsZVZhbGlkYXRpb24oc2V0dGluZ3MpO1xyXG4iXSwibmFtZXMiOlsic2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsImhpZGVJbnB1dEVycm9yIiwiZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaWQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiaW5wdXRMaXN0IiwiYnV0dG9uRWxlbWVudCIsImNvbmZpZyIsInNvbWUiLCJpbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJoYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlQnV0dG9uIiwiZGlzYWJsZWQiLCJhZGQiLCJlbmFibGVWYWxpZGF0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNldEV2ZW50TGlzdGVuZXJzIiwiQXJyYXkiLCJmcm9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrSW5wdXRWYWxpZGl0eSIsInNob3dJbnB1dEVycm9yIiwiZXJyb3JNc2ciLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInByb2ZpbGVFZGl0QnRuIiwiY2FyZE1vZGFsQnRuIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJlZGl0TW9kYWwiLCJlZGl0Rm9ybUVsZW1lbnQiLCJjbG9zZU1vZGFsQnRuIiwiZWRpdE1vZGFsTmFtZUlucHV0IiwiZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dCIsImNhcmRNb2RhbCIsImNhcmRGb3JtIiwiY2FyZFN1Ym1pdEJ1dHRvbiIsImNhcmRNb2RhbENsb3NlZEJ0biIsImNhcmROYW1lSW5wdXQiLCJjYXJkTGlua0lucHV0IiwicHJldmlld01vZGFsIiwicHJldmlld01vZGFsSW1hZ2VFbCIsInByZXZpZXdNb2RhbENhcHRpb25FbCIsInByZXZpZXdNb2RhbENsb3NlQnRuIiwiY2FyZFRlbXBsYXRlIiwiY2FyZHNMaXN0IiwiZ2V0Q2FyZEVsZW1lbnQiLCJkYXRhIiwiY2FyZEVsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY2FyZE5hbWVFbCIsImNhcmRJbWFnZSIsImNhcmRMaWtlZEJ0biIsImNhcmREZWxldGVCdG4iLCJuYW1lIiwic3JjIiwibGluayIsImFsdCIsInRvZ2dsZSIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwiY2xvc2VNb2RhbEVzYyIsImNsb3NlTW9kYWxPdmVybGF5IiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImtleSIsInJlc2V0VmFsaWRhdGlvbiIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsInByZXBlbmQiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==