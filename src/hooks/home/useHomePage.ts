import { useEffect, useState } from 'react'
import { Package } from '../../types/Package';
import { getAllPackages } from '../../services/packagesSercice';

const useHomePage = () => {
    const [packages, setPackages] = useState<Package[]>([]);

    useEffect(() => {
        async function fetchHomePackages() {
            try {
                const res = await getAllPackages('limit=6');
                setPackages(res.data.data);
            } catch (error) {
                
            }
        };

        fetchHomePackages();
    }, []);

    return {
        packages
    };
};

export default useHomePage;
