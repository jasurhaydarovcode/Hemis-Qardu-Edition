import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URLS } from "@/API/config";

function Profile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token"); // Tokenni localStorage'dan olish

        if (!token) {
            setError("Token mavjud emas. Iltimos, qayta login qiling.");
            setLoading(false);
            return;
        }

        axios
            // .get("https://student.qarshidu.uz/rest/v1/account/me", {
            .get(API_URLS.ACCOUNT.ME, {
                headers: {
                    Authorization: `Bearer ${token}`, // Tokenni so‘rovga qo‘shish
                },
            })
            .then((response) => {
                setUserData(response.data.data);
            })
            .catch((error) => {
                setError(
                    error.response?.data?.message || "Foydalanuvchi ma'lumotlarini olishda xatolik."
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Yuklanmoqda...</p>;
    if (error) return <p>Xatolik: {error}</p>;

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Profil Ma'lumotlari</h2>
            {userData && (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    {/* <img
                        src={userData.image || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mb-4"
                    /> */}
                    <p><strong>F.I.O:</strong> {userData.full_name}</p>
                    <p><strong>Talaba ID:</strong> {userData.student_id_number}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Universitet:</strong> {userData.university}</p>
                    <p><strong>Guruh:</strong> {userData.group?.name}</p>
                </div>
            )}
        </div>
    );
}

export default Profile;
