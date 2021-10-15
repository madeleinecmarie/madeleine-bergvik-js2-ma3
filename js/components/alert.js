export default function alert(alert, errmessage) {
  document.querySelector(".alert").innerHTML = `<div class="alert  ${alert}">
      ${errmessage}
    </div>`;
}
