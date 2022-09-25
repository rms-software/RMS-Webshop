import axios from 'axios'

const settings_dewit = {
    delivery: false,
    company_id: 1,
    home_banner: 'https://cdn.discordapp.com/attachments/375936269907263489/1023686750008250368/unknown.png',

    socials: {
        facebook: 'De Wit Worstenbrood',
        facebookLink: 'De-Wit-Worstenbrood-100184555272377',
        email: 'bakkerijadriaans@gmail.com',
        tel: '31610184265',
    },

    extra_info: {
        slogan: 'Un worstenbroodje van De Wit is er inne mi pit! 🔥',
        introduction: `
        Begonnen als experiment, altijd al eens zelf worstenbrood willen bakken en eind 2020 gestart mede door alle beperkingen door de Corona. Na veel testen en proberen uitgekomen bij een worstenbroodje wat door veel mensen als erg lekker werd bestempeld.<br /><br />

        Een worstenbroodje waar pit in zit is uiteindelijk het resultaat. Een worstje met een mix van diverse kruiden/specerijen. Een goed gevuld en lekker worstenbroodje van 90-95 gram. We hebben ook een milde variant waar maar ¼ deel sambal in zit.<br /><br />
        
        <ul>
            <li>Wij bakken alle bestelde worstenbroodjes vers, we bakken dus niet vooruit.</li>
            <li>Opgehaalde broodjes kunnen dus altijd ingevroren worden.</li>
            <li>Natuurlijk zijn alle worstenbroodjes hand gemaakt.</li>
            <li>We hebben eventueel worstenbroodjes uit de vriezer voor als u te laat heeft besteld en toch nog op korte termijn wil genieten van een lekker worstenbroodje van de Wit.</li>
            <li>We gebruiken half om half ongekruid gehakt.</li>
            <li>We hebben een eigen kruiden en sausjes mengsel wat we aan het gehakt toevoegen.</li>
            <li>Het brood wat om het gehakt zit is ook erg rijk van smaak.</li>
        </ul>
        
        Heb jij ze al geproefd, laat dan even een beoordeling achter op onze facebookpagina.<br /><br />
        
        Wil je bestellen, scroll dan naar beneden en maak je keuze en verstuur hem dan per mail of per whatsapp . Afhalen na afspraak in Zijtaart maar kunt een voorkeur aangeven bij je bestelling wij nemen dan contact met je op.
        `
    },
    
    server_url: process.env.NODE_ENV === 'production' ? 'https://rhino-ms.herokuapp.com' : 'http://localhost:5000',
}

const settings_adriaans = {
    delivery: false,

    socials: {
        facebook: 'BakkerijAdriaans',
        email: 'bakkerijadriaans@gmail.com',
        tel: '0624939954',
    },

    extra_info: {
        slogan: 'Lekker tot de laatste kruimel… 🍞',
        introduction: `
        Mijn naam is Tom Adriaans, ik ben 19 jaar en mijn bakkerij zit gevestigd in Zijtaart. Ik bak wekelijks vers brood, broodjes en lekkernijen. Ik bezorg het ook! Bakkerij Adriaans begonnen in 2020, altijd bakken met een lach!
        `
    },
    
    server_url: process.env.NODE_ENV === 'production' ? 'https://rhino-ms.herokuapp.com' : 'http://localhost:5000',
    company_id: 2
}

const rms_settings = settings_dewit;

const cache = {}

const cache_result = async (name, getter) => {
    if (cache[name]) {
        return cache[name]
    } else {
        cache[name] = await getter()
        return cache[name]
    }
}

const testConnection = async () => {
    const url = `${rms_settings.server_url}/api/ping`

    try {
        const response = await axios.get(url);
        return response.status === 200;    
    } catch (error) {
        return false;
    }
}

// /api/open/{companyId}/general/get-info
const getCompanyInfo = () => cache_result('getCompanyInfo', async () => {
    const url = `${rms_settings.server_url}/api/open/${rms_settings.company_id}/general/get-info`
    const response = await axios.get(url)
    response.data.socials = rms_settings.socials
    return response.data
})

// api/open/{companyId}/products/all
const getProductList = () => cache_result('getCompanyProducts', async () => {
    const url = `${rms_settings.server_url}/api/open/${rms_settings.company_id}/products/all`
    const response = await axios.get(url)
    return response.data
})

// api/open/{companyId}/orders
const placeOrder = async (order) => {
    const url = `${rms_settings.server_url}/api/open/${rms_settings.company_id}/orders`
    const response = await axios.post(url, order)
    return response.data
}

export default {
    getCompanyInfo,
    getProductList,
    testConnection,
    placeOrder,
    settings: rms_settings
}