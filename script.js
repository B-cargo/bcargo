const businesses = [
    {
        city: "London Croydon",
        address: "79 London Road, Croydon, CR0 2RF",
        phone1: "+44 7392 455288",
        person: "Kak Miran (Shadi Bakery)"
    },
    {
        city: "London Harlesden",
        address: "88 St Johns Avenue, Harlesden, NW10 4EG",
        phone1: "+44 7392 455288",
        person: "Kak Karwan (Launderette & Dry cleaning)"
        
    },
    {
        city: "London Enfield",
        address: "27 Church Street, Enfield, EN2 6AQ",
        phone1: "+44 7897 712038",
        phone2: "+44 7931 287878",
        person: "Gailan (Fruit & Veg)"
    },
    {
        city: "London Stratford",
        address: "673 High Rd, Leytonstone, E11 4RD",
        phone1: "+44 7492 822263",
        person: "Kak Zewar (ZB Barber)"
    },
    {
        city: "Birmingham",
        address: "62A Anne Road, Smethwick, B66 2NY",
        phone1: "+44 7449 008176",
        person: "Kak Dara (Anne Local)"
    },
    {
        city: "Bolton",
        address: "141 Mayor Street, Bolton, BL1 4SJ",
        phone1: "+44 7428 814014",
        person: "Kak Renas"
    },
    {
        city: "Brighton",
        address: "2 Rock Street, Brighton, BN2 1NF",
        phone1: "+44 7474 432624",
        phone2: "+44 7491 941496",
        person: "Aram, Ako"
    },
    {
        city: "Bristol",
        address: "313 Two Mill Hill Road, Bristol, BS151AP",
        phone1: "+44 7763 795785",
        person: "K Shalaw Wakil (Burgas European Food)"
    },
    {
        city: "Burton on Trent",
        address: "13 Northumberland Road, Burton on Trent, DE15 9JQ",
        phone1: "+44 7515 008701",
        person: "Kak Shorish"
    },
    {
        city: "Cardiff",
        address: "165 City Road, Cardiff, CF24 3BQ",
        phone1: "+44 7399 810664",
        person: "Kak Kaifi (Easy Shop)"
    },
    {
        city: "Coventry",
        address: "145 Foleshill Road, Coventry, CV1 4LF",
        phone1: "+44 7522 011514",
        phone2: "+44 7459 822243",
        person: "Ramzy, Narmand (M&A Export)"
    },
    {
        city: "Derby",
        address: "176 Normanton Road, Derby, DE23 6UX",
        phone1: "+44 7404 704692",
        person: "Kak Bakir (Sardam Travel)"
    },
    {
        city: "Doncaster",
        address: "24 Beckett Road, Doncaster, DN2 4AD",
        phone1: "+44 7806 677674",
        person: "Kak Kawa"
    },
    {
        city: "Edinburgh",
        address: "149 Granton Road, Edinburgh, EH5 3NL",
        phone1: "+44 7716 661099",
        person: "Kak Saiwan"
    },
    {
        city: "Glasgow",
        address: "1401 Maryhill Road, Glasgow, G20 9AA",
        phone1: "+44 7727 266895",
        person: "Kak Mohammed (Show Market)"
    },
    {
        city: "Gravesend",
        address: "3 Darnley Rd, Gravesend, Kent, DA11 0RU",
        phone1: "+44 7522 521026",
        person: "Mam Hozan (Barber Kent 2)"
    },
    {
        city: "Hastings",
        address: "19 Norman Road, St Leonards-on-sea, TN37 6NH",
        phone1: "+44 7411 910429",
        phone2: "+44 7804 656592",
        person: "Kak Shaxawan"
    },
    {
        city: "Huddersfield",
        address: "6 Bradford Road, Huddersfield, HD16HY",
        phone1: "+44 7388 653033",
        person: "Kak Sirwan (Awen Mini Markets)"
    },
    {
        city: "Hull",
        address: "123 Spring Bank, HU3 1BH",
        phone1: "+44 7383 688766",
        person: "Kak Sami (International Bargain Line Food Store)"
    },
    {
        city: "Ipswich",
        address: "14 St. Matthews Street, Ipswich, IP1 3EU",
        phone1: "+44 7550 555559",
        person: "Kak Muhammad (Elliot Carpet)"
    },
    {
        city: "Kent Warehouse",
        address: "Unit X, Paddock Wood Distribution Centre, TN12 6UU",
        phone1: "+44 7722 335573",
        person: "Warehouse"
    },
    {
        city: "Leeds",
        address: "1 Dolly Line, Leeds, LS9 7EB",
        phone1: "+44 7713 474140",
        phone2: "+964 770 632 1546",
        person: "AJRASS"
    },
    {
        city: "Leicester",
        address: "22 Lee Circle, Leicester, LE1 3RE",
        phone1: "+44 7914 169335",
        person: "Kak Hadi (Akre Travel)"
    },
    {
        city: "Liverpool",
        address: "20 Lodge Lane, Liverpool, L8 0QH",
        phone1: "+44 7874 224266",
        person: "Kak Bashdar (Fresh Holidays)"
    },
    {
        city: "Maidstone",
        address: "33-35 Upper Stone St, Maidstone, ME15 6EU",
        phone1: "+44 7429 443912",
        person: "Rebwar Qamishi (Top Style Barbers)"
    },
    {
        city: "Manchester",
        address: "240A Furness Road, Wilmslow, Manchester, M14 6LD",
        phone1: "+44 7770 326288",
        person: "Mala Nawzad (B-Post and Travel)"
    },
    {
        city: "Manchester Longsight",
        address: "163A Dickenson Road, Longsight, M13 0YN",
        phone1: "+44 7731 514129",
        phone2: "+44 161 2244033",
        person: "Mr. Sabah (Colours Travel Centre)"
    },
    {
        city: "Middlesbrough",
        address: "83 Parliament Road, Middlesbrough, TS1 4JF",
        phone1: "+44 7981 178457",
        person: "Kak Ahmad (Herbie House Supplies)"
    },
    {
        city: "Middlesbrough",
        address: "17 Gresham Road, Middlesbrough, TS1 4LY",
        phone1: "+44 7944 245878",
        person: "Kak Abdullah (Sultan Food Centre)"
    },
    {
        city: "Newcastle",
        address: "288 Old Durham Road, Gateshead, NE8 4BQ",
        phone1: "+44 7923 005678",
        person: "K Mohammed (Mobile Tech NE)"
    },
    {
        city: "Newcastle",
        address: "3 Two Ball Lonnen, Newcastle Upon Tyne, NE4 9RN",
        phone1: "+44 7762 268615",
        person: "In&Out Store"
    },
    {
        city: "Norwich",
        address: "564 Dereham Road, Norwich, NR5 8TU",
        phone1: "+44 7455 759641",
        person: "Mohammad (Westside Barbers)"
    },
    {
        city: "Nottingham",
        address: "17 Salisbury Square, Radford, Nottingham, NG7 2AB",
        phone1: "+44 7455 367567",
        person: "Kak Hemin"
    },
    {
        city: "Oxford",
        address: "293 Lffley Road, Oxford, OX4 4AQ",
        phone1: "+44 7454 250055",
        person: "Miwan/Amir (Duhok News)"
    },
    {
        city: "Peterborough",
        address: "64/66 Dogsthorpe Road, Peterborough, PE1 3AQ",
        phone1: "+44 7849 205799",
        person: "Mała Dlshad (New International Super Store)"
    },
    {
        city: "Sheffield",
        address: "115 Spital Hill, Sheffield, S4 7LD",
        phone1: "+44 7466 993160",
        person: "Kak Yadgar (Sheffield Bakery)"
    },
    {
        city: "Slough",
        address: "10 Alpha St, North, SL1 1RB",
        phone1: "+44 7454 678071",
        person: "Kak Ahmad (Pro Cut)"
    },
    {
        city: "Southampton",
        address: "15 Romsey Road, SO164BY",
        phone1: "+44 7863 503164",
        person: "Kak Karzan (Local Mini Market)"
    },
    {
        city: "Southend on Sea",
        address: "84 Sutton Road, Southend on Sea, SS2 5EW",
        phone1: "+44 7518 987129",
        person: "Mstafa/Adam"
    },
    {
        city: "Stoke-on-Trent",
        address: "73 Trinity Street, Stoke on Trent, ST1 5NA",
        phone1: "+44 7735 477682",
        person: "Shahryar (Hanley Best Store)"
    },
    {
        city: "Swansea",
        address: "The Kingsway, SA1 5LF",
        phone1: "+44 7554 066441",
        person: "Kak Bawan (Living Concept)"
    },
    {
        city: "Swindon",
        address: "95 Manchester Road, Swindon, SN1 2AJ",
        phone1: "+44 7517 171111",
        person: "Kak Zana (Swindon Launderette)"
    },
    {
        city: "Wakefield",
        address: "41 Park Lodge Lane, Wakefield, WF1 4NN",
        phone1: "+44 7588 083335",
        person: "Kak Abdullah"
    },
    {
        city: "Warrington",
        address: "204 Orgord Lane, WA2 7BE",
        phone1: "+44 7307 392907",
        person: "Kak Kawan (Wash 4 You)"
    },
    {
        city: "Wigan",
        address: "36 Wigan Lane, Wigan, WN1 1XR",
        phone1: "+44 7821 401192",
        person: "Kak Redar (Barakat Market)"
    },
    {
        city: "Worthing",
        address: "4-6 South Street, Worthing, BN14 7LH",
        phone1: "+44 7784 334611",
        person: "Kak Shirwan"
    },
    {
        city: "Wolverhampton",
        address: "46 Newhampton Road West, Wolverhampton, WV6 0RY",
        phone1: "+44 7786 424245",
        person: "Kak Dlshad & Kak Shwan (WV6 Internet Cafe)"
    },
    {
        city: "Northampton",
        address: "111 Kettering Road, Northampton, NN1 4AZ",
        phone1: "+44 7983 999363",
        phone2: "+44 7490 341423",
        person: "K Pasha, K Aram (Alim Food Ltd)"
    }
];

