import * as fs from 'fs';
import * as path from 'path';

const cities = [
    { slug: "agence-seo-casablanca", name: "Casablanca" },
    { slug: "agence-seo-rabat", name: "Rabat" },
    { slug: "agence-seo-fes", name: "Fès" },
    { slug: "agence-seo-marrakech", name: "Marrakech" },
    { slug: "agence-seo-agadir", name: "Agadir" },
    { slug: "agence-seo-meknes", name: "Meknès" },
    { slug: "agence-seo-oujda", name: "Oujda" },
    { slug: "agence-seo-kenitra", name: "Kénitra" },
    { slug: "agence-seo-tetouan", name: "Tétouan" },
    { slug: "agence-seo-safi", name: "Safi" },
    { slug: "agence-seo-mohammedia", name: "Mohammedia" },
    { slug: "agence-seo-el-jadida", name: "El Jadida" },
    { slug: "agence-seo-beni-mellal", name: "Beni Mellal" },
    { slug: "agence-seo-nador", name: "Nador" },
    { slug: "agence-seo-khouribga", name: "Khouribga" },
    { slug: "agence-seo-ouarzazate", name: "Ouarzazate" },
    { slug: "agence-seo-settat", name: "Settat" },
    { slug: "agence-seo-larache", name: "Larache" },
    { slug: "agence-seo-taza", name: "Taza" },
    { slug: "agence-seo-essaouira", name: "Essaouira" },
    { slug: "agence-seo-dakhla", name: "Dakhla" },
    { slug: "agence-seo-al-hoceima", name: "Al Hoceima" },
    { slug: "agence-seo-ifrane", name: "Ifrane" }
];

function replaceCityReferences(content: string, newCityName: string, newCitySlug: string): string {
    // Replace all variations of "Tanger" with the new city name
    let updatedContent = content;
    
    // Replace canonical URL
    updatedContent = updatedContent.replace(
        /https:\/\/www\.hostino\.ma\/agence-seo-tanger/g,
        `https://www.hostino.ma/${newCitySlug}`
    );
    
    // Replace city references in titles and text
    updatedContent = updatedContent.replace(/Agence SEO Tanger/g, `Agence SEO ${newCityName}`);
    updatedContent = updatedContent.replace(/agence SEO Tanger/g, `agence SEO ${newCityName}`);
    updatedContent = updatedContent.replace(/agence SEO à Tanger/g, `agence SEO à ${newCityName}`);
    updatedContent = updatedContent.replace(/Agence SEO à Tanger/g, `Agence SEO à ${newCityName}`);
    updatedContent = updatedContent.replace(/ à Tanger/g, ` à ${newCityName}`);
    updatedContent = updatedContent.replace(/ Tanger/g, ` ${newCityName}`);
    updatedContent = updatedContent.replace(/SEO Tanger/g, `SEO ${newCityName}`);
    
    // Replace in specific contexts
    updatedContent = updatedContent.replace(/de Tanger/g, `de ${newCityName}`);
    updatedContent = updatedContent.replace(/sur Tanger/g, `sur ${newCityName}`);
    updatedContent = updatedContent.replace(/dans Tanger/g, `dans ${newCityName}`);
    updatedContent = updatedContent.replace(/pour Tanger/g, `pour ${newCityName}`);
    
    // Replace function/component name if it exists
    updatedContent = updatedContent.replace(
        /export default async function \w+Page\(\)/g,
        `export default async function ${newCityName.replace(/\s+/g, '')}Page()`
    );
    
    return updatedContent;
}

function createCityDirectories() {
    // Base directory where city folders will be created
    const baseDir = path.join(process.cwd(), 'app');
    
    // Path to the template file (Tanger page)
    const templatePath = path.join(baseDir, 'agence-seo-tanger', 'page.tsx');
    
    // Check if template file exists
    if (!fs.existsSync(templatePath)) {
        console.error('❌ Template file not found: app/agence-seo-tanger/page.tsx');
        console.error('Please make sure the file exists before running this script.');
        return;
    }
    
    // Read the template content
    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    console.log('✅ Template file loaded from app/agence-seo-tanger/page.tsx\n');

    // Create base directory if it doesn't exist
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
    }

    // Create directories and files for each city
    cities.forEach(city => {
        const cityDir = path.join(baseDir, city.slug);

        // Create city directory if it doesn't exist
        if (!fs.existsSync(cityDir)) {
            fs.mkdirSync(cityDir, { recursive: true });
        }

        // Replace city references in template
        const cityContent = replaceCityReferences(templateContent, city.name, city.slug);

        // Create page.tsx file
        const filePath = path.join(cityDir, 'page.tsx');
        fs.writeFileSync(filePath, cityContent, 'utf-8');

        console.log(`✅ Created: ${city.slug}/page.tsx (${city.name})`);
    });

    console.log('\n🎉 All city pages created successfully!');
    console.log(`📁 Total pages created: ${cities.length}`);
}

// Run the function
createCityDirectories();