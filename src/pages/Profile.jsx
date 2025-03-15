import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URLS } from "@/API/config";
import DarkModeToggle from "@/components/DarkModeToggle";

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
        <div className="p-4 min-h-screen bg-neutral-300 dark:bg-neutral-950">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Profil Ma'lumotlari
                </h2>
                {/* <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg"
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button> */}
                <DarkModeToggle />
            </div>
            {userData && (
                <div className="m-10 max-w-sm">
                    <div className="rounded-lg border bg-white dark:bg-neutral-800 px-4 pt-8 pb-10 shadow-lg">
                        <div className="relative mx-auto w-36 rounded-full">
                            <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                            <img
                                className="mx-auto h-auto w-full rounded-full"
                                src={userData.image || "https://via.placeholder.com/150"}
                                alt={userData.full_name}
                            />
                        </div>
                        <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900 dark:text-white">
                            {userData.full_name}
                        </h1>
                        <ul className="mt-3 divide-y rounded bg-gray-100 dark:bg-neutral-900 py-2 px-3 text-gray-600 dark:text-gray-300 shadow-sm">
                            <li className="flex items-center py-3 text-sm">
                                <span>F.I.O</span>
                                <span className="ml-auto">{userData.full_name}</span>
                            </li>
                            <li className="flex items-center py-3 text-sm">
                                <span>Talaba ID</span>
                                <span className="ml-auto">{userData.student_id_number}</span>
                            </li>
                            <li className="flex items-center py-3 text-sm">
                                <span>Email</span>
                                <span className="ml-auto">{userData.email}</span>
                            </li>
                            <li className="flex items-center py-3 text-sm">
                                <span>Universitet</span>
                                <span className="ml-auto">{userData.university}</span>
                            </li>
                            <li className="flex items-center py-3 text-sm">
                                <span>Guruh</span>
                                <span className="ml-auto">{userData.group?.name}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
