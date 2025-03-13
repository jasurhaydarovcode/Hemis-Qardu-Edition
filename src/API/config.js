export const API_BASE_URL = "https://student.qarshidu.uz/rest/v1";

export const API_URLS = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`, // Talaba login orqali avtorizatsiya qilish
        REFRESH_TOKEN: `${API_BASE_URL}/auth/refresh-token`, // JWT tokenni yangilash
    },
    ACCOUNT: {
        ME: `${API_BASE_URL}/account/me`, // Talabaning shaxsiy va akademik ma'lumotlari
        UPDATE: `${API_BASE_URL}/account/update`, // Talaba ma'lumotlarini yangilash
    },
    EDUCATION: {
        ATTENDANCE: `${API_BASE_URL}/education/attendance`, // Talabaning davomadi
        EXAM_TABLE: `${API_BASE_URL}/education/exam-table`, // Talabaning imtihonlar jadvali
        GPA_LIST: `${API_BASE_URL}/education/gpa-list`, // Talabaning GPA ballari
        PERFORMANCE: `${API_BASE_URL}/education/performance`, // Talabaning kunlik baholari
        RESOURCES: `${API_BASE_URL}/education/resources`, // Talaba fanlariga biriktirilgan elektron resurslari
        SCHEDULE: `${API_BASE_URL}/education/schedule`, // Talabaning dars jadvali
        SEMESTERS: `${API_BASE_URL}/education/semesters`, // Talabaning o'quv rejasidagi semestrlar
        SUBJECT_INFO: `${API_BASE_URL}/education/subject`, // Talabaga biriktirilgan fan ma'lumotlari
        SUBJECT_LIST: `${API_BASE_URL}/education/subject-list`, // Talabaga biriktirilgan fanlar va fan natijalari
        SUBJECTS: `${API_BASE_URL}/education/subjects`, // Talabaga biriktirilgan fanlar
        TASK_DETAIL: `${API_BASE_URL}/education/task-detail`, // Talabaga biriktirilgan topshiriq ma'lumotlari
        TASK_LIST: `${API_BASE_URL}/education/task-list`, // Talabaga biriktirilgan fan uchun topshiriqlar ro'yxati
        TASK_UPLOAD: `${API_BASE_URL}/education/task-upload`, // Topshiriqqa javob yuborish
        TASK_UPLOAD_CHECK: `${API_BASE_URL}/education/task-upload-check`, // Topshiriqqa javob yuborish mumkinligini tekshirish
    },
    STUDENT: {
        CONTRACT: `${API_BASE_URL}/student/contract`, // Talabaning joriy yili kontrakti
        CONTRACT_LIST: `${API_BASE_URL}/student/contract-list`, // Talabaning kontraktlari ro‘yxati
        DECREE: `${API_BASE_URL}/student/decree`, // Talaba buyruqlari
        DOCUMENT: `${API_BASE_URL}/student/document`, // Talabaning boshqa turdagi hujjatlari
        DOCUMENT_ALL: `${API_BASE_URL}/student/document-all`, // Talabaning barcha hujjatlari
        REFERENCE: `${API_BASE_URL}/student/reference`, // Talaba ma'lumotomalari
        REFERENCE_GENERATE: `${API_BASE_URL}/student/reference-generate`, // Talaba ma'lumotnomasini generatsiya qilish
    },
    DOCS: "https://student.qarshidu.uz/rest/docs", // API hujjatlari
};
