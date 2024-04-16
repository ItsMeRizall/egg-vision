import { axiosInstance } from "../../lib/axios";

export function dataAcccount(){
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('users');
                return res.data
            } catch (error) {
                console.log("Gagal Mengambil Data")
            }
        }

        return {
            fetchData
        }
}