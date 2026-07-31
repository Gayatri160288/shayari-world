import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import confirmDelete from "../../utils/confirmDelete";
import Swal from "sweetalert2";
import {
  getAllShayaris,
  getCategories,
  createShayari,
  updateShayari,
  deleteShayari,
} from "../../services/shayariService";
import { toast } from "react-hot-toast";
import { Sparkles } from "lucide-react";
import { generateAIShayari } from "../../services/aiService";

function Shayaris() {
  const [shayaris, setShayaris] = useState([]);
  const [categories, setCategories] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    text: "",
    author: "",
    categoryId: "",
    status: "published",
  });
  const [mood, setMood] = useState("");
  const [generating, setGenerating] = useState(false);
  const [language, setLanguage] = useState("Hindi");
  const [style, setStyle] = useState("Classic");
  const [length, setLength] = useState("Medium");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

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
      setMood("");
      setLanguage("Hindi");
      setStyle("Classic");
      setLength("Medium");

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
    setMood("");
    setLanguage("Hindi");
    setStyle("Classic");
    setLength("Medium");
  };
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Shayari?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    await deleteShayari(id);

    Swal.fire({
      icon: "success",
      title: "Deleted Successfully",
      timer: 1500,
      showConfirmButton: false,
    });

    loadShayaris();
  };
  const handleGenerateAI = async () => {
    if (!formData.title || !formData.categoryId || !mood) {
      toast.error("Please enter Title, Category and Mood");
      return;
    }

    try {
      setGenerating(true);

      const category = categories.find(
        (c) => c.id === Number(formData.categoryId),
      );

      const result = await generateAIShayari({
        title: formData.title,
        category: category.name,
        mood,
        language,
        style,
        length,
      });

      setFormData((prev) => ({
        ...prev,
        text: result.text,
      }));

      toast.success("✨ Shayari generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("AI generation failed");
    } finally {
      setGenerating(false);
    }
  };
  const filteredShayaris = shayaris.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.text.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    const matchesCategory =
      categoryFilter === "" || item.category?.name === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const totalPages = Math.ceil(filteredShayaris.length / itemsPerPage);

  const paginatedShayaris = filteredShayaris.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    loadShayaris();
    loadCategories();
  }, []);

  const resetFilters = () => {
    setSearch("");
    setCategoryFilter("");
    setStatusFilter("All"); // or "" if you also change your status dropdown
    setCurrentPage(1); // if you're using pagination
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter, categoryFilter]);

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shayaris</h1>
        <div className="bg-white rounded-2xl shadow p-5 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="🔍 Search title, author or shayari..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-xl p-3"
            />

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border rounded-xl p-3 min-w-[220px]"
            >
              <option value="">All Categories</option>

              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>

            <button
              onClick={resetFilters}
              className="px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
            >
              ↺ Reset
            </button>
          </div>
        </div>
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
              <th className="p-4 text-left">Sr. No.</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Author</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedShayaris.map((shayari, index) => (
              <tr key={shayari.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{index + 1}</td>

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
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1 ? "bg-pink-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
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

              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="border rounded-lg p-3"
              >
                <option value="">Select Mood</option>
                <option value="Romantic">❤️ Romantic</option>
                <option value="Sad">💔 Sad</option>
                <option value="Friendship">🤝 Friendship</option>
                <option value="Motivational">🔥 Motivational</option>
                <option value="Happy">😊 Happy</option>
                <option value="Emotional">😢 Emotional</option>
                <option value="Lonely">🌙 Lonely</option>
              </select>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border rounded-lg p-3"
              >
                <option value="Hindi">🇮🇳 Hindi</option>
                <option value="English">🇬🇧 English</option>
                <option value="Hinglish">🗣️ Hinglish</option>
                <option value="Marathi">🌺 Marathi</option>
              </select>

              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="border rounded-lg p-3"
              >
                <option value="Classic">📜 Classic</option>
                <option value="Modern">✨ Modern</option>
                <option value="Urdu">🕌 Urdu</option>
                <option value="Bollywood">🎬 Bollywood</option>
                <option value="Instagram">📱 Instagram</option>
                <option value="Deep Poetry">🖋️ Deep Poetry</option>
              </select>

              <select
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="border rounded-lg p-3"
              >
                <option value="Short">Short (2 lines)</option>
                <option value="Medium">Medium (4 lines)</option>
                <option value="Long">Long (6–8 lines)</option>
              </select>

              <button
                type="button"
                onClick={handleGenerateAI}
                disabled={generating}
                className="
    flex
    items-center
    justify-center
    gap-2
    bg-gradient-to-r
    from-purple-600
    via-pink-500
    to-orange-500
    hover:opacity-90
    text-white
    rounded-lg
    py-3
    font-semibold
  "
              >
                <Sparkles size={18} />

                {generating ? "Generating..." : "Generate with AI"}
              </button>

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
