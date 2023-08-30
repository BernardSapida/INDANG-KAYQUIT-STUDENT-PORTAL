import Swal, { SweetAlertIcon } from "sweetalert2";

export const Alert = (
    title: string,
    message: string,
    icon: SweetAlertIcon,
    confirmButtonText: string = "Okay",
    denyButtonText: string = "Cancel",
    showCloseButton: boolean = false
) => {
    Swal.mixin({
        customClass: {
            title: 'fs-5',
            confirmButton: "btn btn-primary"
        },
        buttonsStyling: false
    }).fire({
        title: title,
        html: message,
        icon: icon,
        confirmButtonText: confirmButtonText,
        denyButtonText: denyButtonText,
        showCloseButton: showCloseButton
    })
}