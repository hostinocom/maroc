import * as fs from 'fs';
import * as path from 'path';

const cities = [
    "Casablanca", "Rabat", "Fes", "Marrakech", "Agadir", 
    "Tangier", "Meknes", "Oujda", "Kenitra", "Tetouan",
    "Safi", "Mohammedia", "El Jadida", "Beni Mellal", "Nador",
    "Khouribga", "Ouarzazate", "Settat", "Larache", "Taza",
    "Essaouira", "Dakhla", "Al Hoceima", "Ifrane"
];

const pageTemplate = (cityName: string) => `
export default function ${cityName.replace(/\s+/g, '')}Page() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                    Welcome to ${cityName}
                </h1>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <p className="text-gray-700">
                        Discover the beauty and culture of ${cityName}, Morocco.
                    </p>
                </div>
            </div>
        </div>
    );
}
`;

function createCityDirectories() {
    // Base directory where city folders will be created
    const baseDir = path.join(process.cwd(), 'app');

    // Create base directory if it doesn't exist
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
    }

    // Create directories and files for each city
    cities.forEach(city => {
        // Create folder name (lowercase, replace spaces with hyphens)
        const folderName = city.toLowerCase().replace(/\s+/g, '-');
        const cityDir = path.join(baseDir, folderName);

        // Create city directory if it doesn't exist
        if (!fs.existsSync(cityDir)) {
            fs.mkdirSync(cityDir, { recursive: true });
        }

        // Create page.tsx file
        const filePath = path.join(cityDir, 'page.tsx');
        fs.writeFileSync(filePath, pageTemplate(city));

        console.log(`Created directory and page for ${city}`);
    });
}

// Run the function
createCityDirectories();