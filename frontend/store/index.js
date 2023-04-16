export const state = () => ({
    apiUrl: process.env.STRAPI_API_URL || "https://it7qkyesbfvuustk6819.cleaver.live/api",
    url: process.env.STRAPI_URL || "https://it7qkyesbfvuustk6819.cleaver.live",
    Navbar: [],
    Homepage: [],
    Pricing: [],
    Feature: []
})


export const getters = {
    Navbar: (state) => state.Navbar,
    Homepage: (state) => state.Homepage,
    Pricing: (state) => state.Pricing,
    Feature: (state) => state.Feature
}

export const mutations = {
    setNavbar: (state, items) => (state.Navbar = items),
    setHomepage: (state, items) => (state.Homepage = items),
    setPricing: (state, items) => (state.Pricing = items),
    setFeature: (state, items) => (state.Feature = items)
}