import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../services/categoryService";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const loadCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSaveCategory = async () => {
    if (!categoryName.trim()) return;

    try {
      if (isEditing) {
        await updateCategory(editingId, {
          name: categoryName,
        });
      } else {
        await createCategory({
          name: categoryName,
        });
      }

      setCategoryName("");
      setEditingId(null);
      setIsEditing(false);
      setShowModal(false);

      loadCategories();
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = (category) => {
    setCategoryName(category.name);
    setEditingId(category.id);
    setIsEditing(true);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setCategoryName("");
    setEditingId(null);
    setIsEditing(false);
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?",
    );

    if (!confirmDelete) return;

    try {
      await deleteCategory(id);

      loadCategories();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Categories</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl"
        >
          + Add Category
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="text-left p-4">ID</th>

              <th className="text-left p-4">Name</th>

              <th className="text-center p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{category.id}</td>

                <td className="p-4">{category.name}</td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => handleEdit(category)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(category.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
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
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white rounded-2xl p-8 w-[450px]">
            <h2 className="text-2xl font-bold mb-6">
              {isEditing ? "Edit Category" : "Add Category"}
            </h2>

            <input
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border rounded-lg p-3 mb-6"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="bg-gray-300 px-5 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveCategory}
                className="bg-pink-600 text-white px-5 py-2 rounded-lg"
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

export default Categories;
