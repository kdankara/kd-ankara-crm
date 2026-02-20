const fs = require('fs');
const { getDistrictsByCityCode, getNeighbourhoodsByCityCodeAndDistrict } = require('turkey-neighbourhoods');

console.log("Extracting Ankara data...");

// Ankara City Code is "06"
const ANKARA_CODE = "06";

// Get districts
const districts = getDistrictsByCityCode(ANKARA_CODE);
console.log(`Found ${districts.length} districts.`);

const result = {};

districts.sort((a, b) => a.localeCompare(b, 'tr')).forEach(district => {
    // Get neighborhoods for this district
    const neighborhoods = getNeighbourhoodsByCityCodeAndDistrict(ANKARA_CODE, district);

    // Sort neighborhoods
    const sortedNeighborhoods = neighborhoods.sort((a, b) => a.localeCompare(b, 'tr'));

    result[district] = sortedNeighborhoods;
    console.log(`Processed ${district}: ${sortedNeighborhoods.length} neighborhoods`);
});

// Ensure output directory exists
if (!fs.existsSync('src/data')) {
    fs.mkdirSync('src/data', { recursive: true });
}

fs.writeFileSync('src/data/ankara-locations.json', JSON.stringify(result, null, 2));
console.log("Done! Written to src/data/ankara-locations.json");
