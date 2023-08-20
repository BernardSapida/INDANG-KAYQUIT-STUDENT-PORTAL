import Swal, { SweetAlertIcon } from "sweetalert2";

export const Alert = (
    icon: SweetAlertIcon | undefined,
    title: string,
    message: string
) => {
    const swal = Swal.mixin({
        customClass: {
            title: 'fs-5',
            confirmButton: 'btn btn-primary',
            // cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false
    })

    swal.fire({
        icon: icon,
        title: title,
        text: message,
        background: 'bg-dark',
        width: "10rem"
    });
};