// Populate the directory with business cards
function loadBusinessData() {
    const list = document.getElementById('businessList');
    list.innerHTML = ''; // Clear existing content
    
    businesses.forEach(business => {
        const businessItem = document.createElement('div');
        businessItem.classList.add('business-item');
        
        // Create WhatsApp links for phone numbers
        const phone1Link = business.phone1 ? 
            `<p>Phone 1: <a href="https://wa.me/${business.phone1.replace(/\s/g, '')}" target="_blank">${business.phone1}</a></p>` : '';
        
        const phone2Link = business.phone2 ? 
            `<p>Phone 2: <a href="https://wa.me/${business.phone2.replace(/\s/g, '')}" target="_blank">${business.phone2}</a></p>` : '';
        
        // Create business card HTML
        businessItem.innerHTML = `
            <div class="business-header">
                <h3>${business.city}</h3>
                <p class="contact-person">${business.person}</p>
            </div>
            <div class="business-details">
                <p class="address">
                    <a href="https://www.google.com/maps?q=${encodeURIComponent(business.address)}" target="_blank">
                        <i class="fas fa-map-marker-alt"></i> ${business.address}
                    </a>
                </p>
                ${phone1Link}
                ${phone2Link}
                ${business.hours ? `<p class="hours"><i class="far fa-clock"></i> ${business.hours}</p>` : ''}
            </div>
        `;
        
        list.appendChild(businessItem);
    });
}

