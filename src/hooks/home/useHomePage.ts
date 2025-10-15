import { useEffect, useState } from 'react'
import { Package } from '../../types/Package';
import { getAllPackages } from '../../services/packagesSercice';
import { isAxiosError } from 'axios';

const useHomePage = () => {
    const [packages, setPackages] = useState<Package[]>([]);

    useEffect(() => {
        async function fetchHomePackages() {
            try {
                const res = await getAllPackages('limit=6&package_status=active');
                setPackages(res.data.data);
            } catch (error) {
                if (isAxiosError(error)) {
                    const message = error.response?.data.message || 'Terjadi kesalahan saat pengambilan data'
                    console.error(`Error: ${message}`);
                }
            }
        };

        fetchHomePackages();
    }, []);

    return {
        packages
    };
};

export default useHomePage;
