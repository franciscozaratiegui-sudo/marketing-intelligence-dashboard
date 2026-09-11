// ==========================================
// MARKETING INTELLIGENCE DASHBOARD
// ==========================================

// Datos ficticios de nuestro dashboard
const data = {
    "Últimos 30 días": {
        all: {
            revenue: 84250,
            investment: 12400,
            roas: 6.8,
            conversions: 1284
        },
        google: {
            revenue: 30240,
            investment: 4200,
            roas: 7.2,
            conversions: 520
        },
        meta: {
            revenue: 22040,
            investment: 3800,
            roas: 5.8,
            conversions: 430
        },
        email: {
            revenue: 10920,
            investment: 1200,
            roas: 9.1,
            conversions: 280
        }
    },

    "Últimos 90 días": {
        all: {
            revenue: 226500,
            investment: 34800,
            roas: 6.5,
            conversions: 3612
        },
        google: {
            revenue: 84200,
            investment: 11600,
            roas: 7.3,
            conversions: 1510
        },
        meta: {
            revenue: 70400,
            investment: 12800,
            roas: 5.5,
            conversions: 1290
        },
        email: {
            revenue: 31900,
            investment: 3500,
            roas: 9.1,
            conversions: 812
        }
    },

    "Este año": {
        all: {
            revenue: 684300,
            investment: 104500,
            roas: 6.5,
            conversions: 10942
        },
        google: {
            revenue: 254000,
            investment: 34800,
            roas: 7.3,
            conversions: 4210
        },
        meta: {
            revenue: 201500,
            investment: 36700,
            roas: 5.5,
            conversions: 3680
        },
        email: {
            revenue: 102400,
            investment: 11200,
            roas: 9.1,
            conversions: 2540
        }
    }
};


// ==========================================
// ELEMENTOS DE LA INTERFAZ
// ==========================================

const filters = document.querySelectorAll(".filters select");

const periodFilter = filters[0];
const channelFilter = filters[1];

const kpiCards = document.querySelectorAll(".kpis .card");

const revenueElement = kpiCards[0].querySelector("h2");
const investmentElement = kpiCards[1].querySelector("h2");
const roasElement = kpiCards[2].querySelector("h2");
const conversionsElement = kpiCards[3].querySelector("h2");


// ==========================================
// FORMATEAR NÚMEROS
// ==========================================

function formatCurrency(value) {
    return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0
    }).format(value);
}

function formatNumber(value) {
    return new Intl.NumberFormat("es-ES").format(value);
}


// ==========================================
// ACTUALIZAR DASHBOARD
// ==========================================

function updateDashboard() {

    const period = periodFilter.value;

    let channel = channelFilter.value;

    // Convertimos el texto del selector
    // en la clave de nuestros datos
    if (channel === "Google Ads") {
        channel = "google";
    } else if (channel === "Meta Ads") {
        channel = "meta";
    } else if (channel === "Email Marketing") {
        channel = "email";
    } else {
        channel = "all";
    }

    const results = data[period][channel];

    // Actualizamos los KPIs
    revenueElement.textContent = formatCurrency(results.revenue);

    investmentElement.textContent =
        formatCurrency(results.investment);

    roasElement.textContent =
        results.roas.toFixed(1) + "x";

    conversionsElement.textContent =
        formatNumber(results.conversions);

    console.log("Dashboard actualizado:", results);
}


// ==========================================
// EVENTOS DE LOS FILTROS
// ==========================================

periodFilter.addEventListener("change", updateDashboard);

channelFilter.addEventListener("change", updateDashboard);


// ==========================================
// CARGAR DATOS INICIALES
// ==========================================

updateDashboard();
