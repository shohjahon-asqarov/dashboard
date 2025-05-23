// dom variable
const tableBody = document.getElementById('crypto-table-body');


// Sample data for the cryptocurrency table
const cryptoData = [
    {
        icon: "/images/user.png",
        name: "$ITRUMP",
        pair: "SOL",
        hash: "HasM...JibH",
        created: "4s",
        liquidity: "412.22334",
        liquidityUsd: "$72K",
        liquidityChange: "+50%",
        marketCap: "$48.03K",
        marketCapPerToken: "$0.0448",
        txns: { buy: 1, sell: 0 },
        volume: "$12.2K",
        audit: {
            mintAuth: true,
            freezeAuth: true,
            lpBurned: true,
            top10Holders: true
        }
    },
];

// Function to render the table
function renderTable() {
    tableBody.innerHTML = '';

    cryptoData.forEach(crypto => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-700 hover:bg-gray-700/30';

        // Pair Info column
        row.innerHTML = `
                    <td class="px-4 py-4">
                        <div class="flex items-center space-x-2">
                            <img src="${crypto.icon}" alt="${crypto.name}" class="w-8 h-8 rounded-full">
                            <div>
                                <div class="font-medium text-white">${crypto.name} <span class="text-header-text">/ ${crypto.pair}</span></div>
                                <div class="text-xs text-gray-400">${crypto.hash} <i class="bi bi-clipboard ml-1"></i></div>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div class="flex items-center">
                            <i class="bi bi-clock text-gray-400 mr-2"></i>
                            <span>${crypto.created}</span>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div class="flex flex-col">
                        <div class='flex space-x-1'>
                            <img src='../images/table-logo.svg' />
                            <div class="font-semibold text-sm">
                             <span>${crypto.liquidity} </span> /
                             <span class="text-header-text text-xs">${crypto.liquidityUsd}</span>
                            </div>
                        </div>
                         <div class="text-xs text-success">${crypto.liquidityChange}</div>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div>
                            <div class="font-medium">${crypto.marketCap}</div>
                            <div class="text-xs text-gray-400">${crypto.marketCapPerToken}</div>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div class="font-semibold">
                            <div class='text-sm'>${crypto.txns.buy}</div>
                            <div class="text-xs text-gray-400">
                             <span class='text-success'>${crypto.txns.buy}</span>
                             <span>/</span> 
                             <span class='text-warning'>${crypto.txns.sell}</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div class="font-medium text-sm">${crypto.volume}</div>
                    </td>

                    <td class="px-2 py-4 text-header-text font-medium">
                        <div class="flex flex-col items-start">
                            <i class="bi bi-check-circle text-success mb-1"></i>
                            <div class="text-xs">Mint Auth<br>Disabled</div>
                        </div>
                    </td>
                    <td class="px-2 py-4 text-header-text font-medium">
                        <div class="flex flex-col items-start">
                            <i class="bi bi-check-circle text-success mb-1"></i>
                            <div class="text-xs">Freeze Auth<br>Disabled</div>
                        </div>
                    </td>
                    <td class="px-2 py-4 text-header-text font-medium">
                        <div class="flex flex-col items-start">
                            <i class="bi bi-check-circle text-success mb-1"></i>
                            <div class="text-xs">LP<br>Burned</div>
                        </div>
                    </td>
                    <td class="px-2 py-4 text-header-text font-medium">
                        <div class="flex flex-col items-start">
                            <i class="bi bi-check-circle text-success mb-1"></i>
                            <div class="text-xs">Top 10<br>Holders</div>
                        </div>
                    </td>
                   
                    <td class="px-4 py-4">
                        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full flex items-center justify-center">
                            BUY <i class="bi bi-arrow-right ml-2"></i>
                        </button>
                    </td>
                `;

        tableBody.appendChild(row);
    });
}

// Render the table when the page loads
document.addEventListener('DOMContentLoaded', renderTable);