// Filter businesses based on search input
function filterCities() {
    const query = document.getElementById('citySearch').value.toLowerCase().trim();
    const list = document.getElementById('businessList');
    
    if (!query) {
        loadBusinessData();
        return;
    }
    
    const filteredBusinesses = businesses.filter(business => 
        business.city.toLowerCase().includes(query) ||
        business.person.toLowerCase().includes(query) ||
        business.address.toLowerCase().includes(query)
    );
    
    list.innerHTML = '';
    
    if (filteredBusinesses.length === 0) {
        list.innerHTML = '<div class="no-results"><p>ببورە نەدۆزرایەوە</p></div>';
        return;
    }
    
    filteredBusinesses.forEach(business => {
        const businessItem = document.createElement('div');
        businessItem.classList.add('business-item');
        
        const phone1Link = business.phone1 ? 
            `<p>Phone 1: <a href="https://wa.me/${business.phone1.replace(/\s/g, '')}" target="_blank">${business.phone1}</a></p>` : '';
        
        const phone2Link = business.phone2 ? 
            `<p>Phone 2: <a href="https://wa.me/${business.phone2.replace(/\s/g, '')}" target="_blank">${business.phone2}</a></p>` : '';
        
        businessItem.innerHTML = `
            <div class="business-header">
                <h3>${business.city}</h3>
                <p class="contact-person">${business.person}</p>
            </div>
            <div class="business-details">
                <p class="address">
                    <a href="https://www.google.com/maps?q=${encodeURIComponent(business.address)}" target="_blank">
                        <i class="fas fa-map-marker-alt"></i> ${business.address}
                    </a>
                </p>
                ${phone1Link}
                ${phone2Link}
                ${business.hours ? `<p class="hours"><i class="far fa-clock"></i> ${business.hours}</p>` : ''}
            </div>
        `;
        
        list.appendChild(businessItem);
    });
}

// Initialize on page load
window.onload = function() {
    loadBusinessData();
    
    // Add event listener for search input
    document.getElementById('citySearch').addEventListener('input', filterCities);
    
    // Focus on search box
    document.getElementById('citySearch').focus();
};
