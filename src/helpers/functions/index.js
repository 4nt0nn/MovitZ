import M from "materialize-css/dist/js/materialize.min.js";

/**
 * Helper function for initializing Materialize
 * toast when a user tries to add a movie to the
 * firestore database.
 *
 * @param {string} text - Text to be displayed in the toast.
 * @param {boolean} success - Error or success.
 */
export const toastFunction = (text, success) => {
  M.toast({
    html: text,
    classes: success ? "success-toast" : "error-toast",
  });
};
