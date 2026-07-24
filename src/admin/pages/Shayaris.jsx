import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
  getAllShayaris,
  getCategories,
  createShayari,
  updateShayari,
  deleteShayari,
} from "../../services/shayariService";
import { toast } from "react-hot-toast";

function Shayaris() {
  const [shayaris, setShayaris] = useState([]);
  const [categories, setCategories] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    text: "",
    author: "",
    categoryId: "",
    status: "published",
  });

  const loadShayaris = async () => {
    try {
      const data = await getAllShayaris();
      setShayaris(data);
    } catch (err) {
      console.log(err);
    }
  };
  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSaveShayari = async () => {
    try {
      if (
        !formData.title ||
        !formData.categoryId ||
        !formData.text ||
        !formData.author
      ) {
        toast.error("Please fill all fields");
        return;
      }

      if (isEditing) {
        await updateShayari(editingId, {
          ...formData,
          categoryId: Number(formData.categoryId),
        });

        toast.success("Shayari updated successfully!");
      } else {
        await createShayari({
          ...formData,
          categoryId: Number(formData.categoryId),
        });

        toast.success("Shayari added successfully!");
      }

      setFormData({
        title: "",
        categoryId: "",
        text: "",
        author: "",
        status: "published",
      });

      setEditingId(null);
      setIsEditing(false);
      setShowModal(false);

      loadShayaris();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };
  const handleEdit = (shayari) => {
    setFormData({
      title: shayari.title,
      categoryId: shayari.categoryId,
      text: shayari.text,
      author: shayari.author,
      status: shayari.status,
    });

    setEditingId(shayari.id);
    setIsEditing(true);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);

    setEditingId(null);

    setIsEditing(false);

    setFormData({
      title: "",
      categoryId: "",
      text: "",
      author: "",
      status: "published",
    });
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Shayari?",
    );

    if (!confirmDelete) return;

    try {
      await deleteShayari(id);

      toast.success("Shayari deleted successfully!");

      loadShayaris();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete Shayari");
    }
  };

  useEffect(() => {
    loadShayaris();
    loadCategories();
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shayaris</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl"
        >
          + Add Shayari
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Author</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {shayaris.map((shayari) => (
              <tr key={shayari.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{shayari.id}</td>

                <td className="p-4">{shayari.title}</td>

                <td className="p-4">{shayari.category?.name}</td>

                <td className="p-4">{shayari.author}</td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => handleEdit(shayari)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-3"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(shayari.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">
              {isEditing ? "Edit Shayari" : "Add Shayari"}
            </h2>

            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              <select
                value={formData.categoryId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    categoryId: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              >
                <option value="">Select Category</option>

                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <textarea
                rows="5"
                placeholder="Write your shayari here..."
                value={formData.text}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    text: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Author"
                value={formData.author}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    author: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={closeModal}
                className="bg-gray-300 px-5 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveShayari}
                className="px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white"
              >
                {isEditing ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default Shayaris;
