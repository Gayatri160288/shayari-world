import Swal from "sweetalert2";

const confirmDelete = async (title = "Delete Item?") => {
  const result = await Swal.fire({
    title,
    text: "This action cannot be undone.",
    icon: "warning",

    showCancelButton: true,

    confirmButtonColor: "#e11d48",
    cancelButtonColor: "#6b7280",

    confirmButtonText: "Yes, Delete",
    cancelButtonText: "Cancel",

    reverseButtons: true,
  });

  return result.isConfirmed;
};

export default confirmDelete;
