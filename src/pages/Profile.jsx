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
                <div>
                    <div class="m-10 max-w-sm">
                        <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
                            <div class="relative mx-auto w-36 rounded-full">
                                <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                                <img class="mx-auto h-auto w-full rounded-full" src={userData.image || "https://via.placeholder.com/150"} alt={userData.full_name} />
                            </div>
                            <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{userData.full_name}</h1>
                            {/* <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">Marketing Exec. at Denva Corp</h3> */}
                            {/* <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!</p> */}
                            <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                                {/* <li class="flex items-center py-3 text-sm">
                                    <span>Status</span>
                                    <span class="ml-auto">
                                        <span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                                            Open for side gigs
                                        </span>
                                    </span>
                                </li> */}
                                <li class="flex items-center py-3 text-sm">
                                    <span>F.I.O</span>
                                    <span class="ml-auto">{userData.full_name}</span>
                                </li>
                                <li class="flex items-center py-3 text-sm">
                                    <span>Talaba ID</span>
                                    <span class="ml-auto">{userData.student_id_number}</span>
                                </li>
                                <li class="flex items-center py-3 text-sm">
                                    <span>Email</span>
                                    <span class="ml-auto">{userData.email}</span>
                                </li>
                                <li class="flex items-center py-3 text-sm">
                                    <span>Universitet</span>
                                    <span class="ml-auto">{userData.university}</span>
                                </li>
                                <li class="flex items-center py-3 text-sm">
                                    <span>Guruh</span>
                                    <span class="ml-auto">{userData.group?.name}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
