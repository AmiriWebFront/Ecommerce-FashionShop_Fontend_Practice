// ============== Status Alert ==============
function statusAlert(statusContext) {
    const statusAlert = document.querySelector(".status-alert");
    const statusAlertContext = document.querySelector(".status-alert-context");
    statusAlertContext.innerHTML = statusContext;
    statusAlert.classList.remove("hidden");
    setTimeout(() => {
      statusAlert.classList.add("hidden");
    }, 7000);
  }

export default statusAlert;